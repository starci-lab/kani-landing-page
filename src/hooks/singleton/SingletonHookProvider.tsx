
"use client"
import React, { PropsWithChildren } from "react"
import { DiscloresureProvider } from "./discloresures"
import { FormikProvider } from "./formiks"

export const SingletonHookProvider = ({ children }: PropsWithChildren) => {
    return (
        <DiscloresureProvider>
            <FormikProvider>
                {children}
            </FormikProvider>
        </DiscloresureProvider>
    )
}   
