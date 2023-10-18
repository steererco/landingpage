import { ModalContext } from "@/context/ModalContext";
import { CloseIcon } from "@/icons/CloseIcon";
import { useContext } from "react";
import { Clickable } from "./Clickable";
import { DefaultButton } from "./DefaultButton";

export const Modal = (): JSX.Element | null => {
    const context = useContext(ModalContext)

    return (
        <div className={`fixed inset-0 flex justify-center items-center z-[1] transition-colors ${context.isOpen ? "visible bg-black/[.5]" : "invisible"}`}>
            <div className={`flex flex-col w-[360px] h-[466px] rounded-[20px] bg-white px-6 pt-3 pb-6 transition-all ${context.isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <Close onClick={() => context.changeIsOpen(false)} />
                <Input placeholder="Name:" id="name" type="text" />
                <Input placeholder="Email:" id="email" type="email" />
                <Input placeholder="Phone number:" id="wpp" type="tel" />
                <div className="h-6"></div>
                <Button />
                <p className="text-black/[.7] text-left font-inter font-medium text-[10px] leading-4 mt-6">
                    By signing up, you agree to the processing of your personal data to receive communications and emails from the company. Your data will only be used for communication and marketing purposes. You can unsubscribe from these emails at any time. For more information, please check our Privacy Notice.
                </p>
            </div>
        </div>
    )
}

const Close = ({ onClick }: { onClick: () => void }): JSX.Element => (
    <div className="self-end">
        <Clickable onClick={onClick}>
            < CloseIcon />
        </Clickable>
    </div>
)

const Input = ({ placeholder, type, id }: { placeholder: string, type: string, id: string }): JSX.Element => (
    <input className="mt-4 w-full h-[60px] rounded-[10px] border-2 border-gray1 placeholder-gray2 font-inter font-medium text-black2 pl-4 pr-4" id={id} type={type} placeholder={placeholder} />
)

const Button = (): JSX.Element => (
    <DefaultButton onClick={() => console.log('hehe')}>
        <p className="h-[36px] flex items-center justify-center">
            CONFIRM SUBSCRIPTION
        </p>
    </DefaultButton>
)