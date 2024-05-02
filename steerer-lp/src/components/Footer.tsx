import { FacebookIcon } from "@/icons/FacebookIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { LinkedinIcon } from "@/icons/LinkedinIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import { BlackLogo } from "@/logo/BlackLogo";
import { handleScroll } from "@/utils/scroll";
import Link from "next/link";
import { MutableRefObject, ReactNode } from "react";

interface FooterProps {
  aboutAppRef?: MutableRefObject<null>;
  functionalitiesRef?: MutableRefObject<null>;
  waitingListRef?: MutableRefObject<null>;
}

export const Footer: React.FC<FooterProps> = ({
  aboutAppRef,
  functionalitiesRef,
  waitingListRef,
}: FooterProps): JSX.Element => (
  <div className="flex justify-center">
    <div className="snap-start flex flex-col-reverse w-full mobile:flex-row justify-center mobile:justify-between max-w-[1444px] pb-16 mx-5 mobile:mx-20 h-[100vh] mobile:h-[60vh] pt-14 mobile:mt-0">
      {aboutAppRef && functionalitiesRef && waitingListRef && (
        <LastCol
          aboutAppRef={aboutAppRef}
          functionalitiesRef={functionalitiesRef}
          waitingListRef={waitingListRef}
        />
      )}
      <div
        className={`flex items-center items-end mobile:items-start justify-between h-full text-black ${
          aboutAppRef ? "flex-col" : "flex-row"
        }`}
      >
        <AboutApp />
        <Newsletter />
      </div>
    </div>
  </div>
);

const AboutApp = (): JSX.Element => (
  <div className="flex flex-col items-center mobile:items-start">
    <Logo />
    <p className="mt-6 font-inter text-black/[.7] mobile:text-gray2 text-center mobile:text-start text-sm mobile:text-base max-w-[350px] mobile:max-w-[458px]">
      Crafted for all those who live and breathe the unwavering passion for
      football, our mission is to deliver an unparalleled experience that
      captures the essence of the beautiful game.
    </p>
  </div>
);

const Newsletter = (): JSX.Element => (
  <div className="flex flex-col items-center mobile:items-start w-full mt-[80px] mobile:mt-0 ">
    <p className="font-poppins font-medium mobile:text-2xl">
      Subscribe to our newsletter
    </p>
    <div className="relative w-full mt-4">
      <input
        className="rounded bg-gray1/[.2] focus:border-base-blue3 w-full h-[48px] mobile:h-[60px] text-sm mobile:text-base placeholder-black/[.7] pl-5 mobile:pl-6 pr-28 mobile:pr-32 text-black"
        id="email"
        type="email"
        placeholder="Your best email"
      ></input>
      <button
        type="button"
        className="absolute w-[88px] mobile:w-[110px] h-[40px] mobile:h-[50px] text-sm mobile:text-base bg-base-blue3 text-white font-inter font-semibold rounded right-[4px] mobile:right-[5px] top-[4px] mobile:top-[5px]"
      >
        SIGN UP
      </button>
    </div>
  </div>
);

const Logo = (): JSX.Element => (
  <>
    <div className="block mobile:hidden">
      <BlackLogo className="w-32" />
    </div>
    <div className="hidden mobile:block">
      <BlackLogo className="w-36.5" />
    </div>
  </>
);

const LastCol = ({
  aboutAppRef,
  functionalitiesRef,
  waitingListRef,
}: {
  aboutAppRef: MutableRefObject<null>;
  functionalitiesRef: MutableRefObject<null>;
  waitingListRef: MutableRefObject<null>;
}): JSX.Element => (
  <div className="flex flex-col items-center mobile:items-start justify-between h-full mt-[60px] mobile:mt-0">
    <Options
      aboutAppRef={aboutAppRef}
      functionalitiesRef={functionalitiesRef}
      waitingListRef={waitingListRef}
    />
    <PrivacyAndTrademark />
  </div>
);

const PrivacyAndTrademark = (): JSX.Element => (
  <div className="flex flex-col items-center mobile:items-start font-inter text-sm mt-[70px] mobile:mt-0">
    <p className="text-black">©Steerer 2023 - All rights reserved</p>
    <p className="text-gray2">
      <Link href="/terms">Terms</Link> and{" "}
      <Link href="/privacy">Privacy Policies</Link>.{" "}
      <Link href="/help">Help page</Link>
    </p>
  </div>
);

const Options = ({
  aboutAppRef,
  functionalitiesRef,
  waitingListRef,
}: {
  aboutAppRef: MutableRefObject<null>;
  functionalitiesRef: MutableRefObject<null>;
  waitingListRef: MutableRefObject<null>;
}): JSX.Element => (
  <div className="flex flex-col items-center mobile:items-start w-full">
    <Links
      aboutAppRef={aboutAppRef}
      functionalitiesRef={functionalitiesRef}
      waitingListRef={waitingListRef}
    />
    <Socials />
  </div>
);

const Socials = (): JSX.Element => (
  <div className="flex flex-row justify-around mobile:justify-start mt-8 w-full">
    <SocialOption>
      <Link href={"https://www.instagram.com/steerer.co/"} target="_blank">
        <InstagramIcon />
      </Link>
    </SocialOption>
    <SocialOption>
      <Link href={"https://twitter.com/SteererCo "} target="_blank">
        <TwitterIcon />
      </Link>
    </SocialOption>
    <SocialOption>
      <Link
        href={"https://www.linkedin.com/company/steererco/"}
        target="_blank"
      >
        <LinkedinIcon />
      </Link>
    </SocialOption>
    <SocialOption>
      <Link href={"https://www.facebook.com/steererco "} target="_blank">
        <FacebookIcon />
      </Link>
    </SocialOption>
  </div>
);

const SocialOption = ({ children }: { children: ReactNode }): JSX.Element => (
  <a href="#" className="mobile:mr-12">
    {children}
  </a>
);

const Links = ({
  aboutAppRef,
  functionalitiesRef,
  waitingListRef,
}: {
  aboutAppRef: MutableRefObject<null>;
  functionalitiesRef: MutableRefObject<null>;
  waitingListRef: MutableRefObject<null>;
}): JSX.Element => (
  <div className="flex flex-col items-center mobile:items-start">
    <LinkOption scrollRef={aboutAppRef}>About Us</LinkOption>
    <LinkOption scrollRef={functionalitiesRef}>Functionalities</LinkOption>
    <LinkOption scrollRef={waitingListRef}>Waiting list</LinkOption>
    {/* <LinkOption>Contact</LinkOption> */}
  </div>
);

const LinkOption = ({
  children,
  scrollRef,
}: {
  children: ReactNode;
  scrollRef: MutableRefObject<null>;
}): JSX.Element => (
  <a
    href="javascript:void(0);"
    onClick={() => handleScroll(scrollRef)}
    className="font-inter mobile:text-xl text-black/[.7] mb-4"
  >
    {children}
  </a>
);
