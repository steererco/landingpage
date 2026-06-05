import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
    isOpen: boolean;
    changeIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultModalContext: ModalContextType = {
    isOpen: false,
    changeIsOpen: () => { },
}

export const ModalContext = createContext<ModalContextType>(defaultModalContext)

export const ModalProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const changeIsOpen = () => setIsModalOpen(!isModalOpen);

    const contextValue: ModalContextType = {
        isOpen: isModalOpen,
        changeIsOpen: changeIsOpen
    }

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    )
};
