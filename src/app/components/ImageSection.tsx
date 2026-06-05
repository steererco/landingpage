import Image from "next/image";
import ballMockup from "@/../../public/ball_mockup.png";
import disputeMockup from "@/../../public/dispute_mockup.png";
import playerMockup from "@/../../public/player_mockup.png";
import twoPlayersMockup from "@/../../public/twoplayers_mockup.png";
import handsUpMockup from "@/../../public/handsup_mockup.png";
import { WhiteLogo } from "@/logo/WhiteLogo";
import { WaitingListButton } from "@/components/WaitingListButton";
import { useRef } from "react";
import { useIsVisible } from "@/utils/useIsVisible";
import Link from "next/link";

export const ImageSection = (): JSX.Element => {
  const imageSectionRef = useRef(null);
  const isVisible = useIsVisible(imageSectionRef);

  return (
    <div
      ref={imageSectionRef}
      className={`snap-start flex flex-row mobile:justify-center gap-[20px] mobile:gap-[30px] no-scrollbar mobile:overflow-auto items-center mobile:px-20 px-5 transition-opacity ease-in duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex mobile:flex-1 h-[80%] mobile:h-[40vw] gap-[30px] md:block hidden">
        <div className="flex flex-col h-full w-screen w-[330px] mobile:w-full gap-[30px] justify-between ">
          <FirstRow />
          <SecondRow />
        </div>
      </div>
      <div className="flex mobile:flex-1 mobile:h-[40vw] h-[80%] mobile:h-max-[80%] flex-row gap-[20px] mobile:gap-[30px]">
        <BlueBox />
        <SecondCol />
      </div>
    </div>
  );
};

const FirstRow = (): JSX.Element => (
  <div className="mobile:h-[47.3%]  h-full">
    <div className="flex flex-col mobile:flex-row gap-[30px] w-[330px] mobile:w-full h-full justify-between ">
      <div className="rounded-[20px] h-[47.3%] mobile:w-full mobile:h-full">
        <Image
          src={ballMockup}
          alt=""
          className="w-[330px] mobile:w-full h-full"
        />
      </div>
      <div className="rounded-[20px] h-[47.3%] mobile:w-full mobile:h-full">
        <Image
          src={playerMockup}
          alt=""
          className="w-[330px] mobile:w-full h-full"
        />
      </div>
    </div>
  </div>
);

const SecondRow = (): JSX.Element => (
  <div className="rounded-[20px] h-[47.3%] hidden mobile:flex ">
    <Image src={disputeMockup} alt="" className="w-full h-full" />
  </div>
);

const BlueBox = (): JSX.Element => (
  <div className="mobile:w-full w-full md:w-[80vw] py-10 md:py-0 md:h-full rounded-[20px] bg-gradient-to-b from-base-blue3 to-base-blue1">
    <div className="flex flex-col h-full px-[18px] justify-around items-center">
      <WhiteLogo />
      <p className="font-poppins text-white font-medium text-[34px] mobile:text-[24px] text-center md:mt-[10px] mt-[20px]">
        Awaken your greatness in soccer with the Steerer app!
      </p>
      <div className="w-full mt-[32px] items-center justify-center gap-4 grid grid-cols-2  mobile:mt-[48px]">
        <Link
          className="bg-white rounded-md h-full flex justify-center items-center p-[2px]"
          href="https://play.google.com/store/apps/details?id=com.mycompany.steerer&hl=en_US"
          target="_blank"
        >
          <Image
            src={"/white_Google.svg"}
            width={162}
            height={46}
            alt="play store"
          />
        </Link>
        <Link
          className="bg-white rounded-md h-full flex justify-center items-center p-[2px]"
          href="https://apps.apple.com/app/steerer/id6478477404"
          target="_blank"
        >
          <Image
            src={"/white_Apple.svg"}
            width={162}
            height={46}
            alt="app store"
          />
        </Link>
        <div className="col-span-2">
          <WaitingListButton />
        </div>
      </div>
    </div>
  </div>
);

const SecondCol = (): JSX.Element => (
  <div className="flex flex-col w-[330px] mobile:w-full h-full gap-[30px] justify-between md:flex hidden">
    <div className="flex rounded-[20px] h-[47.3%]">
      <Image src={twoPlayersMockup} alt="" />
    </div>
    <div className="flex rounded-[20px] h-[47.3%]">
      <Image src={handsUpMockup} alt="" />
    </div>
  </div>
);
