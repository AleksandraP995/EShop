import { MDBInput } from "mdb-react-ui-kit"
import { ChangeEvent, FocusEvent} from "react";
import { PasswordInputProps } from "../../../models/inputProps";



export const PasswordInput = (props: PasswordInputProps) => {
    return (
        <MDBInput wrapperClass='mb-4' name = 'password' label='Password' id='form1' type='password'
            onKeyUp= {props.disabledHandler}
            onChange={props.handleChange}
            onBlur = {props.handleBlur}
            onClick = {props.onClick}
            value =  {props.password}
        />
    )
}