// Core feature bento — each card carries a small light "screenshot"
// of the product to keep it the star.
// Ported from the design handoff (features.jsx).
import { ReactNode } from "react";
import { Avatar } from "./Avatar";
import { IconComponent, Icons } from "./icons";
import { TeamCrest } from "./TeamCrest";

const MockShell = ({
  children,
  title,
  sub,
}: {
  children: ReactNode;
  title?: string;
  sub?: string;
}): JSX.Element => (
  <div
    style={{
      background: "#fff",
      borderRadius: 16,
      padding: 14,
      color: "var(--black-1)",
      fontFamily: "var(--font-body)",
    }}
  >
    {(title || sub) && (
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 14,
            color: "var(--blue-navy)",
          }}
        >
          {title}
        </span>
        {sub && (
          <span style={{ fontSize: 11.5, color: "var(--gray-2)", fontWeight: 600 }}>{sub}</span>
        )}
      </div>
    )}
    {children}
  </div>
);

const FeatureHead = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: IconComponent;
  title: string;
  desc: string;
}): JSX.Element => (
  <div style={{ marginBottom: 18 }}>
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 13,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--s-accent)",
        background: "color-mix(in srgb, var(--s-accent) 14%, transparent)",
        border: "1px solid color-mix(in srgb, var(--s-accent) 30%, transparent)",
        marginBottom: 14,
      }}
    >
      <Icon size={22} />
    </div>
    <h3
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: "-0.02em",
        margin: 0,
        color: "var(--s-ink)",
      }}
    >
      {title}
    </h3>
    <p style={{ margin: "8px 0 0", color: "var(--s-dim)", fontSize: 15, lineHeight: 1.55 }}>
      {desc}
    </p>
  </div>
);

/* ---- mini mocks ---- */
const RosterMock = (): JSX.Element => {
  const rows = [
    { n: "Marco Reyes", pos: "FW", cap: true },
    { n: "Tom Bauer", pos: "MF" },
    { n: "Jamie Silva", pos: "DF" },
  ];
  return (
    <MockShell title="Squad" sub="18 players">
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {rows.map((r) => (
          <div
            key={r.n}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              padding: "7px 6px",
              borderRadius: 10,
            }}
          >
            <Avatar name={r.n} size={34} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 13.5,
                  color: "var(--black-1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {r.n}
                {r.cap && (
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: "var(--blue)",
                      background: "var(--blue-tint)",
                      padding: "1px 5px",
                      borderRadius: 4,
                      letterSpacing: "0.04em",
                    }}
                  >
                    C
                  </span>
                )}
              </div>
            </div>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--gray-2)" }}>{r.pos}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 12px",
          borderRadius: 12,
          background: "var(--blue-tint)",
          border: "1px dashed color-mix(in srgb, var(--blue) 40%, transparent)",
        }}
      >
        <span style={{ color: "var(--blue)" }}>
          <Icons.link size={18} />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--blue-navy)" }}>
            Invite via link
          </div>
          <div style={{ fontSize: 11, color: "var(--gray-2)" }}>Code JOIN-7F3K</div>
        </div>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#fff",
            background: "var(--blue)",
            padding: "6px 12px",
            borderRadius: 8,
          }}
        >
          Copy
        </span>
      </div>
    </MockShell>
  );
};

const ScoringMock = (): JSX.Element => (
  <MockShell title="Live" sub="67'">
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 6 }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <TeamCrest color="var(--blue-navy)" initials="ZU" size={40} />
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 34,
          color: "var(--blue-navy)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        2 – 1
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <TeamCrest color="var(--blue-light)" initials="RV" size={40} />
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 12 }}>
      {[
        ["67'", "Goal · J. Silva"],
        ["41'", "Goal · D. Hughes"],
      ].map((e) => (
        <div key={e[0]} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5 }}>
          <span style={{ width: 26, textAlign: "right", fontWeight: 700, color: "var(--gray-2)" }}>
            {e[0]}
          </span>
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 7,
              background: "var(--blue-tint)",
              color: "var(--blue)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons.ball size={13} />
          </span>
          <span style={{ fontWeight: 600, color: "var(--black-1)" }}>{e[1]}</span>
        </div>
      ))}
    </div>
  </MockShell>
);

const SportPickMock = (): JSX.Element => {
  const sports = [
    { i: Icons.ball, l: "Football", on: true },
    { i: Icons.trophy, l: "Basketball", on: false },
    { i: Icons.bolt, l: "Tennis", on: false },
    { i: Icons.star, l: "Padel", on: false },
  ];
  return (
    <MockShell title="Choose sport" sub="+ custom">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {sports.map((s) => {
          const Icon = s.i;
          return (
            <div
              key={s.l}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "11px 12px",
                borderRadius: 11,
                fontWeight: 700,
                fontSize: 13,
                background: s.on ? "var(--blue)" : "var(--surface-2)",
                color: s.on ? "#fff" : "var(--blue-navy)",
              }}
            >
              <Icon size={17} />
              {s.l}
            </div>
          );
        })}
      </div>
    </MockShell>
  );
};

const ChatMock = (): JSX.Element => (
  <MockShell title="Team chat" sub="live">
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <div
        style={{
          alignSelf: "flex-start",
          maxWidth: "82%",
          background: "var(--surface-2)",
          borderRadius: "12px 12px 12px 4px",
          padding: "8px 11px",
          fontSize: 12.5,
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 11, color: "var(--blue)", marginBottom: 2 }}>
          Coach Dan
        </div>
        Warm-up 6:30. Be sharp tonight ⚽
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: "82%",
          background: "var(--blue)",
          color: "#fff",
          borderRadius: "12px 12px 4px 12px",
          padding: "8px 11px",
          fontSize: 12.5,
        }}
      >
        On my way 💪
      </div>
    </div>
    <div
      style={{
        marginTop: 12,
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "10px 12px",
        borderRadius: 12,
        background: "var(--blue-navy)",
        color: "#fff",
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: 9,
          background: "rgba(255,255,255,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        <Icons.bell size={16} />
      </span>
      <div style={{ flex: 1, lineHeight: 1.3 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700 }}>GOAL! Zenith 2 – 1</div>
        <div style={{ fontSize: 11, opacity: 0.7 }}>Push · just now</div>
      </div>
    </div>
  </MockShell>
);

const FEATURES = [
  {
    span: 7,
    icon: Icons.users,
    title: "Roster & invites",
    desc: "Spin up a team in seconds. Manage the squad and invite players with a single link or join code — no chasing.",
    mock: RosterMock,
  },
  {
    span: 5,
    icon: Icons.bolt,
    title: "Live scoring",
    desc: "Log goals, cards and subs in real time, right from the touchline. Your phone is the scoreboard.",
    mock: ScoringMock,
  },
  {
    span: 5,
    icon: Icons.chat,
    title: "Chat & real-time",
    desc: "Team chat, live match updates and push notifications keep everyone in sync — on and off the pitch.",
    mock: ChatMock,
  },
  {
    span: 7,
    icon: Icons.trophy,
    title: "Multisport scoring",
    desc: "Football, basketball, tennis, padel and custom sports — each with its own sets, periods and quarters.",
    mock: SportPickMock,
  },
];

export const FeatureBento = (): JSX.Element => (
  <div className="feat-grid">
    {FEATURES.map((f) => {
      const Mock = f.mock;
      return (
        <div key={f.title} className="feat-card s-card reveal" style={{ gridColumn: `span ${f.span}` }}>
          <FeatureHead icon={f.icon} title={f.title} desc={f.desc} />
          <Mock />
        </div>
      );
    })}
  </div>
);
