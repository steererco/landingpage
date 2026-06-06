// Avatar — circular user photo with initials fallback and optional
// status ring. Ported from the Steerer design-system bundle
// (components/team/Avatar.jsx).
import { CSSProperties } from "react";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  ring?: boolean;
  style?: CSSProperties;
}

export const Avatar = ({
  src,
  name = "",
  size = 44,
  ring = false,
  style = {},
}: AvatarProps): JSX.Element => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--blue-tint)",
        color: "var(--blue)",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: size * 0.36,
        flex: "none",
        overflow: "hidden",
        border: ring ? "2px solid var(--blue)" : "none",
        boxShadow: ring ? "0 0 0 2px var(--white) inset" : "none",
        ...style,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || "?"
      )}
    </span>
  );
};
