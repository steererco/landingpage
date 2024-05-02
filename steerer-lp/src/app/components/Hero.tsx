import { Header } from "@/components/Header";
import { TextRow } from "./TextRow";
import { Dispatch, MutableRefObject, SetStateAction, useRef } from "react";
import { WaitingListButton } from "@/components/WaitingListButton";
import mockup from "@/../../public/hero_mockup.png";
import Image from "next/image";
import { useIsVisible } from "@/utils/useIsVisible";
import Link from "next/link";

export const Hero = ({
  aboutAppRef,
  functionalitiesRef,
  waitingListRef,
  openDrawer,
  setOpenDrawer,
}: {
  aboutAppRef: MutableRefObject<null>;
  functionalitiesRef: MutableRefObject<null>;
  waitingListRef: MutableRefObject<null>;
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  const heroRef = useRef(null);
  const isVisible = useIsVisible(heroRef);

  return (
    <div
      ref={heroRef}
      className={`snap-start  transition-opacity ease-in duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="min-h-screen flex flex-col justify-between">
        <Header
          waitingListRef={waitingListRef}
          aboutAppRef={aboutAppRef}
          functionalitiesRef={functionalitiesRef}
          isOpen={openDrawer}
          setIsOpen={setOpenDrawer}
        />
        <div className="flex flex-col ">
          <TextWithUnderline />
          <Subtitle />
          <ImageComponent />
        </div>
      </div>
      <TextRow />
    </div>
  );
};

const TextWithUnderline = (): JSX.Element => (
  <div className="w-full flex justify-center mt-[67px] mobile:mt-0">
    <div className="relative flex mb-[30px] mobile:mb-[44px] w-[335px] mobile:w-[900px] mx-5 mobile:mx-auto flex-col items-end">
      <h1 className="text-black text-center font-poppins font-medium text-[40px] mobile:text-6xl">
        Awaken your inner greatness!
      </h1>
      <div className="flex w-[335px] mobile:w-[900px] justify-end">
        <svg
          className="hidden mobile:block absolute -right-[10px] -bottom-[14px]"
          width="342"
          height="19"
          viewBox="0 0 342 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 17C59.5 9.33332 210.2 -3.70002 341 5.49998"
            stroke="#2755F3"
            stroke-width="4"
          />
        </svg>
        <svg
          className="block mobile:hidden"
          width="231"
          height="14"
          viewBox="0 0 231 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 11.8623C40.6799 6.70618 142.032 -2.05926 230 4.12811"
            stroke="#2755F3"
            stroke-width="2.69016"
          />
        </svg>
      </div>
    </div>
  </div>
);

const Subtitle = (): JSX.Element => (
  <div className="flex flex-col mb-12 w-full items-center">
    <p className="max-w-[644px] text-sm mobile:text-xl font-inter text-black4 text-center mx-5">
      The app that goes beyond the four lines, you are just one download away
      from becoming a legend.{" "}
    </p>
    <div className="w-full mt-[32px] items-center justify-center gap-4 grid grid-cols-2 md:grid-cols-3 max-w-[552px] mobile:mt-[48px] px-10">
      <Link
        className="bg-black rounded-md flex justify-center items-center p-[2px]"
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
        className="bg-black rounded-md flex justify-center items-center p-[2px]"
        href="https://apps.apple.com/app/steerer/id6478477404"
        target="_blank"
      >
        <Image
          src={"/black_Apple.svg"}
          width={162}
          height={46}
          alt="app store"
        />
      </Link>
      <WaitingListButton />
    </div>
  </div>
);

const ImageComponent = (): JSX.Element => (
  <div className="flex grow justify-center items-end mb-6 ">
    <div>
      <Image src={"/forHero.png"} width={500} height={500} alt="steerer" />
    </div>
  </div>
);
