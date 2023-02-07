import { MDBInput } from "mdb-react-ui-kit";
import { EmailInputProps } from "../../../models/inputProps";

export const EmailInput = (props: EmailInputProps) => {
    return (
        <MDBInput wrapperClass='mb-4' name = 'email' label='Email' id='form1' type='email'
            onKeyUp= {props.disabledHandler}
            onChange={props.handleChange}
            onBlur = {props.handleBlur}
            value =  {props.email}
            onClick={props.onClick}
    />
    )
}