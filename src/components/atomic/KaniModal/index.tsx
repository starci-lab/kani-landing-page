import React from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalProps, ModalContentProps, ModalHeaderProps, ModalFooterProps, ModalBodyProps, cn } from "@heroui/react"
export const KaniModal = (props: ModalProps) => {
    return <Modal {...props} />
}

export const KaniModalContent = (props: ModalContentProps) => {
    return <ModalContent {...props} />
}

export const KaniModalHeader = (props: ModalHeaderProps) => {
    return <ModalHeader {...props} />
}

export const KaniModalBody = (props: ModalBodyProps) => {
    return <ModalBody {...props} className={cn("py-4", props.className)} />
}

export const KaniModalFooter = (props: ModalFooterProps) => {   
    return <ModalFooter {...props} />
}