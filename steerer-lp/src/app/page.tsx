'use client'

import { Benefits } from "./components/Benefits"
import { ApplicationFunctionalities } from "./components/ApplicationFunctionalities"
import { AboutApp } from "./components/AboutApp"
import { useState, useRef } from "react"
import { Drawer } from "@/components/Drawer"
import { Footer } from "@/components/Footer"
import { WaitingList } from "./components/WaitingList"
import { Hero } from "./components/Hero"
import { ImageSection } from "./components/ImageSection"


const Home = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const aboutAppRef = useRef(null);
  // const applicationFunctionalitiesRef = useRef(null);
  // const waitingListRef = useRef(null);

  return (
    <main className="bg-white h-screen snap-y snap-mandatory overflow-scroll animate-fade">
      <Hero aboutAppRef={aboutAppRef} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <AboutApp myRef={aboutAppRef} />
      <ApplicationFunctionalities />
      <WaitingList />
      <Benefits />
      <ImageSection />
      <Footer aboutAppRef={aboutAppRef} />
      {/* <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer} /> */}
    </main >
  )
}

export default Home
