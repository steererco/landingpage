"use client";

// Multisport showcase — one product-authentic scoreboard card that
// morphs to each sport's own scoring system.
// Ported from the design handoff (scoreboards.jsx).
import { CSSProperties, useState } from "react";
import { Icons } from "./icons";
import { TeamCrest } from "./TeamCrest";

interface SbTeam {
  name: string;
  initials: string;
  color: string;
  serving?: boolean;
}

interface SbSportData {
  comp: string;
  live?: boolean;
  chips: string[];
  // ball sports
  home?: SbTeam;
  away?: SbTeam;
  big?: string;
  clock?: string;
  period?: string;
  quarters?: [string, string][];
  // racket sports
  racket?: boolean;
  bestOf?: string;
  p1?: SbTeam;
  p2?: SbTeam;
  cols?: string[];
  rows?: string[][];
}

const SB_SPORTS = [
  { id: "soccer", label: "Football" },
  { id: "basket", label: "Basketball" },
  { id: "tennis", label: "Tennis" },
  { id: "padel", label: "Padel" },
] as const;

type SportId = (typeof SB_SPORTS)[number]["id"];

const SB_DATA: Record<SportId, SbSportData> = {
  soccer: {
    comp: "Sunday Premier League · MD14",
    home: { name: "Zenith United", initials: "ZU", color: "var(--blue-navy)" },
    away: { name: "Rovers FC", initials: "RV", color: "var(--blue-light)" },
    big: "2 – 1",
    clock: "63:20",
    period: "2nd Half",
    live: true,
    chips: ["Goals", "Cards", "Subs"],
  },
  basket: {
    comp: "City Hoops League · Game 9",
    home: { name: "Forge Bears", initials: "FB", color: "#C2410C" },
    away: { name: "North Owls", initials: "NO", color: "var(--blue-navy)" },
    big: "78 – 64",
    clock: "07:12",
    period: "Quarter 3",
    live: true,
    quarters: [
      ["Q1", "22–18"],
      ["Q2", "19–15"],
      ["Q3", "37–31"],
    ],
    chips: ["+1 / +2 / +3", "Fouls", "Timeout"],
  },
  tennis: {
    comp: "Riverside Open · Semi-final",
    racket: true,
    bestOf: "Best of 3",
    live: true,
    p1: { name: "A. Moreau", initials: "AM", color: "var(--blue-navy)", serving: true },
    p2: { name: "K. Petrov", initials: "KP", color: "var(--blue-light)", serving: false },
    cols: ["Set 1", "Set 2", "Set 3", "Game"],
    rows: [
      ["6", "4", "3", "40"],
      ["4", "6", "2", "30"],
    ],
    chips: ["Point", "Ace", "Fault"],
  },
  padel: {
    comp: "Padel Club Cup · Round 2",
    racket: true,
    bestOf: "Golden point",
    live: true,
    p1: { name: "Vega / Sanz", initials: "VS", color: "#0E7C57", serving: true },
    p2: { name: "Roca / Diaz", initials: "RD", color: "var(--blue-navy)", serving: false },
    cols: ["Set 1", "Set 2", "Game"],
    rows: [
      ["6", "5", "40"],
      ["3", "4", "40"],
    ],
    chips: ["Point", "Golden point", "Change"],
  },
};

export const MultiScoreboard = (): JSX.Element => {
  const [sport, setSport] = useState<SportId>("soccer");
  const d = SB_DATA[sport];

  return (
    <div style={{ width: "100%", maxWidth: 520, margin: "0 auto" }}>
      {/* switcher */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: 6,
          background: "var(--s-track)",
          border: "1px solid var(--s-line)",
          borderRadius: 999,
          marginBottom: 22,
        }}
      >
        {SB_SPORTS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSport(s.id)}
            style={{
              flex: 1,
              height: 42,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 14,
              transition: "all .2s cubic-bezier(.16,1,.3,1)",
              background: sport === s.id ? "var(--s-accent)" : "transparent",
              color: sport === s.id ? "var(--s-accent-ink)" : "var(--s-dim)",
              boxShadow: sport === s.id ? "0 8px 22px -10px var(--s-glow)" : "none",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* the card */}
      <div
        key={sport}
        className="sb-card"
        style={{
          background: "#fff",
          borderRadius: 22,
          padding: "20px 20px 18px",
          boxShadow: "0 40px 90px -50px rgba(0,0,0,0.9)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--gray-2)" }}>{d.comp}</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: d.live ? "var(--danger)" : "var(--gray-2)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 10.5,
              letterSpacing: "0.08em",
              padding: "4px 9px",
              borderRadius: 999,
            }}
          >
            <span
              className="lm-dot"
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }}
            />
            {d.live ? "LIVE" : "FT"}
          </span>
        </div>

        {d.racket ? <SbRacket d={d} /> : <SbBall d={d} />}

        {/* scoring controls hint */}
        <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
          {d.chips.map((c, i) => (
            <span
              key={c}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 12px",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 600,
                background: i === 0 ? "var(--blue-tint)" : "var(--surface-2)",
                color: i === 0 ? "var(--blue)" : "var(--gray-2)",
              }}
            >
              {i === 0 && <Icons.bolt size={13} />}
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SbCrest = ({ team }: { team: SbTeam }): JSX.Element => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
    <div style={{ position: "relative" }}>
      <TeamCrest color={team.color} initials={team.initials} size={56} />
      {team.serving && (
        <span
          style={{
            position: "absolute",
            right: -2,
            bottom: 2,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "var(--success)",
            border: "2px solid #fff",
          }}
        />
      )}
    </div>
    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--blue-navy)", textAlign: "center" }}>
      {team.name}
    </span>
  </div>
);

