"use client";

// Opt-in cookie consent gate. GA4 and the Zoho SalesIQ chat widget load only
// after the visitor accepts; the choice persists for 12 months and can be
// revisited via the "Cookie preferences" footer link (REOPEN_EVENT).
// California operates opt-out (disclosure in the Privacy Notice suffices),
// but gating satisfies the stricter EU/UK ePrivacy opt-in regime too.
import * as React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import ZohoWidget from "./ZohoWidget";

type Consent = "accepted" | "declined";

const STORAGE_KEY = "steerer-cookie-consent";
const REOPEN_EVENT = "steerer:cookie-prefs";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // re-ask after 12 months

// Consent lives in localStorage; expose it to React as an external store so
// reads stay hydration-safe (server snapshot: undecided).
let listeners: Array<() => void> = [];
const subscribe = (listener: () => void) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
const notify = () => listeners.forEach((l) => l());

const getConsentSnapshot = (): Consent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const { value, ts } = parsed as { value?: unknown; ts?: unknown };
    if (typeof ts !== "number" || Date.now() - ts > MAX_AGE_MS) return null;
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
};
const getServerConsentSnapshot = (): Consent | null => null;

const storeConsent = (value: Consent) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, ts: Date.now() }));
  } catch {
    // Storage unavailable (private mode etc.) — banner will simply re-appear.
  }
  notify();
};

// Best-effort removal of Google Analytics cookies when consent is withdrawn.
const clearAnalyticsCookies = () => {
  const domains = ["", `; domain=${location.hostname}`, `; domain=.${location.hostname}`];
  document.cookie
    .split(";")
    .map((c) => c.split("=")[0]?.trim())
    .filter((name): name is string => !!name && (name === "_gid" || name.startsWith("_ga")))
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      });
    });
};

const CookieConsent = ({ gaId }: { gaId: string }) => {
  const consent = React.useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    getServerConsentSnapshot
  );
  const [reopened, setReopened] = React.useState(false);

  React.useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const decide = (value: Consent) => {
    const previous = consent;
    storeConsent(value);
    setReopened(false);
    if (value === "declined" && previous === "accepted") {
      // Withdrawal: drop GA cookies and reload so already-running trackers stop.
      clearAnalyticsCookies();
      window.location.reload();
    }
  };

  const open = consent === null || reopened;

  return (
    <>
      {consent === "accepted" && (
        <>
          <GoogleAnalytics gaId={gaId} />
          <ZohoWidget />
        </>
      )}
      {open && (
        <div className="cookie__banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
          <p className="cookie__text">
            We use cookies for analytics (Google Analytics) and the support chat
            widget (Zoho SalesIQ). They load only if you accept. See our{" "}
            <a href="/privacy">Privacy Notice</a>.
          </p>
          <div className="cookie__actions">
            <button type="button" className="s-btn s-btn--ghost" onClick={() => decide("declined")}>
              Decline
            </button>
            <button type="button" className="s-btn s-btn--accent" onClick={() => decide("accepted")}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Footer link that re-opens the banner so consent can be changed at any time.
export const CookiePrefsButton = () => (
  <button
    type="button"
    className="footer__link cookie__prefs"
    onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
  >
    Cookie preferences
  </button>
);

export default CookieConsent;
