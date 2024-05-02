"use client";

import { Benefits } from "./components/Benefits";
import { ApplicationFunctionalities } from "./components/ApplicationFunctionalities";
import { AboutApp } from "./components/AboutApp";
import { useState, useRef } from "react";
import { Footer } from "@/components/Footer";
import { WaitingList } from "./components/WaitingList";
import { Hero } from "./components/Hero";
import { ImageSection } from "./components/ImageSection";
import { ModalProvider } from "@/context/ModalContext";
import { Modal } from "@/components/Modal";
import styled from "styled-components";

const Home = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const aboutAppRef = useRef(null);
  const applicationFunctionalitiesRef = useRef(null);
  const waitingListRef = useRef(null);

  const StyledDiv = styled.div`
    background: url(/bg.png);
    background-position: center;

    @media (max-width: 768px) {
      background: none;
    }
  `;

  return (
    <ModalProvider>
      <main className="bg-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll overflow-x-hidden">
        <Modal />
        <StyledDiv>
          <Hero
            aboutAppRef={aboutAppRef}
            functionalitiesRef={applicationFunctionalitiesRef}
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            waitingListRef={waitingListRef}
          />
        </StyledDiv>
        <AboutApp myRef={aboutAppRef} />
        <ApplicationFunctionalities myRef={applicationFunctionalitiesRef} />
        <WaitingList myRef={waitingListRef} />
        <Benefits />
        <ImageSection />
        <Footer
          aboutAppRef={aboutAppRef}
          functionalitiesRef={applicationFunctionalitiesRef}
          waitingListRef={waitingListRef}
        />
        {/* <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer} /> */}
      </main>
    </ModalProvider>
  );
};

export default Home;
