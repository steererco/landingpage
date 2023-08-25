import { TextWithIcon } from "@/components/TextWithIcon"
import { GlobeIcon } from "@/icons/GlobeIcon"
import { HeartRateIcon } from "@/icons/HeartRateIcon"

export const TextRow = () => (
    <>
        <div className="mx-[20px]">
            <div className="flex justify-between ">
                <FirstText />
                <SecondText />
                <ThirdText />
            </div>
            <Divider />
        </div>
    </>
)

const FirstText = (): JSX.Element => (
    <p className="text-black font-poppins font-semibold text-xl">
        Access to tactics and strategies<br />employed by professional teams.
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
