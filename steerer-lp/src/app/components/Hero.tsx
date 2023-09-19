import { Header } from "@/components/Header";
import { TextRow } from "./TextRow";
import { Dispatch, SetStateAction } from "react";
import { TextWithUnderline } from "@/components/TextWithUnderline";

export const Hero = ({ openDrawer, setOpenDrawer }: { openDrawer: boolean, setOpenDrawer: Dispatch<SetStateAction<boolean>> }): JSX.Element => (
    <div className="">
        <Header isOpen={openDrawer} setIsOpen={setOpenDrawer} />
        <TextWithUnderline />
        <TextRow />
    </div>
)