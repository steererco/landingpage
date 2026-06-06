"use client";

// The hero mockup: a real-feeling live match-scoring screen.
// Ticking clock, LIVE pulse, a feed of match events that arrive over
// time, and working Goal/Card/Sub controls (score from your phone).
// Ported from the design handoff (liveMatch.jsx).
import { CSSProperties, useCallback, useEffect, useRef, useState, type JSX } from "react";
import { IconComponent, Icons } from "./icons";
import { StatusBar } from "./Phone";
import { TeamCrest } from "./TeamCrest";

interface LmTeam {
  name: string;
  initials: string;
  color: string;
}

interface LmEventData {
  min?: number;
  type: keyof typeof LM_META;
  side?: "home" | "away";
  title: string;
  sub: string;
  seed?: boolean;
  h?: number;
  a?: number;
  id?: string;
}

interface LmState {
  sec: number;
  score: { h: number; a: number };
  events: LmEventData[];
  lastMin: number;
}

const LM_HOME: LmTeam = { name: "Zenith United", initials: "ZU", color: "var(--blue-navy)" };
const LM_AWAY: LmTeam = { name: "Rovers FC", initials: "RV", color: "var(--blue-light)" };

const LM_TIMELINE: LmEventData[] = [
  { min: 1, type: "whistle", title: "Kick-off", sub: "1st half", seed: true },
  { min: 12, type: "goal", side: "home", title: "Goal · M. Reyes", sub: "Assist: T. Bauer", h: 1, a: 0 },
  { min: 23, type: "yellow", side: "away", title: "Yellow · L. Okafor", sub: "Foul on Reyes" },
  { min: 41, type: "goal", side: "away", title: "Goal · D. Hughes", sub: "Penalty", h: 1, a: 1 },
  { min: 45, type: "whistle", title: "Half-time", sub: "1 — 1" },
  { min: 46, type: "period", title: "Second half", sub: "Under way" },
  { min: 58, type: "sub", side: "home", title: "Sub · Silva ⇆ Reyes", sub: "Tactical" },
  { min: 67, type: "goal", side: "home", title: "Goal · J. Silva", sub: "Header · A. Vidal", h: 2, a: 1 },
  { min: 79, type: "yellow", side: "home", title: "Yellow · A. Vidal", sub: "Dissent" },
  { min: 90, type: "whistle", title: "Full time", sub: "2 — 1" },
];

const LM_META = {
  goal: { icon: Icons.ball, color: "var(--blue)", bg: "rgba(39,85,243,0.10)" },
  yellow: { icon: Icons.card, color: "#E0A116", bg: "rgba(224,161,22,0.14)" },
  sub: { icon: Icons.sub, color: "var(--blue)", bg: "rgba(39,85,243,0.10)" },
  whistle: { icon: Icons.whistle, color: "var(--gray-2)", bg: "rgba(124,122,128,0.12)" },
  period: { icon: Icons.whistle, color: "var(--gray-2)", bg: "rgba(124,122,128,0.12)" },
} satisfies Record<string, { icon: IconComponent; color: string; bg: string }>;

const START_MIN = 63;
const FULL = 90 * 60;

const lmSeed = (): LmState => {
  const past = LM_TIMELINE.filter((e) => (e.min ?? 0) <= START_MIN);
  const lastGoal = [...past].reverse().find((e) => e.type === "goal");
  const score = lastGoal ? { h: lastGoal.h ?? 0, a: lastGoal.a ?? 0 } : { h: 0, a: 0 };
  const events = past
    .map((e, i) => ({ ...e, id: "s" + i }))
    .reverse()
    .slice(0, 9);
  return { sec: START_MIN * 60, score, events, lastMin: START_MIN };
};

