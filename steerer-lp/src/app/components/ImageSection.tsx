import Image from "next/image"
import ballMockup from "@/../../public/ball_mockup.png"
import disputeMockup from "@/../../public/dispute_mockup.png"
import playerMockup from "@/../../public/player_mockup.png"
import twoPlayersMockup from "@/../../public/twoplayers_mockup.png"
import handsUpMockup from "@/../../public/handsup_mockup.png"
import { WhiteLogo } from "@/logo/WhiteLogo"
import { WaitingListButton } from "@/components/WaitingListButton"

export const ImageSection = (): JSX.Element => (
    <div className="snap-start flex flex-row mobile:justify-center gap-[20px] mobile:gap-[30px] overflow-y-scroll no-scrollbar mobile:overflow-auto h-screen items-center mobile:px-20 px-5">
        <div className="flex mobile:flex-1 h-[80%] mobile:h-[40vw] gap-[30px]">
            <div className="flex flex-col h-full w-screen w-[330px] mobile:w-full gap-[30px] justify-between">
                <FirstRow />
                <SecondRow />
            </div>
        </div>
        <div className="flex mobile:flex-1 mobile:h-[40vw] h-[80%] mobile:h-max-[80%] flex-row gap-[20px] mobile:gap-[30px]">
            <BlueBox />
            <SecondCol />
        </div>
    </div>
)

const FirstRow = (): JSX.Element => (
    <div className="mobile:h-[47.3%] h-full">
        <div className="flex flex-col mobile:flex-row gap-[30px] w-[330px] mobile:w-full h-full justify-between ">
            <div className="rounded-[20px] h-[47.3%] mobile:w-full mobile:h-full">
                <Image src={ballMockup} alt="" className="w-[330px] mobile:w-full h-full" />
            </div>
            <div className="rounded-[20px] h-[47.3%] mobile:w-full mobile:h-full">
                <Image src={playerMockup} alt="" className="w-[330px] mobile:w-full h-full" />
            </div>
        </div>
    </div>
)

const SecondRow = (): JSX.Element => (
    <div className="rounded-[20px] h-[47.3%] hidden mobile:flex ">
        <Image src={disputeMockup} alt="" className="w-full h-full" />
    </div>
)

const BlueBox = (): JSX.Element => (
    <div className="mobile:w-full w-[80vw] mobile:h-full rounded-[20px] bg-gradient-to-b from-base-blue3 to-base-blue1">
        <div className="flex flex-col h-full px-[18px] justify-around items-center">
            <WhiteLogo />
            <p className="font-poppins font-medium text-[34px] text-center">Awaken your greatness in soccer with the Steerer app!</p>
            <WaitingListButton />
        </div>
    </div>
)

const SecondCol = (): JSX.Element => (
    <div className="flex flex-col w-[330px] mobile:w-full h-full gap-[30px] justify-between">
        <div className="flex rounded-[20px] h-[47.3%]">
            <Image src={twoPlayersMockup} alt="" />
        </div>
        <div className="flex rounded-[20px] h-[47.3%]">
            <Image src={handsUpMockup} alt="" />
        </div>
    </div>
)