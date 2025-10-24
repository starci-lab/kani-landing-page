"use client"
import React, { Suspense } from "react"
import {ToastProvider} from "@heroui/toast"
import { HeroUIProvider, Modals } from "@/components"
import { ReduxProvider } from "@/redux"
import { Navbar, NextThemesProvider } from "@/components"
import { IconContext } from "@phosphor-icons/react"
import { SingletonHookProvider } from "@/hooks"

export const InnerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense>
            <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="kani-theme">
                <HeroUIProvider> 
                    <IconContext.Provider value={{ size: 20 }}>
                        <ReduxProvider>
                            <SingletonHookProvider>
                                <Navbar />
                                {children}
                                <ToastProvider />
                                <Modals />
                            </SingletonHookProvider>
                        </ReduxProvider>
                    </IconContext.Provider>
                </HeroUIProvider>
            </NextThemesProvider>
        </Suspense>
    )
}
