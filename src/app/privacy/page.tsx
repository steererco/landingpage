import type { Metadata } from "next";
import { SubpageShell } from "../components/landing/SubpageShell";
import { content } from "./privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Steerer",
  description: "How Steerer collects, uses and protects your data.",
};

const Page = (): JSX.Element => (
  <SubpageShell eyebrow="Legal">
    {/* The document carries its own title ("PRIVACY NOTICE") — restyled via .legal__content */}
    <div className="sub__card legal__content" dangerouslySetInnerHTML={{ __html: content }} />
  </SubpageShell>
);

export default Page;
