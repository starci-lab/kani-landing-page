import { useFormik } from "formik"
import * as Yup from "yup"
import { useGetEarlyAccessDiscloresure } from "../discloresures"
import { addToast } from "@heroui/toast"

// Form values type — only one field for the 6-digit OTP code
export interface GetEarlyAccessFormikValues {
  email: string;
  discordId: string;
  telegramId: string;
}

// Validation schema for the OTP form
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    discordId: Yup.string().trim().max(50, "Discord ID too long").optional(),

    telegramId: Yup.string().trim().max(50, "Telegram ID too long").optional(),
})

const initialValues: GetEarlyAccessFormikValues = {
    email: "",
    discordId: "",
    telegramId: "",
}

// Core hook — creates the Formik instance for the TOTP form
export const useGetEarlyAccessFormikCore = () => {
    const { onClose } = useGetEarlyAccessDiscloresure()
    return useFormik<GetEarlyAccessFormikValues>({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {   
                const formData = new URLSearchParams()
                formData.append("email", values.email)
                formData.append("discordId", values.discordId)
                formData.append("telegramId", values.telegramId)

                await fetch("https://script.google.com/macros/s/AKfycbzOe10oqObexdao0bZpS1o_7S70YNC0mvdloHU7UCH7CE_cN8arvGeyEsqQIoFDZGKH0Q/exec", {
                    method: "POST",
                    body: formData, // KHÔNG dùng headers JSON
                })

                addToast({
                    title: "Submitted successfully",
                    description:
            "Thank you for your interest in Kani. We will get back to you soon.",
                    color: "success",
                })
            } catch (error) {
                console.error(error)
                addToast({
                    title: "Submission error",
                    description: "Please try again.",
                    color: "danger",
                })
            } finally {
                // reset the whole form
                resetForm()
                // close the form
                onClose()
            }
        },
    })
}

// Context hook — retrieves the Formik instance from the FormikProvider
export const useGetEarlyAccessFormik = () => {
    const formik = useGetEarlyAccessFormikCore()
    return formik
}
