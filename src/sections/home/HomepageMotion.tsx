"use client";

import { useEffect } from "react";

export default function HomepageMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        target.setAttribute("data-entered", "true");
        observer.unobserve(target);
      }
    }, { rootMargin: "0px 0px -40px", threshold: 0 });

    document.querySelectorAll("#home [data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
