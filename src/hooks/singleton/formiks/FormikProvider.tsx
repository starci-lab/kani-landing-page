
"use client"
import React, { PropsWithChildren } from "react"
import { createContext } from "react"
import { useGetEarlyAccessFormikCore } from "./useGetEarlyAccessFormik"

export interface FormikContextType {
    getEarlyAccessFormik: ReturnType<typeof useGetEarlyAccessFormikCore>
}

export const FormikContext = createContext<FormikContextType | null>(null)

export const FormikProvider = ({ children }: PropsWithChildren) => {
    const getEarlyAccessFormik = useGetEarlyAccessFormikCore()
    return (
        <FormikContext.Provider value={{ 
            getEarlyAccessFormik
        }}>
            {children}
        </FormikContext.Provider>
    )
}
