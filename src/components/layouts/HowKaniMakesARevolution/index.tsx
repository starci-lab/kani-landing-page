"use client"
import React from "react"
import { motion } from "framer-motion"
import { KaniImage, KaniLink } from "@/components"
import { Spacer, cn } from "@heroui/react"

export const HowKaniMakesARevolution = () => {
    const benefits = [
        {
            title: "Maximum Capital Efficiency",
            description:
        "Deploy liquidity across multiple protocols simultaneously — Kani seamlessly integrates with Raydium, Orca and more to maximize your capital efficiency.",
            image: "/assets/kani-capital-efficiency.png",
        },
        {
            title: "Smart Protection",
            description:
        "Never get caught off-range again — Kani monitors Pyth and CEX order books in real time to anticipate volatility and exit before market dumps.",
            image: "/assets/kani-protection.png",
        },
        {
            title: "Maximum Leverage",
            description:
        "Go thinner, earn harder — Kani's dynamic precision ranges amplify APRs up to x4000 through continuous optimization and auto-compounding.",
            image: "/assets/kani-leverage.png",
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center justify-center"
        >
            {/* Section title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-center"
            >
        How <span className="text-primary">Kani</span> Makes a Revolution
            </motion.div>

            <Spacer y={24} />

            <div className="flex flex-col items-start gap-16">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -100 : 100, // slide from left/right
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: index * 0.2,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={cn(
                            "w-full flex justify-between items-center",
                            index % 2 === 1 ? "flex-row-reverse" : "flex-row"
                        )}
                    >
                        {/* Text content */}
                        <div
                            className={cn(
                                "p-6 rounded-xl from-secondary/10 to-transparent max-w-[60%] flex flex-col justify-between transition-all h-[250px]",
                                index % 2 === 1
                                    ? "bg-gradient-to-l text-right"
                                    : "bg-gradient-to-r text-left"
                            )}
                        >
                            <div className="text-lg font-bold text-secondary">
                                {benefit.title}
                            </div>
                            <div>
                                <div className="text-sm text-foreground-500">
                                    {benefit.description}
                                </div>
                                <Spacer y={4} />
                                <KaniLink
                                    color="secondary"
                                    size="sm"
                                    showAnchorIcon
                                    href={`/benefits/${benefit.title}`}
                                >
                Learn More
                                </KaniLink>
                            </div>
                        </div>

                        {/* Image */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <KaniImage
                                src={benefit.image}
                                alt={benefit.title}
                                className="max-w-[250px] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}