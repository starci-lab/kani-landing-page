
import { Button, ButtonProps } from "@heroui/react"
import React from "react"
import { ArrowRightIcon } from "@phosphor-icons/react"
export interface KaniButtonProps extends ButtonProps {
    showArrow?: boolean
}
export const KaniButton = (props: KaniButtonProps) => {
    return (
        <Button {...props} endContent={props.showArrow ? <ArrowRightIcon /> : null} />
    )
}