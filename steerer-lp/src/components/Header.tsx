'use client'

import { BlueLogo } from "@/logo/BlueLogo"

export const Header = (): JSX.Element => (
    <div className="flex flex-row justify-between mx-20 py-5 static bg-white">
        <BlueLogo className="w-36.5" />
        <div>
            <div className="flex flex-row w-514 justify-around">
                <HeaderOption text="About" />
                <HeaderOption text="Functionalities" />
                <HeaderOption text="Waiting list" />
            </div>
        </div>
    </div>
)

const HeaderOption = ({ text }: { text: string }): JSX.Element => (
    <a href="#" className="font-inter font-normal text-black2 mx-10" onClick={() => { }}>{text}</a>
)