"use client"
import React from "react"
import { motion } from "framer-motion"
import {
    TwitterLogo,
    TelegramLogo,
    DiscordLogo,
    EnvelopeSimple,
} from "@phosphor-icons/react"
import { KaniLink } from "@/components"
import { Divider, Spacer } from "@heroui/react"
import Image from "next/image"

export const Footer = () => {
    const socials = [
        { icon: TwitterLogo, href: "https://twitter.com/kanibotdotxyz" },
        { icon: TelegramLogo, href: "https://t.me/KaniCLMMBot" },
        { icon: DiscordLogo, href: "https://discord.gg/kanibot" },
        { icon: EnvelopeSimple, href: "mailto:support@kanibot.xyz" },
    ]

    const footerSections = [
        {
            title: "Features",
            links: [
                { label: "Liquidity Automation", href: "#liquidity" },
                { label: "Smart Exit Engine", href: "#exit-engine" },
                { label: "Dynamic Range", href: "#dynamic-range" },
                { label: "Multi-DEX Integration", href: "#integration" },
            ],
        },
        {
            title: "Community",
            links: [
                { label: "Twitter", href: "https://twitter.com/kanibotdotxyz" },
                { label: "Telegram", href: "https://t.me/KaniCLMMBot" },
                { label: "Discord", href: "https://discord.gg/kanibot" },
            ],
        },
        {
            title: "Docs",
            links: [
                { label: "Overview", href: "#docs" },
                { label: "API Reference", href: "#api" },
                { label: "Developers", href: "#developers" },
                { label: "FAQ", href: "#faq" },
            ],
        },
        {
            title: "Contact",
            links: [
                { label: "hello@kani.io", href: "mailto:hello@kani.io" },
                { label: "Partnerships", href: "#partners" },
                { label: "Support", href: "#support" },
            ],
        },
    ]

    return (
        <footer className="mt-20">
            {/* Main Footer */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12"
            >
                {/* Left: Logo */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <div className="flex items-center gap-2 scale-150">
                        <Image
                            src="/assets/logo.svg"
                            alt="KANI"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <div className="text-2xl font-semibold text-primary">KANI</div>
                    </div>
                </div>

                {/* Right: Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    {footerSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-3">
                            <div className="font-semibold text-primary">{section.title}</div>
                            <div className="flex flex-col gap-2 text-foreground-500">
                                {section.links.map((link) => (
                                    <KaniLink
                                        size="sm"
                                        key={link.label}
                                        href={link.href}
                                        color="foreground"
                                        className="transition-colors"
                                    >
                                        {link.label}
                                    </KaniLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <Spacer y={12} />
            <Divider />
            <Spacer y={12} />

            {/* Bottom Row */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col md:flex-row justify-between items-center gap-6 px-6"
            >
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                    <div>
            © {new Date().getFullYear()} Kani Labs — All rights reserved.
                    </div>
                    <KaniLink
                        size="sm"
                        href="#terms-and-conditions"
                        color="foreground"
                        className="transition-colors"
                    >
            Terms and Conditions
                    </KaniLink>
                    <KaniLink
                        size="sm"
                        href="#privacy-policy"
                        color="foreground"
                        className="transition-colors"
                    >
            Privacy Policy
                    </KaniLink>
                </div>

                <div className="flex items-center gap-4">
                    {socials.map(({ icon: Icon, href }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="text-foreground-500 hover:text-primary transition-colors"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <Spacer y={8} />

            {/* Disclaimer (slide up animation) */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-xs text-foreground-500 max-w-5xl mx-auto px-6 leading-relaxed text-justify"
            >
        The information presented on this website is provided on an “as-is” and “non-reliance” basis.
        Kani Labs does not provide any form of financial, investment, or technological advice, and nothing herein should be interpreted as such.
        While we aim to ensure accuracy, all information, data, and projections are provided without warranties of any kind — whether express or implied.
        Any reliance or use of the information provided herein is at the reader’s sole discretion and risk.
        Kani Labs reserves the right to update, modify, or remove any content or information at any time without prior notice, and assumes no obligation to do so, even if such updates become necessary due to new information, subsequent events, or other circumstances.
            </motion.div>
        </footer>
    )
}