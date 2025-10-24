import { useDisclosure } from "@heroui/react"
import { useContext } from "react"
import { DiscloresureContext } from "./DiscloresureProvider"

export const useGetEarlyAccessDiscloresureCore = () => useDisclosure()

export const useGetEarlyAccessDiscloresure = () => {
    const { getEarlyAccessModal } = useContext(DiscloresureContext)!
    return getEarlyAccessModal
}