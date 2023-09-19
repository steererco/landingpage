import { TextWithIcon } from "@/components/TextWithIcon"
import { GlobeIcon } from "@/icons/GlobeIcon"
import { HeartRateIcon } from "@/icons/HeartRateIcon"

export const TextRow = () => (
    <>
        <div className="mobile:mx-20 mx-5">
            <div className="flex flex-col mobile:flex-row items-center mobile:justify-between ">
                <FirstText />
                <SecondText />
                <ThirdText />
            </div>
            <Divider />
        </div>
    </>
)

const FirstText = (): JSX.Element => (
    <p className="text-black text-center mobile:max-w-[340px] mb-[10px] mobile:mb-0 mobile:text-left font-poppins font-semibold text-lg mobile:text-xl">
        Access to tactics and strategie employed by professional teams.
    </p>
)

const SecondText = (): JSX.Element => (
    <TextWithIcon icon={<HeartRateIcon width="30" height="30" className="stroke-2 stroke-base-blue1" />}>
        Detailed analysis to enhance<br />your on-field performance
    </TextWithIcon>
)

const ThirdText = (): JSX.Element => (
    <TextWithIcon icon={<GlobeIcon width="30" height="30" className="stroke-2 stroke-base-blue1" />}>
        Connection with a passionate football<br />and knowledgeable community.
    </TextWithIcon>
)

const Divider = (): JSX.Element => (
    <hr className="my-12 h-0.5 border-t-0 bg-gray2/[.1]" />
)
