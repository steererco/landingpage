import type { Metadata } from "next";
import { SubpageShell } from "../components/landing/SubpageShell";
import { content } from "./terms";

import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Terms of Use — Steerer",
  description: "The terms that govern your use of the Steerer app and website.",
};

const Page = (): JSX.Element => (
  <SubpageShell eyebrow="Legal">
    {/* The document carries its own title ("TERMS OF USE") — restyled via .legal__content */}
    <div className="sub__card legal__content" dangerouslySetInnerHTML={{ __html: content }} />
  </SubpageShell>
);

export default Page;
