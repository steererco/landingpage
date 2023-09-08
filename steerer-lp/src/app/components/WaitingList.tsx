import { WaitingListButton } from "@/components/WaitingListButton";
import Image from "next/image";
import mockupMobile from "@/../../public/waitinglist_mockup_mobile.png"
import mockupDesktop from "@/../../public/waitinglist_mockup_desktop.png"


export const WaitingList = (): JSX.Element => (
    <div className="mobile:h-screen px-10 mobile:px-20 flex items-center">
        <div className="flex mobile:items-end mobile:h-[70vh] w-full relative">
            <Backdrop />
            <div className="flex flex-col-reverse mobile:flex-row justify-end items-center mobile:items-end mobile:justify-between w-full">
                <div className="flex flex-col z-0 items-center mobile:items-start mobile:justify-center text-center mobile:text-start px-[20px] mt-[50px] mobile:mt-0 text-black w-full mobile:w-2/4 mobile:h-[50vh]">
                    <Title />
                    <Subtitle />
                    <Button />
                </div>
                <Mockup />
            </div>
        </div>
    </div>
)

const Backdrop = (): JSX.Element => (
    <div className="absolute bg-gray1/[.1] h-full mobile:h-[50vh] justify-center mobile:justify-start rounded-[20px] w-full " />
)

const Title = (): JSX.Element => (
    <p className="text-black font-poppins font-medium text-3xl mobile:text-5xl">Don't miss the
        chance to be
        part of this sports
        revolution.
    </p>
)

const Subtitle = (): JSX.Element => (
    <p className="text-center mobile:text-start font-inter text-sm text-black4 mt-[32px]">Sign up now for the Steerer App waiting
        list and be among the first to experience the
        future of football training.
    </p>
)

const Button = (): JSX.Element => (
    <div className="mt-[48px] mb-[30px] mobile:mb-0">
        <WaitingListButton />
    </div>
)

const Mockup = (): JSX.Element => (
    <div className="z-0">
        <div className="mobile:hidden">
            <Image src={mockupMobile} alt="teste" />
        </div>
        <div className="hidden mobile:flex">
            <Image src={mockupDesktop} alt="teste" />
        </div>
    </div>
)