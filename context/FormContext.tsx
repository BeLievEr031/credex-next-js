"use client";

import { createContext, useState, useContext, type SetStateAction, type ReactNode, type Dispatch } from 'react';

// Define the type for the context value
interface BooleanContextType {
    myBoolean: boolean;
    setMyBoolean: Dispatch<SetStateAction<boolean>>;
    children: ReactNode
}

// Create the context. We must define the type and set a nullable default value.
const BooleanContext = createContext<BooleanContextType | undefined>(undefined);


// Define props for the provider component, requiring children
interface BooleanProviderProps {
    children: ReactNode;
}

export const BooleanProvider = ({ children }: BooleanProviderProps) => {
    const [myBoolean, setMyBoolean] = useState<boolean>(false);

    // Provide the state and its setter function
    const value: BooleanContextType = {
        myBoolean, setMyBoolean,
        children: undefined
    };

    return (
        <BooleanContext.Provider value={value}>
            {children}
        </BooleanContext.Provider>
    );
};


export const useBoolean = () => {
    const context = useContext(BooleanContext);
    if (context === undefined) {
        throw new Error('useBoolean must be used within a BooleanProvider');
    }
    return context;
};
