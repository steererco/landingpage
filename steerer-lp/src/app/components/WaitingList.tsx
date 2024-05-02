import { WaitingListButton } from "@/components/WaitingListButton";
import Image from "next/image";
import mockupMobile from "@/../../public/waitinglist_mockup_mobile.png";
import mockupDesktop from "@/../../public/waitinglist_mockup_desktop.png";
import { MutableRefObject } from "react";
import { useIsVisible } from "@/utils/useIsVisible";
import Link from "next/link";

export const WaitingList = ({
  myRef,
}: {
  myRef: MutableRefObject<null>;
}): JSX.Element => {
  const isVisible = useIsVisible(myRef);

  return (
    <div
      ref={myRef}
      className={`snap-center mobile:h-screen px-5 mobile:px-20 mt-[93px] mobile:mt-0 mobile:mb-20 flex items-center transition-opacity ease-in duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex mobile:items-end mobile:h-[70vh] w-full relative">
        <Backdrop />
        <div className="flex flex-col-reverse mobile:flex-row justify-end items-center  mobile:justify-between w-full">
          <div className="flex flex-col z-0 items-center mobile:items-start mobile:justify-center text-center mobile:text-start py-10 px-[20px] mt-[50px] mobile:mt-0 text-black w-full mobile:full mobile:h-[50vh]">
            <Title />
            <Subtitle />
            <Button />
          </div>
          <Mockup />
        </div>
      </div>
    </div>
  );
};

const Backdrop = (): JSX.Element => (
  <div className="absolute bg-gray1/[.1] h-full mobile:h-[50vh] justify-center mobile:justify-start rounded-[20px] w-full " />
);

const Title = (): JSX.Element => (
  <p className="text-black font-poppins font-medium text-3xl mobile:text-5xl">
    Don't miss the chance to be part of this sports revolution.
  </p>
);

const Subtitle = (): JSX.Element => (
  <p className="text-center mobile:text-start font-inter text-sm text-black4 mt-[32px]">
    Sign up now for the Steerer App waiting list and be among the first to
    experience the future of soccer.
  </p>
);

const Button = (): JSX.Element => (
  <div className="w-full mt-[32px] items-center justify-center gap-4 grid grid-cols-2 md:grid-cols-3 mobile:mt-[48px] px-10">
    <Link
      className="bg-black rounded-md h-full flex justify-center items-center p-[2px]"
      href="https://play.google.com/store/apps/details?id=com.mycompany.steerer&hl=en_US"
      target="_blank"
    >
      <Image
        src={"/black_Google.svg"}
        width={162}
        height={46}
        alt="play store"
      />
    </Link>
    <Link
      className="bg-black rounded-md h-full flex justify-center items-center p-[2px]"
      href="https://apps.apple.com/app/steerer/id6478477404"
      target="_blank"
    >
      <Image src={"/black_Apple.svg"} width={162} height={46} alt="app store" />
    </Link>
    <WaitingListButton />
  </div>
);

const Mockup = (): JSX.Element => (
  <div className="z-0">
    <div className="mobile:hidden">
      <Image src={mockupMobile} alt="teste" />
    </div>
    <div className="hidden mobile:flex px-10">
      <Image src={mockupDesktop} alt="teste" />
    </div>
  </div>
);