export const LiveMatchScreen = (): JSX.Element => {
  const [st, setSt] = useState<LmState>(lmSeed);
  const [flash, setFlash] = useState<{ side?: "home" | "away"; n: number } | null>(null);
  const idRef = useRef(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setSt((prev) => {
        const sec = prev.sec + 6;
        if (sec >= FULL + 30) return lmSeed(); // loop the match
        const min = Math.floor(sec / 60);
        let { score, events, lastMin } = prev;
        if (min > lastMin) {
          const due = LM_TIMELINE.filter((e) => !e.seed && (e.min ?? 0) > lastMin && (e.min ?? 0) <= min);
          if (due.length) {
            events = [...events];
            for (const e of due) {
              events.unshift({ ...e, id: "a" + idRef.current++ });
              if (e.type === "goal") score = { h: e.h ?? score.h, a: e.a ?? score.a };
            }
            events = events.slice(0, 9);
            const g = due.find((e) => e.type === "goal");
            if (g) setTimeout(() => setFlash({ side: g.side, n: Math.random() }), 0);
          }
          lastMin = min;
        }
        return { sec, score, events, lastMin };
      });
    }, 110);
    return () => clearInterval(iv);
  }, []);

  // clear flash
  useEffect(() => {
    if (!flash) return;
    const t = setTimeout(() => setFlash(null), 900);
    return () => clearTimeout(t);
  }, [flash]);

  const minute = Math.floor(st.sec / 60);
  const ss = String(st.sec % 60).padStart(2, "0");
  const clock = minute >= 90 ? "90:00" : `${minute}:${ss}`;
  const period = minute >= 90 ? "Full Time" : minute > 45 ? "2nd Half" : "1st Half";
  const live = minute < 90;

  const addEvent = useCallback((type: "goal" | "yellow" | "sub") => {
    setSt((prev) => {
      const min = Math.floor(prev.sec / 60);
      let score = prev.score;
      let ev: LmEventData;
      if (type === "goal") {
        score = { h: prev.score.h + 1, a: prev.score.a };
        ev = { type: "goal", side: "home", title: "Goal · You logged it", sub: "Tap-to-score" };
        setTimeout(() => setFlash({ side: "home", n: Math.random() }), 0);
      } else if (type === "yellow") {
        ev = { type: "yellow", side: "home", title: "Yellow card", sub: "Logged live" };
      } else {
        ev = { type: "sub", side: "home", title: "Substitution", sub: "Logged live" };
      }
      ev = { ...ev, min, id: "m" + idRef.current++ };
      return { ...prev, score, events: [ev, ...prev.events].slice(0, 9) };
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff" }}>
      <StatusBar />

      {/* top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "6px 16px 12px",
          borderBottom: "1px solid var(--line)",
          flex: "none",
        }}
      >
        <button style={lmIconBtn} aria-label="Back">
          <Icons.chevronLeft size={22} />
        </button>
        <div style={{ flex: 1, textAlign: "center", lineHeight: 1.2 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14.5,
              color: "var(--blue-navy)",
              fontFamily: "var(--font-display)",
            }}
          >
            Sunday Premier League
          </div>
          <div style={{ fontSize: 11.5, color: "var(--gray-2)", marginTop: 2 }}>
            Matchday 14 · Anfield Park
          </div>
        </div>
        <button style={lmIconBtn} aria-label="Notifications">
          <Icons.bell size={20} />
        </button>
      </div>

      {/* scoreboard */}
      <div style={{ padding: "16px 16px 8px", flex: "none" }}>
        <div
          style={{
            position: "relative",
            background: "var(--surface-2)",
            borderRadius: 18,
            padding: "16px 14px 18px",
            overflow: "hidden",
          }}
        >
          {/* live + attendance header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: live ? "var(--danger)" : "var(--gray-2)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                padding: "4px 9px",
                borderRadius: 999,
              }}
            >
              <span
                className="lm-dot"
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }}
              />
              {live ? "LIVE" : "FT"}
            </span>
            <span style={{ fontSize: 11.5, color: "var(--gray-2)", fontWeight: 600 }}>
              Attendance 1,240
            </span>
          </div>

          {/* teams + score */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: 8,
            }}
          >
            <LmSide team={LM_HOME} flash={flash?.side === "home"} />
            <div style={{ textAlign: "center", minWidth: 96 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 44,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "var(--blue-navy)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {st.score.h} – {st.score.a}
              </div>
              <div
                style={{
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#fff",
                  borderRadius: 999,
                  padding: "5px 11px",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "var(--blue-navy)",
                  fontVariantNumeric: "tabular-nums",
                  boxShadow: "var(--shadow-xs)",
                }}
              >
                {live && (
                  <span
                    className="lm-dot"
                    style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--danger)" }}
                  />
                )}
                {clock}
              </div>
            </div>
            <LmSide team={LM_AWAY} flash={flash?.side === "away"} />
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: 12,
              fontSize: 12,
              fontWeight: 600,
              color: "var(--gray-2)",
            }}
          >
            {period}
          </div>
        </div>
      </div>

      {/* events */}
      <div
        style={{
          padding: "8px 16px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: "none",
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
          Match events
        </span>
        <span style={{ fontSize: 12, color: "var(--blue)", fontWeight: 600 }}>All</span>
      </div>

      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "10px 16px 4px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maskImage: "linear-gradient(180deg,#000 78%,transparent)",
          WebkitMaskImage: "linear-gradient(180deg,#000 78%,transparent)",
        }}
      >
        {st.events.map((e) => (
          <LmEvent key={e.id} e={e} />
        ))}
      </div>

      {/* scoring action bar */}
      <div
        style={{
          flex: "none",
          padding: "10px 16px calc(10px + env(safe-area-inset-bottom))",
          borderTop: "1px solid var(--line)",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gap: 8,
          background: "#fff",
        }}
      >
        <button onClick={() => addEvent("goal")} style={lmAction(true)}>
          <Icons.ball size={18} />
          Goal
        </button>
        <button onClick={() => addEvent("yellow")} style={lmAction(false)}>
          <Icons.card size={16} style={{ color: "#E0A116" }} />
          Card
        </button>
        <button onClick={() => addEvent("sub")} style={lmAction(false)}>
          <Icons.sub size={18} />
          Sub
        </button>
      </div>
    </div>
  );
};

const LmSide = ({ team, flash }: { team: LmTeam; flash?: boolean }): JSX.Element => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      transition: "transform .3s",
      transform: flash ? "scale(1.06)" : "none",
    }}
  >
    <div style={{ position: "relative" }}>
      <TeamCrest color={team.color} initials={team.initials} size={52} />
      {flash && (
        <span
          className="lm-ring"
          style={{ position: "absolute", inset: -6, borderRadius: 16, border: "2px solid var(--blue)" }}
        />
      )}
    </div>
    <span
      style={{
        fontWeight: 700,
        fontSize: 13,
        color: "var(--blue-navy)",
        textAlign: "center",
        lineHeight: 1.15,
      }}
    >
      {team.name}
    </span>
  </div>
);

