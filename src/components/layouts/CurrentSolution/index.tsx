"use client"
import React from "react"
import { Spacer } from "@heroui/react"
import { motion } from "framer-motion"
import {
    KaniCardHeader,
    KaniCard,
    KaniImage,
    KaniCardBody,
    KaniCardFooter,
    KaniLink,
} from "@/components"

export const CurrentSolution = () => {
    const limitations = [
        {
            title: "Single-pool limitation",
            description:
        "Capital often remains trapped within a single liquidity pool, unable to migrate when yield opportunities shift across markets.",
        },
        {
            title: "Static strategy",
            description:
        "Most CLMM strategies rely on fixed ranges or manual rebalancing, which quickly become outdated as market volatility changes.",
        },
        {
            title: "Impermanent loss persists",
            description:
        "Traditional liquidity positions lack dynamic hedging or smart exit logic, leaving LPs vulnerable when token prices diverge.",
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center justify-center"
        >
            <div className="text-2xl font-bold text-center">
                <span>Current Liquidity Rebalancing Solutions: Still </span>
                <span className="text-primary">Inefficient</span>
            </div>

            <Spacer y={6} />

            <div>
                <KaniImage
                    src="/assets/kani-cry.png"
                    alt="kani-cry"
                    className="max-w-[500px] object-cover"
                />
            </div>

            <Spacer y={6} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {limitations.map((limitation) => (
                    <KaniCard key={limitation.title}>
                        <KaniCardHeader className="text-lg font-bold text-secondary">
                            {limitation.title}
                        </KaniCardHeader>
                        <KaniCardBody className="text-sm text-foreground-500">
                            {limitation.description}
                        </KaniCardBody>
                        <KaniCardFooter>
                            <KaniLink
                                color="secondary"
                                size="sm"
                                showAnchorIcon
                                href={`/limitations/${limitation.title}`}
                            >
                Learn More
                            </KaniLink>
                        </KaniCardFooter>
                    </KaniCard>
                ))}
            </div>
        </motion.div>
    )
}