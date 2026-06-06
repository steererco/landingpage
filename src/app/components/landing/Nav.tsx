"use client";

// Sticky top nav — blurs and gains a hairline once the page scrolls.
import { useEffect, useState, type JSX } from "react";

export const Nav = (): JSX.Element => {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"s-nav" + (stuck ? " is-stuck" : "")}>
      {/* "/#anchor" hrefs scroll in place on the landing and navigate home from subpages */}
      <div className="s-wrap s-nav__inner">
        <a href="/#top" className="s-nav__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/steerer-wordmark-navy.svg" alt="Steerer" />
        </a>
        <div className="s-nav__links">
          <a href="/#features">Features</a>
          <a href="/#how">How it works</a>
          <a href="/#sports">Sports</a>
          <a href="/#proof">Teams</a>
        </div>
        <div className="s-nav__spacer" />
        <a
          href="/#download"
          className="s-btn s-btn--accent"
          style={{ height: 44, padding: "0 20px", fontSize: 14.5 }}
        >
          Get the app
        </a>
      </div>
    </nav>
  );
};
