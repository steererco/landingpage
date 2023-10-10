import Image from "next/image"
import ballMockup from "@/../../public/ball_mockup.png"
import disputeMockup from "@/../../public/dispute_mockup.png"
import playerMockup from "@/../../public/player_mockup.png"
import twoPlayersMockup from "@/../../public/twoplayers_mockup.png"
import handsUpMockup from "@/../../public/handsup_mockup.png"
import { WhiteLogo } from "@/logo/WhiteLogo"
import { WaitingListButton } from "@/components/WaitingListButton"

export const ImageSection = (): JSX.Element => (
    <div className="snap-start flex flex-row justify-center gap-[20px] mobile:gap-[30px] overflow-y-scroll no-scrollbar mobile:overflow-auto h-screen items-center mobile:px-20 px-5">
        <div className="flex flex-1 mobile:h-[40vw] gap-[30px]">
            <div className="flex flex-col h-full w-screen mobile:w-full gap-[30px] justify-between">
                <FirstRow />
                <SecondRow />
            </div>
        </div>
        <div className="flex flex-1 mobile:h-[40vw] h-max-[80%] flex-row gap-[20px] mobile:gap-[30px]">
            <BlueBox />
            <SecondCol />
        </div>
    </div>
)

const FirstRow = (): JSX.Element => (
    <div className="h-[47.3%]">
        <div className="flex flex-row gap-[30px] h-full justify-between ">
            <div className="rounded-[20px] w-full h-full">
                <Image src={ballMockup} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-[20px] w-full h-full">
                <Image src={playerMockup} alt="" className="w-full h-full" />
            </div>
        </div>
    </div>
)

const BlueBox = (): JSX.Element => (
    <div className="mobile:w-full h-full rounded-[20px] bg-gradient-to-b from-base-blue3 to-base-blue1">
        <div className="flex flex-col h-full px-[18px] justify-around items-center">
            <WhiteLogo />
            <p className="font-poppins font-medium text-[34px] text-center">Awaken your greatness in soccer with the Steerer app!</p>
            <WaitingListButton />
        </div>
    </div>
)

const SecondRow = (): JSX.Element => (
    <div className="rounded-[20px] h-[47.3%]">
        <Image src={disputeMockup} alt="" className="w-full h-full" />
    </div>
)

const SecondCol = (): JSX.Element => (
    <div className="flex flex-col w-screen mobile:w-full h-full gap-[30px] justify-between">
        <div className="flex rounded-[20px] h-[47.3%]">
            <Image src={twoPlayersMockup} alt="" />
        </div>
        <div className="flex rounded-[20px] h-[47.3%]">
            <Image src={handsUpMockup} alt="" />
        </div>
    </div>
)