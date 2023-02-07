import { useEffect, useReducer, useState } from "react";
import {
    MDBContainer,
    MDBTabsContent
  }
  from 'mdb-react-ui-kit';
import useFormikHandler from "./validation/Formik"; 
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./styles/style.css"
import { Tabs } from "./tabs/Tabs";
import { useGlobalContext } from "../../assets/useContext/NewContext";
import { initialState, reducer } from "../../assets/useProvider/reducer";
import { setPassword, setJustifyActive, setIsActive, setIsRembered,
    setIsDisabled } from "../../assets/useProvider/action";
import { TabOne } from "./tabs/tab1";
import { TabTwo } from "./tabs/tab2";


export const LoginPage =  (): JSX.Element => { 
    
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/")
    }

    const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
    const { userName, setUserName }  = useGlobalContext();

    const [data, dispatch] = useReducer(reducer, initialState);
    const [name, setName ] = useState("");
    const formik = useFormikHandler(); 

    const handleJustifyClick = (value: any) => {

      if (value === data.justifyActive) {
        return;
      }
      setJustifyActive(dispatch, value);
      setIsActive(dispatch, !data.isActive);
    };
  
    const signIn = (e: any) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(data.email.trim(), data.password)
        .then((auth: any) => {
            setIsLoggedIn(true);
            setUserName(userName);
            navigateTo()
        })
        .catch((error: any) => alert(error))
    }

    const register = (e: any) => {
        e.preventDefault();
        console.log(data.email.trim(), data.password);
        auth
        .createUserWithEmailAndPassword(data.email.trim(), data.password)
        .then((auth: any) => {
            setIsLoggedIn(true);
            setUserName(userName);
            navigateTo()
        })
        .catch((error: any) => alert(error))
    }

    const toggleColor = () => {
        setIsRembered(dispatch, !data.isRemembered);
    }

    const disabledHandler = (e: any) =>  {
    
        if( !formik.errors && e.target.value.trim().length < 1) { 
            setIsDisabled(dispatch, true)
        } else {
            setIsDisabled(dispatch, false)
        }
    }

    const setPasswordMethod = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>  {
        setPassword(dispatch, e.currentTarget.value)
    }

      
    useEffect(() => {
        
    }, [userName, data.password, data.email, data.justifyActive]);

    return(
        <div>
        <div className="col-4"></div>
        <div className="panel">
            <MDBContainer className="col-4 p-3 my-5 d-flex flex-column w-30">
                <Tabs 
                    handleJustifyClick = {handleJustifyClick}
                    isActive = {data.isActive}
                    justifyActive = {data.justifyActive}
                />
                <MDBTabsContent>
                    {
                        data.justifyActive == "tab1"
                    
                    ?
                    (<TabOne
                        formik = {formik}
                        handleSubmit = {formik.handleSubmit}
                        disabledHandler = {disabledHandler}
                        handleChange = {formik.handleChange}
                        handleBlur = {formik.handleBlur}
                        email = {formik.values.email}
                        password = {formik.values.password}
                        isPasswordTouched = {formik.touched.password}
                        isEmailTouched = {formik.touched.email}
                        passwordError = {formik.errors.email}
                        emailError = {formik.errors.email}
                        toggleColor = {toggleColor}
                        signIn = {signIn}
                    />)
                    : (
                    <TabTwo
                        formik = {formik} 
                        handleSubmit = {formik.handleSubmit}
                        disabledHandler = {disabledHandler}
                        handleChange = {formik.handleChange}
                        handleBlur = {formik.handleBlur}
                        email = {formik.values.email}
                        password = {formik.values.password}
                        name = {formik.values.name}
                        userName = {userName}
                        isPasswordTouched = {formik.touched.password}
                        isEmailTouched = {formik.touched.email}
                        passwordError = {formik.errors.email}
                        emailError = {formik.errors.email}
                        toggleColor = {toggleColor}
                        register = {register}
                        isNameTouched = {formik.touched.name}
                        isUserNameTouched ={formik.touched.userName}
                        nameError = {formik.errors.name}
                        userNameError = {formik.errors.userName}
                        nameOnClick = {(e: any) => setName(e.currentTarget.value)}
                        userNameOnClick = {(e: any) => setUserName(e.currentTarget.value)}
                        passwordOnClick = {(e) => setPassword(dispatch, e.currentTarget.value)}
                        justifyActive = {data.justifyActive}
                        setJustifyActive = {data.setJustifyActive}
                    />
                    )}
                </MDBTabsContent>
            </MDBContainer>
                   
        </div>
        <div className="col-4"></div>
        </div>
          
        )
}
    