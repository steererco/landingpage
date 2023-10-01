import { Header } from "@/components/Header";
import { TextRow } from "./TextRow";
import { Dispatch, SetStateAction } from "react";
import { WaitingListButton } from "@/components/WaitingListButton";
import mockup from "@/../../public/hero_mockup.png";
import Image from "next/image";

export const Hero = ({ openDrawer, setOpenDrawer }: { openDrawer: boolean, setOpenDrawer: Dispatch<SetStateAction<boolean>> }): JSX.Element => (
    <div>
        <div className="h-screen flex flex-col justify-between">
            <Header isOpen={openDrawer} setIsOpen={setOpenDrawer} />
            <div className="flex flex-col mobile:h-[85%]">
                <TextWithUnderline />
                <Subtitle />
                <ImageComponent />
            </div>
        </div>
        <TextRow />
    </div>
)

const TextWithUnderline = (): JSX.Element => (
    <div className="w-full flex justify-center mt-[67px] mobile:mt-0">
        <div className="relative flex mb-[30px] mobile:mb-[44px] w-[335px] mobile:w-[900px] mx-5 mobile:mx-auto flex-col items-end">
            <h1 className="text-black text-center font-poppins font-medium text-[40px] mobile:text-6xl">Awaken your inner greatness!</h1>
            <div className="flex w-[335px] mobile:w-[900px] justify-end">
                < svg className="hidden mobile:block absolute -right-[10px] -bottom-[14px]" width="342" height="19" viewBox="0 0 342 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0.5 17C59.5 9.33332 210.2 -3.70002 341 5.49998" stroke="#2755F3" stroke-width="4" />
                </svg >
                <svg className="block mobile:hidden" width="231" height="14" viewBox="0 0 231 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11.8623C40.6799 6.70618 142.032 -2.05926 230 4.12811" stroke="#2755F3" stroke-width="2.69016" />
                </svg>

            </div>

        </div>
    </div>
)

const Subtitle = (): JSX.Element => (
    <div className="flex flex-col w-full items-center">
        <p className="max-w-[644px] text-sm mobile:text-xl font-inter text-black4 text-center mx-5">The app that goes beyond the four lines, you are just one download away from becoming a legend. </p>
        <div className="w-[262px] mt-[32px] mobile:mt-[48px] ml-7">
            <WaitingListButton />
        </div>
    </div>
)

const ImageComponent = (): JSX.Element => (
    <div className="flex grow justify-center items-end mb-6 bg-gradient-to-t mobile:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-base-blue3/[.15] via-base-blue3/[.1] mobile:via-base-blue3/[.01] to-white ">
        <div>
            <Image src={mockup} alt="steerer" />
        </div>
    </div>
)

