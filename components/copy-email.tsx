"use client";

import { useState } from "react";

function copyText(value: string) {
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.append(field);
  field.select();
  field.setSelectionRange(0, value.length);
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  field.remove();
  return copied;
}

export function CopyEmail({ email, className }: { email: string; className: string }) {
  const [copied, setCopied] = useState(false);

  function showCopied() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <a
      className={className}
      href={`mailto:${email}`}
      aria-label={copied ? `${email} copied` : `Copy ${email}`}
      onClick={(event) => {
        event.preventDefault();
        const link = event.currentTarget;
        const legacy = copyText(email);
        void navigator.clipboard.writeText(email).then(showCopied, () => {
          if (legacy) {
            showCopied();
            return;
          }
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(link);
          selection?.removeAllRanges();
          selection?.addRange(range);
        });
      }}
    >
      {email}
      {copied ? <span className="ml-2 text-phosphor">Copied</span> : null}
    </a>
  );
}
