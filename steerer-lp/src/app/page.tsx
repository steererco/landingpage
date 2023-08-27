import { TextWithIcon } from "@/components/TextWithIcon"
import { GlobeIcon } from "@/icons/GlobeIcon"
import { HeartRateIcon } from "@/icons/HeartRateIcon"
import { TextRow } from "./components/TextRow"
import { BlueLogo } from "@/logo/BlueLogo"
import { Header } from "@/components/Header"

const Home = (): JSX.Element => {
  return (
    <main className="bg-white h-screen">
      <Header />
      <TextRow />
    </main>
  )
}

export default Home
