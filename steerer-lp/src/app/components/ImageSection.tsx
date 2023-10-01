import Image from "next/image"
import ballMockup from "@/../../public/ball_mockup.png"
import disputeMockup from "@/../../public/dispute_mockup.png"
import playerMockup from "@/../../public/player_mockup.png"
import twoPlayersMockup from "@/../../public/twoplayers_mockup.png"
import handsUpMockup from "@/../../public/handsup_mockup.png"
import { WhiteLogo } from "@/logo/WhiteLogo"
import { WaitingListButton } from "@/components/WaitingListButton"

export const ImageSection = (): JSX.Element => (
    <div className="flex flex-row gap-[20px] mobile:gap-[30px] overflow-y-scroll no-scrollbar mobile:overflow-auto h-screen items-center mobile:px-20 px-5">
        <div className="flex flex-1 h-[70%] gap-[30px]">
            <div className="flex flex-col h-full w-screen mobile:w-full gap-[30px]">
                <FirstRow />
                <SecondRow />
            </div>
        </div>
        <div className="flex flex-1 h-[70%] flex-row gap-[20px] mobile:gap-[30px]">
            <div className="w-[38vh] mobile:w-full h-full rounded-[20px] bg-gradient-to-b from-base-blue3 to-base-blue1">
                <div className="flex flex-col h-full px-[18px] justify-around items-center">
                    <WhiteLogo />
                    <p className="font-poppins font-medium text-[34px] text-center">Awaken your greatness in soccer with the Steerer app!</p>
                    <WaitingListButton />
                </div>
            </div>
            <SecondCol />
        </div>
    </div>
)

const FirstRow = (): JSX.Element => (
    <div className="flex flex-row gap-[30px]">
        <div className="rounded-[20px]">
            <Image src={ballMockup} alt="" />
        </div>
        <div className="rounded-[20px]">
            <Image src={playerMockup} alt="" />
        </div>
    </div>
)

const SecondRow = (): JSX.Element => (
    <div className="rounded-[20px]">
        <Image src={disputeMockup} alt="" />
    </div>
)

const SecondCol = (): JSX.Element => (
    <div className="flex flex-col w-screen mobile:w-full gap-[30px]">
        <div className="flex rounded-[20px]">
            <Image src={twoPlayersMockup} alt="" />
        </div>
        <div className="flex rounded-[20px]">
            <Image src={handsUpMockup} alt="" />
        </div>
    </div>
)