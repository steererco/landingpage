import Image from "next/image";
import gameMockup from "@/../../public/game_mockup.png"
import sponsorMockup from "@/../../public/sponsor_mockup.png"
import playerImage from "@/../../public/player_image.png"
import { GoalIcon } from "@/icons/GoalIcon";
import { CardsIcon } from "@/icons/CardsIcon";
import { CronometerIcon } from "@/icons/CronometerIcon";
import { BallIcon } from "@/icons/BallIcon";
import { MutableRefObject } from "react";
import { useIsVisible } from "@/utils/useIsVisible";

export const AboutApp = ({ myRef }: { myRef: MutableRefObject<null> }): JSX.Element => {
    const isVisible = useIsVisible(myRef)

    return (
        <div ref={myRef} className={`snap-start pt-[100px] pb-[300px] transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <FirstRow />
            <SecondRow />
        </div>
    )
}

const FirstRow = (): JSX.Element => (
    <div className="bg-white px-5 mobile:px-20 flex flex-col-reverse mobile:flex-row justify-center justify-around items-center">
        <div className="relative mt-12 mobile:mt-0 flex items-end justify-center bg-gray1/[.1] rounded-[20px] mobile:w-5/12 max-w-[578px] h-2/3 max-h-[570px]" >
            <TimeCard />
            {/* <PlayerCard /> */}
            <GoalCard />
            <CardsCard />
            <Image src={gameMockup} alt="steerer" className="mx-[50px] mobile:px-0 mt-[16px] mobile:mt-0" />
        </div>
        <div className="flex flex-col mobile:w-5/12">
            <p className="text-black text-center mobile:text-left font-poppins font-medium text-3xl mobile:text-4xl">Get ready for a Game Revolution with the Steerer App!</p>
            <p className="text-black/[.7] font-inter text-center mobile:text-left text-base mobile:text-xl mt-6" >We understand that soccer is more than just a sport for you. It's the
                passion that flows in your veins, the dream you tirelessly chase. Now,
                envision having access to secrets from professional teams, international
                -level analysis, and a community that shares the same determination.
            </p>
        </div>
    </div>
)

const TimeCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center bg-base-blue3 w-[46px] mobile:w-[80px] h-[30px] mobile:h-[53px] rounded-[8px] mobile:rounded-xl top-[44px] mobile:top-[76px] -right-[10px] mobile:-right-[26px]">
        <p className="text-white text-center font-poppins font-medium text-base mobile:text-2xl">83'</p>
    </div>
)

const PlayerCard = (): JSX.Element => (
    <div className="absolute flex flex-row items-center bg-base-blue2 w-[112px] mobile:w-[190px] h-[39px] mobile:h-[66px] rounded-[6px] mobile:rounded-[10px] top-[64px] mobile:top-[96px] -left-[7px] mobile:-left-[42px]">
        <div className="rounded-full w-[30px] h-[30px] mobile:w-[50px] mobile:h-[50px] ml-1 mobile:ml-2">
            <Image src={playerImage} alt="player" className="rounded-full" />
        </div>
        <div className="flex flex-col justify-center font-poppins ml-3 text-white">
            <p className="text-[8px] mobile:text-sm font-semibold">Ethan Brooks</p>
            <p className="text-[7px] mobile:text-xs font-medium text-white/[.7]">36 goals</p>
        </div>
    </div>
)
const CardsCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center bg-base-blue2 rounded-[3px] mobile:rounded-[5px] w-[29px] h-[29px] mobile:w-[50px] mobile:h-[50px] right-[33px] bottom-[155px] mobile:right-[68px] mobile:bottom-[268px]">
        <CardsIcon className="mobile:w-[33px] mobile:h-[40px] stroke-white" />
    </div>
)

const GoalCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center bg-base-blue3 rounded-[6px] mobile:rounded-[10px] w-[40px] h-[40px] mobile:w-[67px] mobile:h-[67px] -left-[6px] bottom-[66px] mobile:-left-[23px] mobile:bottom-[112px]">
        <GoalIcon className="w-[30px] h-[30px] mobile:w-[50px] mobile:h-[50px] stroke-white stroke-[0.9]" />
    </div>
)

const SecondRow = (): JSX.Element => (
    <div className="mobile:mt-[118px] bg-white px-5 mobile:px-20 mt-16 flex flex-col mt- mobile:flex-row justify-center justify-around items-center">
        <div className="flex flex-col mobile:w-5/12">
            <p className="text-black text-center mobile:text-left font-poppins font-medium text-3xl mobile:text-4xl">Find sponsors near you</p>
            <p className="text-black/[.7] text-center mobile:text-left font-inter text-base mobile:text-xl mt-6" >Looking for support for your project? Want to take your team to the next level?
                The solution is closer than you think! With Steerer, it's easy to find sponsors
                near you, ready to believe in your potential and support your ambitions.<br /> <br />
                Don't waste any more time seeking support in the dark. Find sponsors near you
                with Steerer and open doors to success. Join our community and take the next
                step in your journey to greatness!
            </p>
        </div>
        <div className="relative flex justify-center items-end bg-gray1/[.1] mt-12 mobile:mt-0 rounded-[20px] mobile:w-5/12 mobile:h-2/3" >
            <CronometerCard />
            <BallCard />
            <Image src={sponsorMockup} alt="steerer" className="mobile:mx-[50px] mx-[32px] mt-[16px] mobile:mt-0" />
        </div>
    </div>
)

const CronometerCard = (): JSX.Element => (
    <div className="absolute items-center justify-center bg-base-blue2 w-[40px] h-[40px] mobile:w-[67px] mobile:h-[67px] rounded-[6px] mobile:rounded-[10px] -top-[7px] right-[36px] mobile:-top-[12px] mobile:right-[63px]">
        <CronometerIcon className="stroke-white w-[18px] h-[22px] mobile:w-[30px] mobile:h-[35px] ml-[12px] mt-[8px] mobile:ml-[19.5px] mobile:mt-[14px]" />
    </div>
)

const BallCard = (): JSX.Element => (
    <div className="absolute items-center justify-center bg-base-blue3 w-[40px] h-[40px] mobile:w-[67px] mobile:h-[67px] rounded-[6px] mobile:rounded-[10px] bottom-[16px] mobile:bottom-[21px] -left-[12px] mobile:-left-[32px]">
        <BallIcon className="stroke-white w-[30px] h-[30px] mobile:w-[40px] mobile:h-[40px] mt-[5px] ml-[5.5px] mobile:mt-[12px] mobile:ml-[14px]" />
    </div>
)
