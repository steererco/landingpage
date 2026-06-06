// Footer — brand blurb, link columns (Terms / Privacy / Help keep
// their existing routes) and the social row.
import Link from "next/link";

import type { JSX } from "react";

const COLUMNS: { heading: string; links: { label: string; href: string; external?: boolean }[] }[] =
  [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how" },
        { label: "Sports", href: "#sports" },
        { label: "Get the app", href: "#download" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Teams", href: "#proof" },
        { label: "Contact", href: "mailto:support@steerer.co" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
        { label: "Help", href: "/help" },
      ],
    },
  ];

const SOCIALS = [
  { label: "IG", title: "Instagram", href: "https://www.instagram.com/steerer.co/" },
  { label: "X", title: "X (Twitter)", href: "https://twitter.com/SteererCo" },
  { label: "in", title: "LinkedIn", href: "https://www.linkedin.com/company/steererco/" },
  { label: "f", title: "Facebook", href: "https://www.facebook.com/steererco" },
];

export const LandingFooter = (): JSX.Element => (
  <footer className="s-footer">
    <div className="s-wrap footer__grid">
      <div>
        {/* Tailwind preflight forces img { height: auto } — size it inline */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/steerer-wordmark-navy.svg" alt="Steerer" style={{ height: 22 }} />
        <p
          style={{
            color: "var(--s-dim)",
            fontSize: 13.5,
            marginTop: 14,
            maxWidth: 280,
            lineHeight: 1.6,
          }}
        >
          The app that runs your team — roster, live scoring and chat, for grassroots and semi-pro
          clubs.
        </p>
      </div>
      <div className="footer__cols">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <div className="footer__h">{col.heading}</div>
            {col.links.map((l) =>
              l.href.startsWith("/") ? (
                <Link key={l.label} href={l.href} className="footer__link">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} className="footer__link">
                  {l.label}
                </a>
              )
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="s-wrap footer__base">
      <span>© {new Date().getFullYear()} Steerer. All rights reserved.</span>
      <div className="footer__social">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.title}>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
