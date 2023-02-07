import { useReducer, FocusEvent, useEffect } from "react";

export type tabTwoProps = {
    formik: {},
    handleSubmit : (e?: React.FormEvent<HTMLFormElement> | undefined) => void
    disabledHandler : (e: any) => void,
    handleChange : (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: FocusEvent<any, Element>) => void
    email : string,
    password : string,
    userName: string,
    name: string
    isPasswordTouched: boolean | undefined
    isEmailTouched : boolean | undefined
    isNameTouched : boolean | undefined
    isUserNameTouched : boolean | undefined
    passwordError: string | undefined
    emailError : string | undefined
    nameError:string | undefined
    userNameError: string | undefined
    toggleColor : () => void
    register: (e: any) => void
    nameOnClick : (e: any) => void
    userNameOnClick: (e: any) => void
    passwordOnClick: (e: any) => void
    justifyActive: string
    setJustifyActive : (e: any) => void
}