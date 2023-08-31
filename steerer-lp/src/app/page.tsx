import { TextRow } from "./components/TextRow"
import { Header } from "@/components/Header"
import { TextColumnsRow } from "./components/TextColumnsRow"
import { TextImageColumn } from "./components/TextImageColumn"
import { AboutApp } from "./components/AboutApp"

const Home = (): JSX.Element => {
  return (
    <main className="bg-white h-screen">
      <Header />
      <TextRow />
      <AboutApp />
      <TextImageColumn />
      <TextColumnsRow />
    </main >
  )
}

export default Home
