'use client'

import { BlueLogo } from "@/logo/BlueLogo"
import { MenuIcon } from "@/icons/MenuIcon"
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from "react";
import { DefaultButton } from "./DefaultButton";
import { ArrowIcon } from "@/icons/ArrowIcon";
import { handleScroll } from "@/utils/scroll";

export const Header = ({ aboutAppRef, functionalitiesRef, isOpen, setIsOpen }: { aboutAppRef: MutableRefObject<null>, functionalitiesRef: MutableRefObject<null>, isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }): JSX.Element => {
    // const handleWindowResize = () => window.innerWidth >= 900 && setIsOpen(false)

    // useEffect(() => {
    //     window.addEventListener('resize', handleWindowResize);

    //     return () => window.removeEventListener('resize', handleWindowResize)
    // }, [])

    return (
        <header className="flex flex-row justify-center mobile:justify-between mx-5 mobile:mx-20 pt-5 static bg-white">
            <Logo />
            <OptionsList aboutAppRef={aboutAppRef} functionalitiesRef={functionalitiesRef} />
        </header>
    )
}

const HeaderOption = ({ scrollRef, text }: { scrollRef: MutableRefObject<null>, text: string }): JSX.Element => (
    <a href="javascript:void(0);" onClick={() => handleScroll(scrollRef)} className="font-inter font-normal text-black2 mx-10">{text}</a>
)

const OptionsList = ({ aboutAppRef, functionalitiesRef }: { aboutAppRef: MutableRefObject<null>, functionalitiesRef: MutableRefObject<null> }): JSX.Element => (
    <div className="hidden mobile:block">
        <div className="flex flex-row w-514 justify-around">
            <HeaderOption scrollRef={aboutAppRef} text="About" />
            <HeaderOption scrollRef={functionalitiesRef} text="Functionalities" />
            <HeaderOption scrollRef={aboutAppRef} text="Waiting list" />
        </div>
    </div>
)

const Logo = (): JSX.Element => (
    <>
        <div className="block mobile:hidden">
            <BlueLogo className="w-32" />
        </div>
        <div className="hidden mobile:block">
            <BlueLogo className="w-36.5" />
        </div>
    </>
)
