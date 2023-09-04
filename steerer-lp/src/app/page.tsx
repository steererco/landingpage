'use client'

import { TextRow } from "./components/TextRow"
import { Header } from "@/components/Header"
import { Benefits } from "./components/Benefits"
import { TextImageColumn } from "./components/TextImageColumn"
import { AboutApp } from "./components/AboutApp"
import { useState } from "react"
import { Drawer } from "@/components/Drawer"

const Home = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <main className="bg-white h-screen">
      <Header isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <TextRow />
      <AboutApp />
      <TextImageColumn />
      <Benefits />
      <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer} />
    </main >
  )
}

export default Home
