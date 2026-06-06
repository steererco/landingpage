// TeamCrest — Steerer's signature rounded shield, the team-identity
// mark used everywhere a club is referenced. Fill it with a club
// colour and optionally overlay initials or a crest image.
// Ported from the Steerer design-system bundle (components/team/TeamCrest.jsx).
import { CSSProperties, useId } from "react";

const SHIELD_PATH =
  "M 53.441 99.984 L 52.091 99.563 C 20.932 90.008 0 61.561 0 28.759 C 0 27.416 0.031 26.042 0.109 24.699 L 0.202 22.904 L 1.459 21.639 C 15.346 7.681 33.812 0 53.441 0 C 73.07 0 91.535 7.681 105.422 21.639 L 106.695 22.92 L 106.788 24.731 C 106.866 26.136 106.897 27.463 106.897 28.774 C 106.897 61.577 85.964 90.023 54.806 99.578 L 53.456 100 L 53.441 99.984 Z";

interface TeamCrestProps {
  color?: string;
  size?: number;
  initials?: string;
  src?: string;
  style?: CSSProperties;
}

export const TeamCrest = ({
  color = "var(--blue-light)",
  size = 48,
  initials,
  src,
  style = {},
}: TeamCrestProps): JSX.Element => {
  const cid = useId().replace(/:/g, "");
  const w = size * (106.897 / 100);
  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        width: w,
        height: size,
        flex: "none",
        ...style,
      }}
    >
      <svg width={w} height={size} viewBox="0 0 106.897 100" style={{ display: "block" }}>
        {src && (
          <defs>
            <clipPath id={cid}>
              <path d={SHIELD_PATH} />
            </clipPath>
          </defs>
        )}
        <path d={SHIELD_PATH} fill={src ? "var(--surface-2)" : color} />
        {src && (
          <image
            href={src}
            x="0"
            y="0"
            width="106.897"
            height="100"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${cid})`}
          />
        )}
      </svg>
      {initials && !src && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: size * 0.08,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: size * 0.34,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}
        >
          {initials}
        </span>
      )}
    </span>
  );
};
