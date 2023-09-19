import { Header } from "@/components/Header";
import { TextRow } from "./TextRow";
import { Dispatch, SetStateAction } from "react";

export const Hero = ({ openDrawer, setOpenDrawer }: { openDrawer: boolean, setOpenDrawer: Dispatch<SetStateAction<boolean>> }): JSX.Element => (
    <div>
        <Header isOpen={openDrawer} setIsOpen={setOpenDrawer} />
        <TextRow />
    </div>
)