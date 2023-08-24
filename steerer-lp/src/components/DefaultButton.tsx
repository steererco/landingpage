import { MouseEventHandler } from "react";

export const DefaultButton = ({ label, onClick }: { label: string, onClick: MouseEventHandler<HTMLButtonElement>; }): JSX.Element => {
    return (
        <button onClick={onClick} className="bg-base-blue3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[5px]">
            {label}
        </button>
    )
}
