"use client"
import React from "react"
import { motion } from "framer-motion"
import { KaniButton, KaniImage } from "@/components"
import { Spacer } from "@heroui/react"
import { DiscordLogo, TelegramLogo, TwitterLogo } from "@phosphor-icons/react"
import { useGetEarlyAccessDiscloresure } from "@/hooks"

export const JoinKaniEarlyAccess = () => {
    const { onOpen } = useGetEarlyAccessDiscloresure()
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
            {/* Left text & buttons */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="text-2xl font-bold">
          Join <span className="text-primary">Kani </span>Early Access Now
                </div>
                <Spacer y={8} />
                <div className="text-sm text-foreground-500 max-w-md">
          Be among the first to automate your liquidity with Kani’s smart engine
          powered by precision strategies and intelligent exits.
                </div>
                <Spacer y={12} />
                <motion.div
                    className="flex gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {/* Social buttons with hover motion */}
                    {[TwitterLogo, TelegramLogo, DiscordLogo].map((Icon, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            <KaniButton isIconOnly variant="flat" size="lg">
                                <Icon className="w-5 h-5" />
                            </KaniButton>
                        </motion.div>
                    ))}

                    <motion.div whileHover={{ scale: 1.05 }}>
                        <KaniButton size="lg" color="primary" showArrow onPress={onOpen}>
              Get Early Access
                        </KaniButton>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Crab image (slide in from right + floating motion) */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                animate={{ y: [0, -10, 0] }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <KaniImage
                    src="/assets/kani-early-access.png"
                    alt="kani-early-access"
                    className="w-full max-w-[350px] object-contain"
                />
            </motion.div>
        </motion.div>
    )
}