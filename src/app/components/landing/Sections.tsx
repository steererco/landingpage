// Landing page sections: problem→promise, how-it-works, multisport,
// social proof and the final navy CTA block.
import { IconComponent, Icons } from "./icons";
import { Avatar } from "./Avatar";
import { MultiScoreboard } from "./MultiScoreboard";
import { StoreBadges } from "./StoreBadges";

/* ---------------- Problem → Promise ---------------- */
const CHAOS = ["Group chats", "Spreadsheets", "Paper team sheets", "Lost replies", "Who's playing?"];

const PILLS: [IconComponent, string][] = [
  [Icons.users, "Roster"],
  [Icons.bolt, "Live scoring"],
  [Icons.chat, "Team chat"],
];

export const ProblemPromise = (): JSX.Element => (
  <section className="s-section s-section--tight pp">
    <div className="s-wrap pp__grid">
      <div className="pp__from reveal">
        <span className="pp__tag pp__tag--bad">Before</span>
        <h3 className="pp__h">Running a team is chaos.</h3>
        <div className="pp__chips">
          {CHAOS.map((c) => (
            <span key={c} className="pp__chip">
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="pp__arrow reveal">
        <Icons.chevronRight size={30} />
      </div>
      <div className="pp__to reveal s-card">
        <span className="pp__tag pp__tag--good">With Steerer</span>
        <h3 className="pp__h">Everything in one place.</h3>
        <p className="s-lead" style={{ fontSize: 16 }}>
          Roster, fixtures, live scoring and chat — one app the whole team actually opens.
        </p>
        <div className="pp__pills">
          {PILLS.map(([Icon, label]) => (
            <span key={label} className="pp__pill">
              <Icon size={16} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Section header ---------------- */
export const SecHead = ({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}): JSX.Element => (
  <div className="s-sechead reveal">
    <span className="s-eyebrow">{eyebrow}</span>
    <h2 className="s-h2">{title}</h2>
    {lead && <p className="s-lead">{lead}</p>}
  </div>
);

/* ---------------- How it works ---------------- */
const STEPS = [
  {
    n: "01",
    icon: Icons.users,
    t: "Create your team",
    d: "Name your club, pick your sport and set up your squad in under a minute.",
  },
  {
    n: "02",
    icon: Icons.link,
    t: "Invite players",
    d: "Share a link or join code. Players hop in, fill their profile and you're rolling.",
  },
  {
    n: "03",
    icon: Icons.bolt,
    t: "Run matches live",
    d: "Score goals, cards and subs in real time. The whole team follows along, live.",
  },
];

export const HowItWorks = (): JSX.Element => (
  <section className="s-section" id="how">
    <div className="s-wrap">
      <SecHead
        eyebrow="How it works"
        title="From zero to kick-off in three steps."
        lead="No setup marathon. No spreadsheets. Just you, your team and match day."
      />
      <div className="steps">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.n} className="step s-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="step__top">
                <span className="step__icon">
                  <Icon size={22} />
                </span>
                <span className="step__n">{s.n}</span>
              </div>
              <h3 className="step__t">{s.t}</h3>
              <p className="step__d">{s.d}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------------- Multisport ---------------- */
export const Multisport = (): JSX.Element => (
  <section className="s-section s-section--alt" id="sports">
    <div className="s-wrap">
      <SecHead
        eyebrow="Multisport"
        title="One app. Every scoreboard."
        lead="Steerer adapts to how your sport actually scores — sets, games, periods, quarters or your own custom rules. Tap a sport to see it switch."
      />
      <div className="reveal" style={{ marginTop: 44 }}>
        <MultiScoreboard />
      </div>
    </div>
  </section>
);

/* ---------------- Social proof ---------------- */
const STATS: [string, string][] = [
  ["12k+", "Teams on Steerer"],
  ["480k", "Matches scored live"],
  ["5+", "Sports, plus custom"],
  ["40+", "Leagues represented"],
];

const CLUBS = ["Riverside FC", "North Owls", "Forge Athletic", "City Padel Club", "Harbor United"];

export const SocialProof = (): JSX.Element => (
  <section className="s-section" id="proof">
    <div className="s-wrap proof__grid">
      <figure className="proof__quote s-card reveal" style={{ margin: 0 }}>
        <div className="proof__stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i}>
              <Icons.star size={18} />
            </span>
          ))}
        </div>
        <blockquote className="proof__text" style={{ margin: 0 }}>
          “We ditched three group chats and a spreadsheet. Now the squad shows up knowing the
          line-up, and parents follow the score live from the stands. Steerer just runs our Sunday
          league.”
        </blockquote>
        <figcaption className="proof__by">
          <span className="proof__av">
            <Avatar name="Dan Whitlock" size={48} />
          </span>
          <div>
            <div className="proof__name">Dan Whitlock</div>
            <div className="proof__role">Head coach · Riverside FC</div>
          </div>
        </figcaption>
      </figure>
      <div className="proof__stats reveal">
        <div className="s-stats">
          {STATS.map(([num, lbl]) => (
            <div key={lbl} className="s-stat">
              <div className="s-stat__num accent">{num}</div>
              <div className="s-stat__lbl">{lbl}</div>
            </div>
          ))}
        </div>
        <div className="proof__logos">
          <span className="proof__logos-label">Trusted by clubs across</span>
          <div className="proof__logo-row">
            {CLUBS.map((n) => (
              <span key={n} className="proof__logo">
                {/* Tailwind preflight forces img { height: auto } — size it inline */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/steerer-shield-blue.svg" alt="" style={{ height: 18, opacity: 0.85 }} />
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Final CTA ---------------- */
export const FinalCTA = (): JSX.Element => (
  <section className="s-section cta" id="download">
    <div className="s-wrap">
      <div className="cta__card reveal">
        <div className="cta__glow" />
        <span className="s-eyebrow" style={{ justifyContent: "center" }}>
          Free to start
        </span>
        <h2 className="cta__h s-display">Your next match deserves better than a group chat.</h2>
        <p className="s-lead" style={{ maxWidth: 540, margin: "18px auto 0" }}>
          Download Steerer, spin up your team and run your first match live this weekend.
        </p>
        <div className="cta__badges">
          <StoreBadges />
        </div>
      </div>
    </div>
  </section>
);
