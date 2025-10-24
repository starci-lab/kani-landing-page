"use client"
import React from "react"
import {
    ScrollContainer,
    ScrollPage,
    Animator,
    Fade,
    MoveOut,
    batch
} from "react-scroll-motion"
import { motion } from "framer-motion"
import { ArrowUpIcon } from "@phosphor-icons/react"

export const ScrollToTopMotion = () => {
    return (
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), MoveOut(0, -100))}>
                    <section className="min-h-screen grid place-items-center text-4xl font-bold text-primary">
            Welcome to Kani
                    </section>
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator animation={batch(Fade(), MoveOut(0, -100))}>
                    <section className="min-h-screen grid place-items-center text-secondary text-3xl">
            Keep Scrolling
                    </section>
                </Animator>
            </ScrollPage>

            {/* Floating button appears when scroll passes first page */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="fixed bottom-6 left-6 bg-primary text-white rounded-full p-3 shadow-lg"
            >
                <ArrowUpIcon size={24} />
            </motion.button>
        </ScrollContainer>
    )
}