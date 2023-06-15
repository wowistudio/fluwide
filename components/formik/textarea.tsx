import { Field } from "formik"
import { Textarea, TextareaProps } from "../ui/textarea"
import React from "react"

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (<Field component={Textarea} {...props} ref={ref} />)
    }
)
Textarea.displayName = "TextArea"

export { TextArea }