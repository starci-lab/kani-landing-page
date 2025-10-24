"use client"
import { 
    KaniButton, 
    KaniNavbar, 
    KaniNavbarBrand, 
    KaniNavbarContent, 
    KaniNavbarItem
} from "../../atomic"
import { Link } from "@heroui/react"
import React from "react"
import Image from "next/image"
import { SwitchThemeButton } from "./SwitchThemeButton"
import { useGetEarlyAccessDiscloresure } from "@/hooks"

export const Navbar = () => {
    const { onOpen } = useGetEarlyAccessDiscloresure()
    return (
        <KaniNavbar classNames={{
            wrapper: "max-w-full",
        }}>
            <KaniNavbarBrand>
                <div className="flex items-center gap-1">
                    <Image src="/assets/logo.svg" alt="KANI" width={40} height={40} />
                    <div className="text-2xl font-semibold text-primary">KANI</div>
                </div>
            </KaniNavbarBrand>
            <KaniNavbarContent className="hidden sm:flex gap-4" justify="center">
                <KaniNavbarItem>
                    <Link color="foreground" href="#">
            Features
                    </Link>
                </KaniNavbarItem>
                <KaniNavbarItem isActive>
                    <Link aria-current="page" href="#">
            Customers
                    </Link>
                </KaniNavbarItem>
                <KaniNavbarItem>
                    <Link color="foreground" href="#">
            Integrations
                    </Link>
                </KaniNavbarItem>
            </KaniNavbarContent>
            <KaniNavbarContent justify="end">
                <KaniNavbarItem>
                    <SwitchThemeButton />
                </KaniNavbarItem>
                <KaniNavbarItem className="hidden lg:flex">
                    <KaniButton color="primary" showArrow onPress={onOpen}>
              Get Early Access
                    </KaniButton>
                </KaniNavbarItem>
                <KaniNavbarItem>    
                </KaniNavbarItem>
            </KaniNavbarContent>
        </KaniNavbar>
    )
}
