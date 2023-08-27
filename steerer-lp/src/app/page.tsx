import { TextRow } from "./components/TextRow"
import { Header } from "@/components/Header"
import { TextColumnsRow } from "./components/TextColumnsRow"
import { TextImageColumn } from "./components/TextImageColumn"

const Home = (): JSX.Element => {
  return (
    <main className="bg-white h-screen">
      <Header />
      <TextRow />
      <TextImageColumn />
      <TextColumnsRow />
    </main>
  )
}

export default Home
