import { ModalContext } from "@/context/ModalContext";
import { CloseIcon } from "@/icons/CloseIcon";
import { useContext } from "react";
import { Clickable } from "./Clickable";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form"
import { useEffect } from "react";

interface IFormInput {
    name: string
    email: string
    phoneNumber: string
}

export const Modal = (): JSX.Element | null => {
    const { register, handleSubmit, watch } = useForm<IFormInput>({ mode: 'onChange' })
    const context = useContext(ModalContext)

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    useEffect(() => {
        console.log(watch('name'))
    }, [watch('name')])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`fixed inset-0 flex justify-center items-center z-[1] transition-colors ${context.isOpen ? "visible bg-black/[.5]" : "invisible"}`}>
                <div className={`flex flex-col w-[360px] h-[466px] rounded-[20px] bg-white px-6 pt-3 pb-6 transition-all ${context.isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                    <Close onClick={() => context.changeIsOpen(false)} />
                    <Input register={register} name='name' type="text" placeholder="Name:" />
                    <Input register={register} name='email' placeholder="Email:" type="email" />
                    <Input register={register} name='phoneNumber' placeholder="Phone number:" type="tel" />
                    <div className="h-6" />
                    <Button type="submit" />
                    <p className="text-black/[.7] text-left font-inter font-medium text-[10px] leading-4 mt-6">
                        By signing up, you agree to the processing of your personal data to receive communications and emails from the company. Your data will only be used for communication and marketing purposes. You can unsubscribe from these emails at any time. For more information, please check our Privacy Notice.
                    </p>
                </div>
            </div>
        </form>
    )
}

const Close = ({ onClick }: { onClick: () => void }): JSX.Element => (
    <div className="self-end">
        <Clickable onClick={onClick}>
            < CloseIcon />
        </Clickable>
    </div>
)

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { register: UseFormRegister<IFormInput>, name: keyof IFormInput }

const Input = ({ register, name, ...props }: InputProps) => (
    <input {...register(name)} className="mt-4 w-full h-[60px] rounded-[10px] border-2 border-gray1 placeholder-gray2 font-inter font-medium text-black2 pl-4 pr-4" {...props} />
)

const Button = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element => (
    <input type="submit" value="CONFIRM SUBSCRIPTION" className="bg-base-blue3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[5px] font-inter font-semibold" {...props} />
)