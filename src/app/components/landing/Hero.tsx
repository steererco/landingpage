// Hero — bold three-line headline beside the live match-scoring phone.
import { Icons } from "./icons";
import { LiveMatchScreen } from "./LiveMatchScreen";
import { PhoneFrame } from "./Phone";
import { StoreBadges } from "./StoreBadges";

import type { JSX } from "react";

const HEADLINE = ["Run your team.", "Score the match.", "Live."];

export const Hero = (): JSX.Element => (
  <header id="top" className="s-section hero">
    <div className="s-wrap hero__grid">
      <div className="hero__copy">
        <span className="s-eyebrow">For grassroots · amateur · semi-pro</span>
        <h1 className="s-display hero__title">
          {HEADLINE.map((line, i) => (
            <span
              key={line}
              style={{ display: "block", color: i === 1 ? "var(--s-accent)" : "var(--s-ink)" }}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="s-lead hero__lead">
          Steerer puts your roster, real-time match scoring and team chat in one app. Stop juggling
          group chats, spreadsheets and paper — run match day from your pocket.
        </p>
        <div className="hero__cta">
          <StoreBadges />
        </div>
        <div className="hero__trust">
          <div className="hero__stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} style={{ color: "var(--s-accent)" }}>
                <Icons.star size={16} />
              </span>
            ))}
          </div>
          <span>
            <strong style={{ color: "var(--s-ink)" }}>4.9</strong> · loved by 12,000+ teams
          </span>
        </div>
      </div>
      <div className="hero__phone">
        <div className="hero__glow" />
        <PhoneFrame>
          <LiveMatchScreen />
        </PhoneFrame>
      </div>
    </div>
  </header>
);
