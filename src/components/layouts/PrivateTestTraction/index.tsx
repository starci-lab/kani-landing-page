"use client"
import { KaniImage } from "@/components"
import { Spacer } from "@heroui/react"
import { TrophyIcon } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import React from "react"

export const PrivateTestTraction = () => {
    const tractions: Array<{ key: string; value: React.ReactNode }> = [
        {
            key: "apr",
            value: (
                <div>
                    <span className="text-primary font-bold">320%</span> APR secured across private test pools
                </div>
            ),
        },
        {
            key: "dumps",
            value: (
                <div>
                    <span className="text-primary font-bold">20</span> dumps detected & auto-exited before losses
                </div>
            ),
        },
        {
            key: "liquidity",
            value: (
                <div>
                    <span className="text-primary font-bold">$40k</span> simulated liquidity managed
                </div>
            ),
        },
        {
            key: "dexs",
            value: (
                <div>
                    <span className="text-primary font-bold">3</span> DEXs integrated: Raydium, Orca, Meteora
                </div>
            ),
        },
        {
            key: "users",
            value: (
                <div>
                    <span className="text-primary font-bold">10</span> early users testing full automation
                </div>
            ),
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="text-2xl font-bold text-center">
                <span className="text-primary">Kani </span>
          Private Test Traction
            </div>
            <Spacer y={12} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                {/* Crab image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <KaniImage
                        src="/assets/kani-trophy.png"
                        alt="kani-trophy"
                        className="w-full max-w-[300px] object-contain mx-auto"
                    />
                </motion.div>

                {/* Text section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="col-span-2"
                >
                

                    <Spacer y={12} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tractions.map((traction, index) => (
                            <motion.div
                                key={traction.key}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    <TrophyIcon className="text-primary w-8 h-8 min-w-8 min-h-8" />
                                </motion.div>
                                {traction.value}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}