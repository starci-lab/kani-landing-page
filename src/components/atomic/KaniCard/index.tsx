import React, { HTMLAttributes } from "react"
import { Card, CardBody, CardFooter, CardHeader, CardProps, CardFooterProps } from "@heroui/react"
export const KaniCard = (props: CardProps) => {
    return <Card {...props}/>
}
export const KaniCardBody = (props: HTMLAttributes<HTMLDivElement>) => {
    return <CardBody {...props} />
}
export const KaniCardFooter = (props: CardFooterProps) => {
    return <CardFooter {...props} />
}
export const KaniCardHeader = (props: HTMLAttributes<HTMLDivElement>) => {
    return <CardHeader {...props} />
}