import { ReactNode } from "react"
import Image from "next/image";
import mockup from '@/../../public/functionalities_mockup.png'
import playerImage from '@/../../public/player_image2.png'
import { WhistleIcon } from "@/icons/WhistleIcon";
import { LiveIcon } from "@/icons/LiveIcon";

export const ApplicationFunctionalities = (): JSX.Element => (
    <div className="bg-white h-screen flex flex-col justify-center px-20">
        <TextArea />
        <div className="flex flex-row justify-center mt-32 h-2/4">
            <ImageBlock />
            <div className="flex flex-col w-1/2">
                <BigTextBlock />
                <SmallTextBlock>Review your game through thorough analysis</SmallTextBlock>
                <SmallTextBlock>Connect with determined peers in the game</SmallTextBlock>
            </div>
        </div>
    </div>
)

const SmallTextBlock = ({ children }: { children: ReactNode }): JSX.Element => (
    <div className="flex bg-gray1/[.1] h-1/3 mt-4 items-center px-8 rounded-[20px]">
        <p className="text-black font-poppins font-medium text-2xl">{children}</p>
    </div>
)

const BigTextBlock = (): JSX.Element => (
    <div className="bg-gray1/[.1] h-2/5 flex flex-col justify-center px-8 rounded-[20px]">
        <p className="text-black font-poppins font-medium text-2xl">Unlock your utmost potential</p>
        <p className="text-black/[.7] mt-1">Unlock your highest potential using expert strategies to elevate your performance to new heights.</p>
    </div>
)

const ImageBlock = (): JSX.Element => (
    <div className="relative flex items-end justify-center bg-gray1/[.1] w-2/5 mr-4 rounded-[20px]">
        <WhistleCard />
        <PlayerCard />
        <LiveCard />
        <Image src={mockup} alt="Functionalities" className="bg-white px-5 pt-[19px] h-[92%]" />
    </div>
)

const WhistleCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center mobile:w-[50px] mobile:h-[50px] bg-base-blue2 mobile:rounded-[10px] mobile:top-[140px] mobile:left-[82px]">
        <WhistleIcon className="stroke-white mobile:w-[40px] mobile:h-[65px]" />
    </div>
)

const PlayerCard = (): JSX.Element => (
    <div className="absolute flex flex-row items-center justify-start mobile:w-[190px] mobile:h-[66px] bg-base-blue2 mobile:rounded-[10px] mobile:top-[220px] mobile:right-[29px]">
        <div className="rounded-full mobile:w-[50px] mobile:h-[50px] bg-black mobile:ml-2">
            <Image src={playerImage} alt="Player" className="rounded-full" />
        </div>
        <div className="flex flex-col items-start ml-3 font-poppins">
            <p className="text-sm font-semibold">Dylan Martinez</p>
            <p className="text-sm font-medium text-white/[.7]">24 Goals</p>
        </div>
    </div>
)

const LiveCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center mobile:w-[80px] mobile:h-[80px] bg-base-blue1 mobile:rounded-[10px] mobile:bottom-[34px] mobile:left-[117px]">
        <LiveIcon className="stroke-white w-[60px] h-[50px]" />
    </div>
)

const TextArea = (): JSX.Element => (
    <>
        <p className="text-black text-center font-poppins font-medium text-5xl">Seize the opportunity to advance your skills<br />and knowledge, easily accessible.</p>
        <p className="text-black text-center mt-8 font-inter font-normal text-xl">With our app, you'll access professional team strategies, precise analyses, and a community<br />of players and coaches who share your drive to win.</p>
    </>
)