'use client'

import { BlueLogo } from "@/logo/BlueLogo"
import { MenuIcon } from "@/icons/MenuIcon"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DefaultButton } from "./DefaultButton";
import { ArrowIcon } from "@/icons/ArrowIcon";

export const Header = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }): JSX.Element => {
    const handleWindowResize = () => window.innerWidth >= 900 && setIsOpen(false)

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <div className="flex flex-row justify-between mx-10 mobile:mx-20 py-5 static bg-white">
            <Logo />
            <OptionsList />
            <a href="#" className="flex mobile:hidden" onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
            </a>
        </div>
    )
}

const HeaderOption = ({ text }: { text: string }): JSX.Element => (
    <a href="#" className="font-inter font-normal text-black2 mx-10" onClick={() => { }}>{text}</a>
)

const OptionsList = (): JSX.Element => (
    <div className="hidden mobile:block">
        <div className="flex flex-row w-514 justify-around">
            <HeaderOption text="About" />
            <HeaderOption text="Functionalities" />
            <HeaderOption text="Waiting list" />
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
