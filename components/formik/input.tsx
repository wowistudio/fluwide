import React from "react"
import { Input as InputBase, InputProps } from "../ui/input"
import { Field } from "formik"

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return <Field component={InputBase} {...props} ref={ref} />
    }
)

Input.displayName = "Input"

export { Input }