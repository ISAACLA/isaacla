"use client";

import { useEffect, useState } from "react";

export function TypedIntro({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      const reveal = window.setTimeout(() => setCount(text.length), 0);
      return () => window.clearTimeout(reveal);
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setCount(index);
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 18);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <p className="relative text-left text-[0.92rem] leading-relaxed text-ink">
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-x-0 top-0" aria-hidden="true">
        {text.slice(0, count)}
        <span className="animate-blink text-phosphor motion-reduce:animate-none">_</span>
      </span>
      <span className="sr-only">{text}</span>
    </p>
  );
}
