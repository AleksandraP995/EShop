import { ChangeEvent,  FocusEvent } from "react"

export type inputProps = {
    disabledHandler : (e: any) => void,
    formik: {}
    handleChange: (e: ChangeEvent<any>) => void
    handleBlur: (e: FocusEvent<any, Element>) => void
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

export interface PasswordInputProps extends inputProps  {
    password: string
}

export interface EmailInputProps extends inputProps  {
    email: string
}

export interface UserNameInputProps extends inputProps  {
    userName: string
}

export interface nameInputProps extends inputProps  {
    name: string
}

