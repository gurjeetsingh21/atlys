import { ChangeEventHandler, ReactElement } from "react"

interface FormSelectorProps {
    selector?: string,
    type: string,
    value?: string | readonly string[] | number | undefined,
    label: string | ReactElement
    onChange?: ChangeEventHandler<HTMLInputElement>,
    placeholder: string
    name: string,
    endEndorement?: ReactElement
}

export default FormSelectorProps