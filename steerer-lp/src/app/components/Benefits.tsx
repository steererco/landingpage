import { GraphicIcon } from "@/icons/GraphicIcon";
import { HeartIcon } from "@/icons/HeartIcon";
import { StrategyIcon } from "@/icons/StrategyIcon";
import { useIsVisible } from "@/utils/useIsVisible";
import { useRef } from "react";

export const Benefits = (): JSX.Element => {
    const benefitsRef = useRef(null)
    const isVisible = useIsVisible(benefitsRef)

    return (
        <div ref={benefitsRef} className={`snap-start flex flex-col justify-center items-center mobile:h-screen  bg-white mx-5 mobile:mx-20 mt-[90px] mobile:mt-0 self-center transition-opacity ease-in duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-[1444px]">
                <p className="text-black text-center font-poppins font-medium text-3xl mobile:text-5xl">Designed for those who live and<br />breathe football passion</p>
                <div className="flex flex-col mobile:flex-row justify-center items-center mobile:justify-between">
                    <FirstItem />
                    <SecondItem />
                    <ThirdItem />
                </div>
            </div>

        </div>
    )
}

const FirstItem = (): JSX.Element => (
    <div className="flex flex-col items-center mt-20 mx-5 mobile:mx-0 mobile:mr-5 max-w-[350px] justify-center">
        <div className="bg-base-blue2 rounded-[7px] w-[64px] h-[64px] flex items-center justify-center">
            <StrategyIcon width='36' height='36' />
        </div>
        <p className="mt-[32px] mb-[24px] text-black font-inter text-center text-2xl font-medium" >Professional strategies within reach</p>
        <p className="text-black text-center font-inter ">Unlock professional tactics and strategies. Elevate your game with insights from football's best minds.</p>
    </div>
)

const SecondItem = (): JSX.Element => (
    <>
        <div className="flex flex-col items-center mt-20 mx-5 justify-center max-w-[450px]">
            <div className="bg-base-blue2 rounded-[7px] w-[64px] h-[64px] flex items-center justify-center">
                <HeartIcon width='36' height='36' />
            </div>
            <p className="mt-[32px] mb-[24px] text-black font-inter text-center text-2xl font-medium" >Passionate Football<br />Community</p>
            <div className="text-black text-center font-inter">
                <p className="mobile:hidden">Join a community of like-minded football fans. Share and exchange knowledge, experiences, and insights, fostering a valuable network of support.</p>
                <p className="hidden mobile:flex">Join a community of like-minded football fans. Share and exchange knowledge, experiences, and insights, fostering a valuable network of support.</p>
            </div>
        </div>
    </>
)

const ThirdItem = (): JSX.Element => (
    <>
        <div className="flex flex-col items-center mt-20 mx-5 mobile:mx-0 mobile:ml-5 justify-center max-w-[380px]">
            <div className="bg-base-blue2 rounded-[7px] w-[64px] h-[64px] flex items-center justify-center">
                <GraphicIcon width='36' height='36' />
            </div>
            <p className="mt-[32px] mb-[24px] text-black font-inter text-center text-2xl font-medium" >Detailed Analysis for Improvement</p>
            <p className="text-black text-center font-inter ">Receive detailed performance analysis to improve strengths and address areas for growth using accurate data.</p>
        </div>
    </>
)