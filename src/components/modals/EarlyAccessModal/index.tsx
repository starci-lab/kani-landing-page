import React from "react"
import { KaniModal, KaniModalContent, KaniModalHeader, KaniModalBody, KaniInput, KaniImage, KaniLink } from "../../atomic"
import { useGetEarlyAccessDiscloresure } from "@/hooks"
import { useGetEarlyAccessFormik } from "@/hooks"
import { Divider, Spacer } from "@heroui/react"
import { KaniButton } from "../../atomic"

export const EarlyAccessModal = () => {
    const { isOpen, onClose } = useGetEarlyAccessDiscloresure()
    const formik = useGetEarlyAccessFormik()
    return (
        <KaniModal isOpen={isOpen} onClose={onClose} size="2xl">
            <KaniModalContent>
                <KaniModalHeader>Launch App</KaniModalHeader>
                <KaniModalBody>
                    <div className="flex items-stretch gap-4">
                        <div className="flex flex-col flex-1 items-center justify-center">
                            <KaniInput
                                label="Email"
                                value={formik.values.email}
                                onValueChange={(value) => {
                                    formik.setFieldValue("email", value)
                                }}
                                isRequired
                                labelPlacement="outside-top"
                                errorMessage={formik.errors.email}
                                isInvalid={!!(formik.errors.email && formik.touched.email)}
                                onBlur={() => {
                                    formik.setFieldTouched("email", true)
                                }}
                            />
                            <Spacer y={4} />
                            <KaniInput
                                label="Discord ID"
                                value={formik.values.discordId}
                                onValueChange={(value) => {
                                    formik.setFieldValue("discordId", value)
                                }}
                                labelPlacement="outside-top"
                            />
                            <Spacer y={4} />
                            <KaniInput
                                label="Telegram ID"
                                value={formik.values.telegramId}
                                onValueChange={(value) => {
                                    formik.setFieldValue("telegramId", value)
                                }}
                                labelPlacement="outside-top"
                            />
                            <Spacer y={4} />
                            <div className="text-sm text-foreground-500">By submitting this form, you agree to our <KaniLink color="primary" size="sm" href="#">Terms of Service</KaniLink> and <KaniLink color="primary" size="sm" href="#">Privacy Policy</KaniLink></div>
                            <Spacer y={4} />
                            <KaniButton fullWidth color="primary" size="lg" isLoading={formik.isSubmitting} onPress={() => {
                                formik.handleSubmit()
                            }}>Submit</KaniButton>
                        </div>
                        <div>
                            <Divider orientation="vertical" />
                        </div>
                        <div className="flex-1 w-full grid place-items-center">
                            <KaniImage 
                                src="/assets/kani-register.png"
                                alt="kani-register"
                                className="w-fit object-contain"
                            />
                        </div>
                    </div>
                </KaniModalBody>
            </KaniModalContent>
        </KaniModal>
    )
}