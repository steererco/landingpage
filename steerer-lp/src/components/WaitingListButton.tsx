import { ArrowIcon } from "@/icons/ArrowIcon";
import { DefaultButton } from "./DefaultButton";

export const WaitingListButton = (): JSX.Element => (
    <DefaultButton onClick={() => { }}>
        <div className="flex flex-row items-center">
            <p className="pr-6">Join the waiting list</p>
            <ArrowIcon />
        </div>
    </DefaultButton>
)