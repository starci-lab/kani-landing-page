
"use client"
import React, { Suspense } from "react"
import {ToastProvider} from "@heroui/toast"
import { HeroUIProvider } from "@/components"
import { ReduxProvider } from "@/redux"


export const InnerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense>
            <HeroUIProvider> 
                <ReduxProvider>
                    {children}
                    <ToastProvider />
                </ReduxProvider>
            </HeroUIProvider>
        </Suspense>
    )
}
