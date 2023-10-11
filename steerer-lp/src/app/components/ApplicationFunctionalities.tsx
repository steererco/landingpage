import { MutableRefObject, ReactNode } from "react"
import Image from "next/image";
import mockup from '@/../../public/functionalities_mockup.png'
import playerImage from '@/../../public/player_image2.png'
import { WhistleIcon } from "@/icons/WhistleIcon";
import { LiveIcon } from "@/icons/LiveIcon";
import { useIsVisible } from "@/utils/useIsVisible";

export const ApplicationFunctionalities = ({ myRef }: { myRef: MutableRefObject<null> }): JSX.Element => {
    const isVisible = useIsVisible(myRef)

    return (
        <div ref={myRef} className={`snap-start bg-white mobile:h-screen flex flex-col items-center justify-center mt-[111px] mobile:mt-0 mobile:mb-20 px-5 mobile:px-20 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <TextArea />
            <div className="flex flex-col mobile:flex-row justify-center w-full mobile:mt-32 mt-[44px] mobile:h-2/4">
                <ImageBlock />
                <div className="flex flex-col mt-4 mobile:mt-0 mobile:w-1/2">
                    <BigTextBlock />
                    <SmallTextBlock>Review your game through thorough analysis</SmallTextBlock>
                    <SmallTextBlock>Connect with determined peers in the game</SmallTextBlock>
                </div>
            </div>
        </div>
    )
}

const SmallTextBlock = ({ children }: { children: ReactNode }): JSX.Element => (
    <div className="flex bg-gray1/[.1] h-1/3 mt-4 items-center py-[30px] mobile:py-0 px-8 rounded-[20px]">
        <p className="text-black font-poppins font-medium text-base mobile:text-2xl">{children}</p>
    </div>
)

const BigTextBlock = (): JSX.Element => (
    <div className="bg-gray1/[.1] h-2/5 py-[30px] mobile:py-0 flex flex-col justify-center px-8 rounded-[20px]">
        <p className="text-black font-poppins font-medium text-base mobile:text-2xl">Unlock your utmost potential</p>
        <p className="text-black/[.7] font-inter mt-1 text-xs mobile:text-base">Unlock your highest potential using expert strategies to elevate your performance to new heights.</p>
    </div>
)

const ImageBlock = (): JSX.Element => (
    <div className="relative flex items-end justify-center bg-gray1/[.1] px-[63px] mobile:px-0 pt-[25px] mobile:pt-0 mobile:w-2/5 mobile:mr-4 rounded-[20px]">
        <WhistleCard />
        <PlayerCard />
        <LiveCard />
        <Image src={mockup} alt="Functionalities" className="bg-white px-5 pt-[19px] h-[92%]" />
    </div>
)

const WhistleCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center w-[28px] h-[28px] mobile:w-[50px] mobile:h-[50px] bg-base-blue2 rounded-[6px] mobile:rounded-[10px] top-[56px] left-[13px] mobile:top-[140px] mobile:left-[82px]">
        <WhistleIcon className="stroke-white mobile:w-[40px] mobile:h-[65px]" />
    </div>
)

const PlayerCard = (): JSX.Element => (
    <div className="absolute flex flex-row items-center justify-start w-[110px] h-[39px] mobile:w-[190px] mobile:h-[66px] bg-base-blue2 rounded-[6px] mobile:rounded-[10px] top-[76px] right-[17px] mobile:top-[220px] mobile:right-[29px]">
        <div className="rounded-full w-[29px] h-[29px] mobile:w-[50px] mobile:h-[50px] ml-1 mobile:ml-2">
            <Image src={playerImage} alt="Player" className="rounded-full" />
        </div>
        <div className="flex flex-col items-start ml-2 mobile:ml-3 font-poppins">
            <p className="text-[7px] mobile:text-sm font-semibold">Dylan Martinez</p>
            <p className="text-[7px] mobile:text-sm font-medium text-white/[.7]">24 Goals</p>
        </div>
    </div>
)

const LiveCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center w-[47px] h-[47px] mobile:w-[80px] mobile:h-[80px] bg-base-blue1 rounded-[6px] mobile:rounded-[10px] bottom-[18px] left-[20px] mobile:bottom-[34px] mobile:left-[117px]">
        <LiveIcon className="stroke-white w-[40px] h-[30px] mobile:w-[60px] mobile:h-[50px]" />
    </div>
)

const TextArea = (): JSX.Element => (
    <>
        <p className="text-black text-center font-poppins font-medium text-[32px] max-w-[1061px] mobile:text-5xl">Seize the opportunity to advance your skills and knowledge, easily accessible.</p>
        <p className="text-black/[.7] max-w-[874px] text-center mt-8 font-inter font-normal text-base mobile:text-xl">With our app, you'll access professional team strategies, precise analyses, and a community of players and coaches who share your drive to win.</p>
    </>
)