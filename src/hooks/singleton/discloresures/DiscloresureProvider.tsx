
"use client"
import React, { PropsWithChildren } from "react"
import { createContext } from "react"
import { useGetEarlyAccessDiscloresureCore } from "./useGetEarlyAccessDiscloresure"

export interface DiscloresureContextType {
    getEarlyAccessModal: ReturnType<typeof useGetEarlyAccessDiscloresureCore>
}

export const DiscloresureContext = createContext<DiscloresureContextType | null>(null)

export const DiscloresureProvider = ({ children }: PropsWithChildren) => {
    const getEarlyAccessModal = useGetEarlyAccessDiscloresureCore()
    return (
        <DiscloresureContext.Provider value={{ 
            getEarlyAccessModal
        }}>
            {children}
        </DiscloresureContext.Provider>
    )
}
