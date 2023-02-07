import { MDBInput } from "mdb-react-ui-kit";
import { nameInputProps } from "../../../models/inputProps";

export const NameInput = (props: nameInputProps) => {
    return (
        <MDBInput wrapperClass='mb-4' name = 'name' label='Name' id='form1' type='text'
        onKeyUp= {props.disabledHandler}
        onChange={props.handleChange}
        onBlur = {props.handleBlur}
        value =  {props.name}
        onClick={props.onClick}
/>
    )
}