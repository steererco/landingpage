import { ReactNode } from "react";

export const TextWithIcon = ({ icon, children }: { icon: JSX.Element, children?: ReactNode }): JSX.Element => (
    <div className="flex flex-col mobile:flex-row justify-center items-center">
        <div className="flex bg-base-blue2/[0.15] rounded-5px w-[60px] h-[60px] items-center justify-center mt-[54px] mobile:mt-0 mobile:mr-[24px]">
            {icon}
        </div>
        <p className="text-black/[.7] text-base mobile:text-lg font-inter font-medium text-center mt-[24px] mobile:mt-0 mobile:text-left font-medium" >{children}</p>
    </div>
)
