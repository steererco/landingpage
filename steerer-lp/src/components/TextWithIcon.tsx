import { ReactNode } from "react";

export const TextWithIcon = ({ icon, children }: { icon: JSX.Element, children?: ReactNode }): JSX.Element => (
    <div className="flex flex-row justify-center items-center">
        <div className="bg-base-blue2/[0.15] rounded-5px w-[60px] h-[60px] flex items-center justify-center mr-[24px]">
            {icon}
        </div>
        <p className="text-black4 font-inter font-medium" >{children}</p>
    </div>
)
