'use client'

import { TextRow } from "./components/TextRow"
import { Header } from "@/components/Header"
import { Benefits } from "./components/Benefits"
import { TextImageColumn } from "./components/TextImageColumn"
import { AboutApp } from "./components/AboutApp"
import { useState } from "react"
import { Drawer } from "@/components/Drawer"
import { Footer } from "@/components/Footer"
import { WaitingList } from "./components/WaitingList"

const Home = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <main className="bg-white h-screen">
      <Header isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <TextRow />
      <AboutApp />
      <TextImageColumn />
      <WaitingList />
      <Benefits />
      <Footer />
      <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer} />
    </main >
  )
}

export default Home
