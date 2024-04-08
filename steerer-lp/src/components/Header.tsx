"use client";

import { BlueLogo } from "@/logo/BlueLogo";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { handleScroll } from "@/utils/scroll";
import Link from "next/link";

export const Header = ({
  aboutAppRef,
  functionalitiesRef,
  waitingListRef,
  isOpen,
  setIsOpen,
}: {
  aboutAppRef: MutableRefObject<null>;
  functionalitiesRef: MutableRefObject<null>;
  waitingListRef: MutableRefObject<null>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  return (
    <header className="flex flex-row justify-center mobile:justify-between mx-5 mobile:mx-20 pt-5 static bg-white">
      <Logo />
      <OptionsList
        aboutAppRef={aboutAppRef}
        functionalitiesRef={functionalitiesRef}
        waitingListRef={waitingListRef}
      />
    </header>
  );
};

const HeaderOption = ({
  scrollRef,
  text,
}: {
  scrollRef: MutableRefObject<null>;
  text: string;
}): JSX.Element => (
  <a
    href="javascript:void(0);"
    onClick={() => handleScroll(scrollRef)}
    className="font-inter font-normal text-black2 mx-10"
  >
    {text}
  </a>
);

const OptionsList = ({
  aboutAppRef,
  functionalitiesRef,
  waitingListRef,
}: {
  aboutAppRef: MutableRefObject<null>;
  functionalitiesRef: MutableRefObject<null>;
  waitingListRef: MutableRefObject<null>;
}): JSX.Element => (
  <div className="hidden mobile:block">
    <div className="flex flex-row w-514 justify-around">
      <HeaderOption scrollRef={aboutAppRef} text="About" />
      <HeaderOption scrollRef={functionalitiesRef} text="Functionalities" />
      <HeaderOption scrollRef={waitingListRef} text="Waiting list" />
    </div>
  </div>
);

export const Logo = (): JSX.Element => (
  <>
    <Link href="/">
      <div className="block mobile:hidden">
        <BlueLogo className="w-32" />
      </div>
      <div className="hidden mobile:block">
        <BlueLogo className="w-36.5" />
      </div>
    </Link>
  </>
);