const LmEvent = ({ e }: { e: LmEventData }): JSX.Element => {
  const m = LM_META[e.type] || LM_META.whistle;
  const Icon = m.icon;
  return (
    <div className="lm-ev" style={{ display: "flex", alignItems: "center", gap: 11 }}>
      <span
        style={{
          flex: "none",
          width: 34,
          textAlign: "right",
          fontWeight: 700,
          fontSize: 12.5,
          color: "var(--gray-2)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {e.min ? `${e.min}'` : "—"}
      </span>
      <span
        style={{
          flex: "none",
          width: 30,
          height: 30,
          borderRadius: 9,
          background: m.bg,
          color: m.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={17} />
      </span>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontWeight: 600,
            fontSize: 13.5,
            color: "var(--black-1)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {e.title}
        </div>
        <div style={{ fontSize: 11.5, color: "var(--gray-2)", marginTop: 1 }}>{e.sub}</div>
      </div>
    </div>
  );
};

const lmIconBtn: CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 10,
  border: "none",
  background: "transparent",
  color: "var(--blue-navy)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flex: "none",
};

const lmAction = (primary: boolean): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  height: 44,
  borderRadius: 12,
  cursor: "pointer",
  fontFamily: "var(--font-body)",
  fontWeight: 700,
  fontSize: 14,
  border: primary ? "none" : "1px solid var(--line)",
  background: primary ? "var(--s-accent)" : "#fff",
  color: primary ? "var(--s-accent-ink)" : "var(--blue-navy)",
});
