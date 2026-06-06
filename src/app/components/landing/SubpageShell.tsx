// Shared chrome for content subpages (/help, /privacy, /terms):
// ambient field + sticky nav + narrow content column + footer.
import { ReactNode } from "react";
import { LandingFooter } from "./LandingFooter";
import { Nav } from "./Nav";

export const SubpageShell = ({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title?: string;
  lead?: string;
  children: ReactNode;
}): JSX.Element => (
  <>
    <div className="s-field" />
    <div className="s-shell">
      <Nav />
      <main className="s-section s-section--tight">
        <div className="s-wrap sub__wrap">
          <div className="sub__head">
            <span className="s-eyebrow">{eyebrow}</span>
            {title && <h1 className="s-h2">{title}</h1>}
            {lead && <p className="s-lead">{lead}</p>}
          </div>
          {children}
        </div>
      </main>
      <LandingFooter />
    </div>
  </>
);
