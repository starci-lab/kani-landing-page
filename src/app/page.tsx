"use client"
import React from "react"
import { Hero, CurrentSolution, HowKaniMakesARevolution, PrivateTestTraction, JoinKaniEarlyAccess, Footer } from "@/components"
import { Spacer } from "@heroui/react"

const Page = () => {
    return (
        <div className="p-6 max-w-[1024px] mx-auto">
            <Hero />
            <Spacer y={24} />
            <CurrentSolution />
            <Spacer y={24} />
            <HowKaniMakesARevolution />
            <Spacer y={24} />
            <PrivateTestTraction />
            <Spacer y={24} />
            <JoinKaniEarlyAccess />
            <Spacer y={24} />
            <Footer />
        </div>
    )
}

export default Page