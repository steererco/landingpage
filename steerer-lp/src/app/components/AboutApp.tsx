import Image from "next/image";
import mockup1 from "@/../../public/aboutapp_mockup1.png"
import playerImage from "@/../../public/player_image.png"
import { GoalIcon } from "@/icons/GoalIcon";
import { CardsIcon } from "@/icons/CardsIcon";

export const AboutApp = (): JSX.Element => (
    <>
        <FirstRow />
        <SecondRow />
    </>
)

const FirstRow = (): JSX.Element => (
    <div className="h-screen bg-white px-20 flex flex-row justify-center justify-around items-center">
        <div className="relative flex items-end justify-center bg-gray1/[.1] rounded-[20px] w-5/12 max-w-[578px] h-2/3 max-h-[570px]" >
            <TimeCard />
            <PlayerCard />
            <GoalCard />
            <CardsCard />
            <Image src={mockup1} alt="steerer" />
        </div>
        <div className="flex flex-col w-5/12">
            <p className="text-black text-left font-poppins font-medium text-4xl">Get ready for a Game Revolution with the Steerer App!</p>
            <p className="text-black/[.7] font-inter text-xl mt-6" >We understand that soccer is more than just a sport for you. It's the
                passion that flows in your veins, the dream you tirelessly chase. Now,
                envision having access to secrets from professional teams, international
                -level analysis, and a community that shares the same determination.
            </p>
        </div>
    </div>
)

const TimeCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center bg-base-blue3 w-[80px] h-[53px] rounded-xl top-[76px] -right-[26px]">
        <p className="text-white text-center font-poppins font-medium text-2xl">83'</p>
    </div>
)

const PlayerCard = (): JSX.Element => (
    <div className="absolute flex flex-row items-center bg-base-blue2 w-[190px] h-[66px] rounded-[10px] top-[96px] -left-[42px]">
        <div className="rounded-full bg-black w-[50px] h-[50px] ml-2">
            <Image src={playerImage} alt="player" className="rounded-full" />
        </div>
        <div className="flex flex-col justify-center font-poppins ml-3 text-white">
            <p className="text-sm font-semibold">Ethan Brooks</p>
            <p className="text-xs font-medium text-white/[.7]">36 goals</p>
        </div>
    </div>
)
const CardsCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center bg-base-blue2 rounded-[5px] w-[50px] h-[50px] right-[68px] bottom-[268px]">
        <CardsIcon width={33} height={40} className="stroke-white" />
    </div>
)

const GoalCard = (): JSX.Element => (
    <div className="absolute flex items-center justify-center bg-base-blue3 rounded-[10px] w-[67px] h-[67px] -left-[23px] bottom-[112px]">
        <GoalIcon width={50} height={50} className="stroke-white stroke-[0.9]" />
    </div>
)

const SecondRow = (): JSX.Element => (
    <div className="h-screen bg-white px-20 flex flex-row justify-center justify-between items-center">
        <div className="flex flex-col w-5/12">
            <p className="text-black text-left font-poppins font-medium text-4xl">Find sponsors near you</p>
            <p className="text-black/[.7] font-inter text-xl mt-6" >Looking for support for your project? Want to take your team to the next level?
                The solution is closer than you think! With Steerer, it's easy to find sponsors
                near you, ready to believe in your potential and support your ambitions.<br /> <br />
                Don't waste any more time seeking support in the dark. Find sponsors near you
                with Steerer and open doors to success. Join our community and take the next
                step in your journey to greatness!
            </p>
        </div>
        <div className="bg-gray1/[.1] rounded-[20px] w-5/12 h-2/3" />
    </div>
)
