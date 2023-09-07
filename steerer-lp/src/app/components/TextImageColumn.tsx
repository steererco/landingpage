import { ReactNode } from "react"

export const TextImageColumn = (): JSX.Element => (
    <div className="bg-white h-screen flex flex-col justify-center px-20">
        <TextArea />
        <div className="flex flex-row justify-center mt-32 h-2/4">
            <ImageBlock />
            <div className="flex flex-col w-1/2">
                <BigTextBlock />
                <SmallTextBlock>Review your game through thorough analysis</SmallTextBlock>
                <SmallTextBlock>Connect with determined peers in the game</SmallTextBlock>
            </div>
        </div>
    </div>
)

const SmallTextBlock = ({ children }: { children: ReactNode }): JSX.Element => (
    <div className="flex bg-gray1/[.1] h-1/3 mt-4 items-center px-8 rounded-[20px]">
        <p className="text-black font-poppins font-medium text-2xl">{children}</p>
    </div>
)

const BigTextBlock = (): JSX.Element => (
    <div className="bg-gray1/[.1] h-2/5 flex flex-col justify-center px-8 rounded-[20px]">
        <p className="text-black font-poppins font-medium text-2xl">Unlock your utmost potential</p>
        <p className="text-black/[.7] mt-1">Unlock your highest potential using expert strategies to elevate your performance to new heights.</p>
    </div>
)

const ImageBlock = (): JSX.Element => (
    <div className="bg-gray1/[.1] w-2/5 mr-4 rounded-[20px]">
        <p>Hello</p>
    </div>
)

const TextArea = (): JSX.Element => (
    <>
        <p className="text-black text-center font-poppins font-medium text-5xl">Seize the opportunity to advance your skills<br />and knowledge, easily accessible.</p>
        <p className="text-black text-center mt-8 font-inter font-normal text-xl">With our app, you&apos;ll access professional team strategies, precise analyses, and a community<br />of players and coaches who share your drive to win.</p>
    </>
)