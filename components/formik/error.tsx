import { ErrorMessage as ErrorMessageBase, ErrorMessageProps } from "formik"

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
    return <ErrorMessageBase {...props}>
        {msg => <p className="text-destructive mt-2 text-sm">{msg}</p>}
    </ErrorMessageBase>
}

export { ErrorMessage }