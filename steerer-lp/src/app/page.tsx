'use client'

import { Benefits } from "./components/Benefits"
import { ApplicationFunctionalities } from "./components/ApplicationFunctionalities"
import { AboutApp } from "./components/AboutApp"
import { useState } from "react"
import { Drawer } from "@/components/Drawer"
import { Footer } from "@/components/Footer"
import { WaitingList } from "./components/WaitingList"
import { Hero } from "./components/Hero"
import { ImageSection } from "./components/ImageSection"


const Home = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <main className="bg-white h-screen">
      <Hero openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <AboutApp />
      <ApplicationFunctionalities />
      <WaitingList />
      <Benefits />
      <ImageSection />
      <Footer />
      <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer} />
    </main >
  )
}

export default Home
