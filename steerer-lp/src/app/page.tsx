'use client'

import { Benefits } from "./components/Benefits"
import { ApplicationFunctionalities } from "./components/ApplicationFunctionalities"
import { AboutApp } from "./components/AboutApp"
import { useState, useRef } from "react"
import { Footer } from "@/components/Footer"
import { WaitingList } from "./components/WaitingList"
import { Hero } from "./components/Hero"
import { ImageSection } from "./components/ImageSection"
import { ModalProvider } from "@/context/ModalContext"
import { Modal } from "@/components/Modal"


const Home = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const aboutAppRef = useRef(null);
  const applicationFunctionalitiesRef = useRef(null);
  const waitingListRef = useRef(null);

  return (
    <ModalProvider>
      <main className="bg-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll">
        <Modal />
        <Hero
          aboutAppRef={aboutAppRef}
          functionalitiesRef={applicationFunctionalitiesRef}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          waitingListRef={waitingListRef}
        />
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

      </main >
    </ModalProvider>
  )
}

export default Home
