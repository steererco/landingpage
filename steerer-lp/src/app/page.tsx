import { TextRow } from "./components/TextRow"
import { Header } from "@/components/Header"
import { TextColumnsRow } from "./components/TextColumnsRow"

const Home = (): JSX.Element => {
  return (
    <main className="bg-white h-screen">
      <Header />
      <TextRow />
      <TextColumnsRow />
    </main>
  )
}

export default Home
