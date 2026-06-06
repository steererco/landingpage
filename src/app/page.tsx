"use client";

import { useEffect } from "react";
import { FeatureBento } from "./components/landing/FeatureBento";
import { Hero } from "./components/landing/Hero";
import { LandingFooter } from "./components/landing/LandingFooter";
import { Nav } from "./components/landing/Nav";
import {
  FinalCTA,
  HowItWorks,
  Multisport,
  ProblemPromise,
  SecHead,
  SocialProof,
} from "./components/landing/Sections";

const Home = (): JSX.Element => {
  // Reveal-on-scroll: fade sections in the first time they enter the viewport.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="s-field" />
      <div className="s-shell">
        <Nav />
        <Hero />
        <ProblemPromise />
        <section className="s-section" id="features">
          <div className="s-wrap">
            <SecHead
              eyebrow="Core features"
              title="Built for match day, end to end."
              lead="Everything it takes to run a team — and nothing it doesn't."
            />
            <div style={{ marginTop: 44 }}>
              <FeatureBento />
            </div>
          </div>
        </section>
        <HowItWorks />
        <Multisport />
        <SocialProof />
        <FinalCTA />
        <LandingFooter />
      </div>
    </>
  );
};

export default Home;
