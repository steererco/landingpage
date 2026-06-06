// Line icon set — ~1.75px stroke, rounded caps/joins (Steerer DS spec).
import { ReactNode, SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "stroke"> {
  size?: number;
  stroke?: number;
  strokeColor?: string;
}

const Svg = ({
  size = 22,
  stroke = 1.75,
  strokeColor = "currentColor",
  children,
  fill = "none",
  ...rest
}: IconProps & { children: ReactNode }): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={strokeColor}
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

export const Icons = {
  chevronLeft: (p: IconProps) => (
    <Svg {...p}>
      <path d="M15 18l-6-6 6-6" />
    </Svg>
  ),
  chevronRight: (p: IconProps) => (
    <Svg {...p}>
      <path d="M9 18l6-6-6-6" />
    </Svg>
  ),
  ball: (p: IconProps) => (
    <Svg {...p}>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 7.2l2.8 2-1.05 3.3h-3.5L9.2 9.2 12 7.2z" />
      <path d="M12 7.2V4M14.8 9.2l3-1M13.75 12.5l1.9 2.6M10.25 12.5l-1.9 2.6M9.2 9.2l-3-1" />
    </Svg>
  ),
  card: (p: IconProps) => (
    <Svg {...p} fill="currentColor" strokeColor="none">
      <rect x={7} y={3} width={11} height={16} rx={2} transform="rotate(8 12 11)" />
    </Svg>
  ),
  sub: (p: IconProps) => (
    <Svg {...p}>
      <path d="M16 4l3 3-3 3" />
      <path d="M19 7H9a4 4 0 0 0-4 4" />
      <path d="M8 20l-3-3 3-3" />
      <path d="M5 17h10a4 4 0 0 0 4-4" />
    </Svg>
  ),
  whistle: (p: IconProps) => (
    <Svg {...p}>
      <path d="M3 11a5 5 0 0 0 5 5h2l4 3v-3a6 6 0 0 0 6-6V8H10" />
      <path d="M10 8a3 3 0 1 0 0 .01" />
      <path d="M9 4v2M12 4l-1 2" />
    </Svg>
  ),
  bell: (p: IconProps) => (
    <Svg {...p}>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </Svg>
  ),
  chat: (p: IconProps) => (
    <Svg {...p}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.7A8.4 8.4 0 1 1 21 11.5z" />
    </Svg>
  ),
  users: (p: IconProps) => (
    <Svg {...p}>
      <path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx={9} cy={7} r={3.5} />
      <path d="M22 19v-2a4 4 0 0 0-3-3.8" />
      <path d="M16.5 3.6A4 4 0 0 1 16.5 11" />
    </Svg>
  ),
  link: (p: IconProps) => (
    <Svg {...p}>
      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
    </Svg>
  ),
  trophy: (p: IconProps) => (
    <Svg {...p}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" />
      <path d="M9.5 13.5 9 18h6l-.5-4.5M8 21h8" />
    </Svg>
  ),
  bolt: (p: IconProps) => (
    <Svg {...p} fill="currentColor" strokeColor="none">
      <path d="M13 2 4 13.5h6L9 22l9-11.5h-6L13 2z" />
    </Svg>
  ),
  star: (p: IconProps) => (
    <Svg {...p} fill="currentColor" strokeColor="none">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
    </Svg>
  ),
};

export type IconComponent = (p: IconProps) => JSX.Element;
