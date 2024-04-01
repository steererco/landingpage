import { GraphicIcon } from "@/icons/GraphicIcon";
import { HeartIcon } from "@/icons/HeartIcon";
import { StrategyIcon } from "@/icons/StrategyIcon";
import { useIsVisible } from "@/utils/useIsVisible";
import { useRef } from "react";

export const Benefits = (): JSX.Element => {
  const benefitsRef = useRef(null);
  const isVisible = useIsVisible(benefitsRef);

  return (
    <div
      ref={benefitsRef}
      className={`snap-start flex flex-col justify-center items-center mobile:h-screen  bg-white mx-5 py-16 mobile:py-16 mobile:mx-20 mt-[90px] mobile:mt-0 self-center transition-opacity ease-in duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-[1444px]">
        <p className="text-black text-center font-poppins font-medium text-3xl mobile:text-5xl">
          Designed for those who live and
          <br />
          breathe football passion
        </p>
        <div className="flex flex-col mobile:flex-row justify-center items-center mobile:justify-between">
          <BenefitItem
            icon={<StrategyIcon width="36" height="36" />}
            title="Professional strategies within reach"
            description="Unlock professional soccer tactics and strategies with a couple of clicks in the app. Elevate your game with insights from football's best minds.
            "
            additionalClass="mobile:mx-0 mobile:mr-5 max-w-[350px]"
          />
          <BenefitItem
            icon={<HeartIcon width="36" height="36" />}
            title="Passionate Football Community"
            description="Join a community of like-minded football fans. Share and exchange knowledge, experiences, and insights, fostering a valuable network of support.
            "
          />
          <BenefitItem
            icon={<GraphicIcon width="36" height="36" />}
            title="Detailed Analysis for Improvement"
            description="Receive detailed performance analysis to improve strengths and address areas for growth using accurate data. All collected in our football management app!
            "
            additionalClass="mobile:mx-0 mobile:ml-5 max-w-[380px]"
          />
        </div>
      </div>
    </div>
  );
};
interface BenefitItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
  additionalClass?: string;
}

const BenefitItem = ({
  icon,
  title,
  description,
  additionalClass = "",
}: BenefitItemProps): JSX.Element => (
  <div
    className={`flex flex-col items-center mt-12 mobile:mt-20 mx-5 ${additionalClass} justify-center max-w-[350px]`}
  >
    <div className="bg-base-blue2 rounded-[7px] w-[64px] h-[64px] flex items-center justify-center">
      {icon}
    </div>
    <p className="mt-[32px] mb-[24px] text-black font-inter text-center text-2xl font-medium">
      {title}
    </p>
    <p className="text-black text-center font-inter">{description}</p>
  </div>
);
