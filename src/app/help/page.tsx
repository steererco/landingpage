import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "../components/landing/SubpageShell";
import { FaqAccordion } from "./FaqAccordion";

import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Help centre — Steerer",
  description: "Answers to common questions about the Steerer app, plus how to reach support.",
};

const HelpPage = (): JSX.Element => (
  <SubpageShell
    eyebrow="Support"
    title="Help centre"
    lead="Everything you need to know about app"
  >
    <div className="help__grid">
      <aside className="help__aside s-card">
        <h2 className="help__aside-h">Can&apos;t find an answer?</h2>
        <p>
          Write to us at{" "}
          <a href="mailto:support@steerer.co" style={{ color: "var(--s-accent)", fontWeight: 600 }}>
            support@steerer.co
          </a>{" "}
          — we usually reply within a day.
        </p>
        <div className="help__aside-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </aside>
      <FaqAccordion />
    </div>
  </SubpageShell>
);

export default HelpPage;
