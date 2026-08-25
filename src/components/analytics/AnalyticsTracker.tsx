"use client";

import { useEffect } from "react";

type AnalyticsPayload = Record<string, string | number>;

function report(event: string, payload: AnalyticsPayload = {}) {
  const detail = { event, ...payload, path: window.location.pathname };
  window.dispatchEvent(new CustomEvent("krayirhan:analytics", { detail }));

  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  if (!endpoint) return;

  const body = JSON.stringify(detail);
  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
    return;
  }

  void fetch(endpoint, {
    method: "POST",
    body,
    headers: { "content-type": "application/json" },
    keepalive: true,
  });
}

export function AnalyticsTracker() {
  useEffect(() => {
    const milestones = new Set<number>();

    const onClick = (event: MouseEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>("[data-analytics-event]");
      const name = element?.dataset.analyticsEvent;
      if (name) report(name, { target: element?.dataset.analyticsTarget ?? "unknown" });
    };

    const onScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;
      const progress = Math.round((window.scrollY / documentHeight) * 100);
      [25, 50, 75, 100].forEach((milestone) => {
        if (progress >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          report("scroll_depth", { percent: milestone });
        }
      });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
