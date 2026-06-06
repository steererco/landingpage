// Phone bezel + iOS-style status bar for the product mockups.
// Ported from the design handoff (ui.jsx).
import { CSSProperties, ReactNode, type JSX } from "react";

export const StatusBar = ({ time = "9:41" }: { time?: string }): JSX.Element => (
  <div
    style={{
      height: 52,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 26px 0",
      fontFamily: "var(--font-body)",
      flex: "none",
    }}
  >
    <span style={{ fontWeight: 700, fontSize: 15, color: "#06070d" }}>{time}</span>
    <div style={{ display: "flex", alignItems: "center", gap: 7, color: "#06070d" }}>
      {/* signal */}
      <svg width={18} height={12} viewBox="0 0 18 12" fill="currentColor">
        <rect x={0} y={8} width={3} height={4} rx={1} />
        <rect x={5} y={5} width={3} height={7} rx={1} />
        <rect x={10} y={2.5} width={3} height={9.5} rx={1} />
        <rect x={15} y={0} width={3} height={12} rx={1} />
      </svg>
      {/* wifi */}
      <svg width={17} height={12} viewBox="0 0 17 12" fill="currentColor">
        <path d="M8.5 2C5.4 2 2.6 3.2.5 5.2l1.5 1.5C3.7 5 6 4 8.5 4s4.8 1 6.5 2.7L16.5 5.2C14.4 3.2 11.6 2 8.5 2z" />
        <path d="M8.5 6.5c-1.6 0-3.1.6-4.2 1.7l1.5 1.5c.7-.7 1.7-1.2 2.7-1.2s2 .5 2.7 1.2l1.5-1.5C11.6 7.1 10.1 6.5 8.5 6.5z" />
        <circle cx={8.5} cy={11} r={1.3} />
      </svg>
      {/* battery */}
      <svg width={26} height={13} viewBox="0 0 26 13" fill="none">
        <rect x={0.5} y={0.5} width={22} height={12} rx={3} stroke="#06070d" opacity={0.4} />
        <rect x={2.5} y={2.5} width={16} height={8} rx={1.5} fill="#06070d" />
        <rect x={24} y={4} width={2} height={5} rx={1} fill="#06070d" opacity={0.4} />
      </svg>
    </div>
  </div>
);

export const PhoneFrame = ({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}): JSX.Element => (
  <div className="s-phone" style={style}>
    <div className="s-phone__island" />
    <div className="s-phone__screen">
      <div className="s-screen">{children}</div>
    </div>
  </div>
);
