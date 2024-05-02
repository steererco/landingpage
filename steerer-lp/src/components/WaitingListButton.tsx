import { ArrowIcon } from "@/icons/ArrowIcon";
import { DefaultButton } from "./DefaultButton";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

export const WaitingListButton = (): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <>
      <DefaultButton onClick={() => context.changeIsOpen(true)}>
        <div className="flex flex-row items-center justify-center">
          <p className="pr-6 text-nowrap">REQUEST A DEMO</p>
          <ArrowIcon />
        </div>
      </DefaultButton>
    </>
  );
};
