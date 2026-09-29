"use client";

import { useEffect, useState } from "react";

export function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(format, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return <time dateTime={time}>{time || "PT"}</time>;
}
