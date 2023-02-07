import { MDBBtn, MDBCheckbox, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
import { useReducer, FocusEvent, useEffect } from "react";
import { setEmail } from "../../../assets/useProvider/action";
import { initialState, reducer } from "../../../assets/useProvider/reducer";
import { tabTwoProps } from "../../../models/tabTwoPropsModel";
import { EmailInput } from "../inputs/emailInput";
import { NameInput } from "../inputs/nameInput";
import { PasswordInput } from "../inputs/PasswordInput";
import { UserNameInput } from "../inputs/userNameInput";
import { SocialMediaIcons } from "../icons/SocialMediaIcons";
import { buttonStyle, iconStyle, validationErrorsStyle } from "../styles/style";



export const TabTwo = (props: tabTwoProps) => {

    const [data, dispatch] = useReducer(reducer, initialState);
    const tab2On = "tab2";

    useEffect(() => {
        
    }, [data.justifyActive, data.setJustifyActive]);
    
    return (
            <MDBTabsPane show= {tab2On == 'tab2'}>
                        {/* data.justifyActive == 'tab2' */}
                        <div className="text-center mb-3">
                        <p>Sign in with:</p>

                        <div className='d-flex justify-content-between mx-auto'>
                            <SocialMediaIcons/> 
                        </div>

                        <p className="text-center mt-3">or:</p>
                        </div>

                            <NameInput
                                    disabledHandler= {props.disabledHandler}
                                    formik = {props.formik}
                                    handleChange = {props.handleChange}
                                    handleBlur = {props.handleBlur}
                                    onClick={props.nameOnClick}
                                    name = {props.name}
                            />
                            {props.isNameTouched && props.nameError ? (<div style = {validationErrorsStyle} >{props.nameError}</div>) : null}

                            <UserNameInput
                                    disabledHandler= {props.disabledHandler}
                                    formik = {props.formik}
                                    handleChange = {props.handleChange}
                                    handleBlur = {props.handleBlur}
                                    onClick={props.userNameOnClick}
                                    userName = {props.userName}
                            />
                            {props.isUserNameTouched && props.userNameError ? (<div style = {validationErrorsStyle} >{props.userNameError}</div>) : null}

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
                                onClick={props.passwordOnClick}
                                password = {props.password}
                            /> 
                             
                            {props.isPasswordTouched && props.passwordError
                            ? (
                            <div style = {validationErrorsStyle} >{props.passwordError}</div>
                            ) : 
                            null}

                            <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' style = {iconStyle} />
                        </div>

                        <MDBBtn className="mb-4 w-100 text-light" style= { buttonStyle } onClick = { props.register }>SIGN UP</MDBBtn>

                </MDBTabsPane>
       
    )
}