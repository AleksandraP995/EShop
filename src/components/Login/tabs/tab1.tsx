import { MDBBtn, MDBCheckbox, MDBTabsPane } from "mdb-react-ui-kit"
import { useReducer, FocusEvent } from "react";
import { initialState, reducer } from "../../../assets/useProvider/reducer";
import { EmailInput } from "../inputs/emailInput";
import { PasswordInput } from "../inputs/PasswordInput";
import { SocialMediaIcons } from "../icons/SocialMediaIcons"
import { buttonStyle, darkBrown, iconStyle, lightBrown, validationErrorsStyle } from "../styles/style"
import { setPassword, setEmail, setJustifyActive, setIsActive, setIsRembered,
    setIsDisabled } from "../../../assets/useProvider/action";

export type tabOneProps = {
    formik: {},
    handleSubmit : (e?: React.FormEvent<HTMLFormElement> | undefined) => void
    disabledHandler : (e: any) => void,
    handleChange : (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: FocusEvent<any, Element>) => void
    email : string,
    password : string,
    isPasswordTouched: boolean | undefined
    isEmailTouched : boolean | undefined
    passwordError: string | undefined
    emailError : string | undefined
    toggleColor : () => void
    signIn: (e: any) => void
}
export const TabOne = (props: tabOneProps) => {
    
    const [data, dispatch] = useReducer(reducer, initialState);
    console.log(data.justifyActive);
    return (
                    <MDBTabsPane show={data.justifyActive === 'tab1'}>

                        <div className="text-center mb-3">
                            <p>Sign in with:</p>

                            <div className='d-flex justify-content-between mx-auto' >
                                <SocialMediaIcons/>
                            </div>

                            <p className="text-center mt-3">or:</p>
                        </div>

                        <form onSubmit={props.handleSubmit}>
                            <EmailInput
                                disabledHandler = {props.disabledHandler}
                                formik = {props.formik}
                                handleChange = {props.handleChange}
                                handleBlur = {props.handleBlur}
                                onClick={(e) => setEmail(dispatch, e.currentTarget.value)}
                                email = {props.email}
                                
                            />
                            {props.isEmailTouched && props.emailError ? (<div style = {validationErrorsStyle} >{props.emailError}</div>) : null}

                            <PasswordInput
                                disabledHandler = {props.disabledHandler}
                                formik = {props.formik}
                                handleChange = {props.handleChange}
                                handleBlur = {props.handleBlur}
                                //onClick = {e => setPasswordMethod(e)}
                                onClick={(e) => setPassword(dispatch, e.currentTarget.value)}
                                password = {props.password}
                            /> 
                            
                            {props.isPasswordTouched && props.passwordError
                            ? (
                            <div style = {validationErrorsStyle} >{props.passwordError}</div>
                            ) : 
                            null}

                        </form>

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' 
                            onClick = {props.toggleColor}
                            style = {{ backgroundColor : data.isRemembered ? darkBrown : lightBrown }}
                            />
                            <a href="!#" style = {iconStyle}>Forgot password?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100" style= { buttonStyle } onClick = {props.signIn} disabled={data.isDisabled} >SIGN IN</MDBBtn>  
                        
                        <p className="text-center">Not a member? <a href="#!" style = {iconStyle}>Register</a></p>

                    </MDBTabsPane>

    )
}