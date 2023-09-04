import { ArrowIcon } from "@/icons/ArrowIcon";
import { CloseIcon } from "@/icons/CloseIcon";
import { BlueLogo } from "@/logo/BlueLogo";
import { Dispatch, SetStateAction } from "react";
import { DefaultButton } from "./DefaultButton";

export const Drawer = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }): JSX.Element => {
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <Header setIsOpen={setIsOpen} />
                    <OptionsList />
                    <div className="w-full flex justify-center">
                        <DefaultButton onClick={() => { }}>
                            <div className="flex flex-row items-center">
                                <p className="pr-6">Join the waiting list</p>
                                <ArrowIcon />
                            </div>
                        </DefaultButton>
                    </div>
                </article>
            </section>
        </main>
    );
}

const Header = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }): JSX.Element => (
    <div className="flex flex-row justify-between mx-10 mobile:mx-20 py-5 static bg-white">
        <Logo />
        <a href="#" className="flex mobile:hidden" onClick={() => setIsOpen(false)}>
            <p>here</p>
            <CloseIcon />
        </a>
    </div>
)

const Logo = (): JSX.Element => (
    <>
        <div className="block mobile:hidden">
            <BlueLogo className="w-32" />
        </div>
    </>
)

const OptionsList = (): JSX.Element => (
    <div className="flex flex-col items-left">
        <HeaderOption text="About" />
        <HeaderOption text="Functionalities" />
        <HeaderOption text="Waiting list" />
    </div>
)

const HeaderOption = ({ text }: { text: string }): JSX.Element => (
    <a href="#" className="font-inter font-normal text-black2 mb-6 mx-10" onClick={() => { }}>{text}</a>
)