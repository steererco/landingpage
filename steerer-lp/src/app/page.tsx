'use client'

import { Benefits } from "./components/Benefits"
import { ApplicationFunctionalities } from "./components/ApplicationFunctionalities"
import { AboutApp } from "./components/AboutApp"
import { useState, useRef } from "react"
import { Footer } from "@/components/Footer"
import { WaitingList } from "./components/WaitingList"
import { Hero } from "./components/Hero"
import { ImageSection } from "./components/ImageSection"


const Home = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const aboutAppRef = useRef(null);
  const applicationFunctionalitiesRef = useRef(null);
  const waitingListRef = useRef(null);

  return (
    <main className="bg-white h-screen snap-y snap-mandatory overflow-scroll">
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
  )
}

export default Home
