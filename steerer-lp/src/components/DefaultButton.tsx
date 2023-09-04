import { MouseEventHandler, ReactNode } from "react";

export const DefaultButton = ({ children, onClick }: { children: ReactNode, onClick: MouseEventHandler<HTMLButtonElement>; }): JSX.Element => {
    return (
        <button onClick={onClick} className="bg-base-blue3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[5px] font-inter font-semibold">
            {children}
        </button>
    )
}
