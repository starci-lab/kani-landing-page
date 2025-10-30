import React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { InnerLayout } from "./InnerLayout"

const font = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})
export const metadata: Metadata = {
    title: "Kani",
    description: "Kani is an automated liquidity bot that amplifies your capital with maximum leverage through ultra-thin ranges and a smart exit engine blending order-book and oracle/CEX insights for maximum yield.",
}

const RootLayout = ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body
                className={`${font.className} antialiased`}
            >
                <InnerLayout>{children}</InnerLayout>
            </body>
        </html>
    )
}

export default RootLayout
