import { MouseEventHandler } from "react";

export const Clickable = ({ children, onClick }: { children: React.ReactNode, onClick: MouseEventHandler<HTMLAnchorElement> }): JSX.Element => (
    <a href="javascript:void(0);" onClick={onClick}>{children}</a>
)