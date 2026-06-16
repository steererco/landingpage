"use client";
import { useEffect, useRef, useState, type JSX } from "react";
// App-store badges — dark pills on the light theme, inverted inside
// the navy CTA card (see globals.css .cta__card overrides).
export const APP_STORE_URL = "https://apps.apple.com/us/app/steerer/id6756191290";
// Android build isn't published yet — the Google Play badge surfaces a
// "coming soon" toast instead of linking out.
const GOOGLE_PLAY_TOAST_MS = 2600;

const AppleMark = (): JSX.Element => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="#fff">
    <path d="M17.05 12.5c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.47 7.83 1.3 10.39.86 1.25 1.89 2.66 3.23 2.61 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.28-1.28 3.14-2.54.99-1.46 1.4-2.87 1.42-2.94-.03-.01-2.72-1.04-2.75-4.13zM14.6 4.84c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.69-3.02 1.55-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.58 3.03-1.45z" />
  </svg>
);

const GoogleMark = (): JSX.Element => (
  <svg width={22} height={24} viewBox="0 0 22 24" fill="none">
    <path
      d="M1.6 1.2C1.35 1.45 1.2 1.84 1.2 2.34v19.32c0 .5.15.89.4 1.14l.07.06L12.6 12.07v-.14L1.67 1.14l-.07.06z"
      fill="#00D3FF"
    />
    <path
      d="M16.2 15.72l-3.6-3.65v-.14l3.6-3.65.08.05 4.27 2.42c1.22.69 1.22 1.83 0 2.53l-4.27 2.43-.08.01z"
      fill="#FFCE00"
    />
    <path d="M16.28 15.67L12.6 12 1.6 22.86c.4.42 1.07.48 1.82.06l12.86-7.25" fill="#FF3D44" />
    <path d="M16.28 8.33L3.42 1.08C2.67.66 2 .72 1.6 1.14L12.6 12l3.68-3.67z" fill="#00E07A" />
  </svg>
);

export const StoreBadges = (): JSX.Element => {
  const [toast, setToast] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear any pending dismissal timer if the component unmounts mid-toast.
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const showComingSoon = () => {
    setToast(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(false), GOOGLE_PLAY_TOAST_MS);
  };

  return (
    <div className="s-badges">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="s-store"
        aria-label="Download on the App Store"
      >
        <AppleMark />
        <span>
          <span className="s-store__sub">Download on the</span>
          <span className="s-store__main">App Store</span>
        </span>
      </a>
      <button
        type="button"
        onClick={showComingSoon}
        className="s-store"
        aria-label="Google Play — coming soon"
      >
        <GoogleMark />
        <span>
          <span className="s-store__sub">GET IT ON</span>
          <span className="s-store__main">Google Play</span>
        </span>
      </button>
      <div
        className={`s-toast${toast ? " s-toast--on" : ""}`}
        role="status"
        aria-hidden={!toast}
      >
        Android app coming soon
      </div>
    </div>
  );
};