const SbBall = ({ d }: { d: SbSportData }): JSX.Element => (
  <div>
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 10 }}
    >
      <SbCrest team={d.home!} />
      <div style={{ textAlign: "center", minWidth: 120 }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--blue-navy)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {d.big}
        </div>
        <div
          style={{
            marginTop: 10,
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "var(--surface-2)",
            borderRadius: 999,
            padding: "6px 13px",
            fontWeight: 700,
            fontSize: 13.5,
            color: "var(--blue-navy)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {d.live && (
            <span
              className="lm-dot"
              style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--danger)" }}
            />
          )}
          {d.clock}
          <span style={{ color: "var(--gray-1)" }}>·</span>
          {d.period}
        </div>
      </div>
      <SbCrest team={d.away!} />
    </div>
    {d.quarters && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 16,
          paddingTop: 14,
          borderTop: "1px solid var(--line)",
        }}
      >
        {d.quarters.map((q) => (
          <div key={q[0]} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--gray-1)",
                letterSpacing: "0.04em",
              }}
            >
              {q[0]}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "var(--blue-navy)",
                marginTop: 3,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {q[1]}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const SbRacket = ({ d }: { d: SbSportData }): JSX.Element => {
  const cols = d.cols!;
  const players = [
    { ...d.p1!, scores: d.rows![0] },
    { ...d.p2!, scores: d.rows![1] },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <div style={{ display: "flex", gap: 18 }}>
          <SbCrest team={d.p1!} />
          <SbCrest team={d.p2!} />
        </div>
        <span
          style={{ fontSize: 12, fontWeight: 600, color: "var(--gray-2)", alignSelf: "flex-start" }}
        >
          {d.bestOf}
        </span>
      </div>
      <div style={{ marginTop: 4, borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
        {/* header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `1fr repeat(${cols.length}, 56px)`,
            background: "var(--surface-2)",
          }}
        >
          <span style={sbCell(true)}>Player</span>
          {cols.map((c, i) => (
            <span
              key={c}
              style={{
                ...sbCell(true),
                textAlign: "center",
                color: i === cols.length - 1 ? "var(--blue)" : "var(--gray-2)",
              }}
            >
              {c}
            </span>
          ))}
        </div>
        {players.map((p, ri) => (
          <div
            key={ri}
            style={{
              display: "grid",
              gridTemplateColumns: `1fr repeat(${cols.length}, 56px)`,
              borderTop: "1px solid var(--line)",
              alignItems: "center",
            }}
          >
            <span
              style={{
                ...sbCell(false),
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                color: "var(--blue-navy)",
              }}
            >
              {p.serving && (
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--success)",
                    flex: "none",
                  }}
                />
              )}
              {p.name}
            </span>
            {p.scores.map((v, ci) => (
              <span
                key={ci}
                style={{
                  ...sbCell(false),
                  textAlign: "center",
                  fontWeight: 700,
                  fontVariantNumeric: "tabular-nums",
                  color: ci === cols.length - 1 ? "#fff" : "var(--blue-navy)",
                  background: ci === cols.length - 1 ? "var(--blue)" : "transparent",
                }}
              >
                {v}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const sbCell = (head: boolean): CSSProperties => ({
  padding: "11px 14px",
  fontSize: head ? 11.5 : 14.5,
  fontWeight: head ? 700 : 600,
  color: "var(--gray-2)",
  letterSpacing: head ? "0.03em" : 0,
});
