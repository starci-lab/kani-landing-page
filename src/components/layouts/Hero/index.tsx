"use client"
import { Spacer } from "@heroui/react"
import { motion } from "framer-motion"
import React from "react"
import { KaniButton, KaniImage } from "@/components"
import { useGetEarlyAccessDiscloresure } from "@/hooks"

export const Hero = () => {
    const { onOpen } = useGetEarlyAccessDiscloresure()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
            {/* Left text block */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }} // trigger khi 40% phần tử vào view
                className="flex flex-col items-center justify-center"
            >
                <motion.h1
                    className="text-4xl font-bold 
            bg-gradient-to-r from-secondary via-primary to-secondary 
            bg-[length:200%_200%] bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                >
          Next-Gen Automation for DeFi Liquidity
                </motion.h1>
                <Spacer y={4} />
                <div className="text-foreground-500 text-center md:text-left">
          Kani is an automated liquidity bot that amplifies your capital with maximum leverage
          through ultra-thin ranges and a smart exit engine blending order-book and oracle/CEX
          insights for maximum yield.
                </div>
                <Spacer y={4} />
                <div className="flex gap-2 w-full">
                    <KaniButton variant="flat" size="lg">Join Community</KaniButton>
                    <KaniButton color="primary" showArrow size="lg" onPress={onOpen}>Get Early Access</KaniButton>
                </div>
            </motion.div>

            {/* Right crab image */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2,
                }}
                viewport={{ once: true, amount: 0.4 }}
                className="will-change-transform transform-gpu inline-block"
            >
                <KaniImage
                    src="/assets/kani-hero.png"
                    alt="kani-hero"
                    className="w-full object-cover"
                />
            </motion.div>
        </div>
    )
}