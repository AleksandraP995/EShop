import { MDBInput } from "mdb-react-ui-kit"
import { UserNameInputProps } from "../../../models/inputProps"

export const UserNameInput = (props: UserNameInputProps) => {
    return (
        <MDBInput wrapperClass='mb-4' name = 'userName' label='Username' id='form1' type='text'
                onKeyUp= {props.disabledHandler}
                onChange={props.handleChange}
                onBlur = {props.handleBlur}
                value =  {props.userName}
                onClick={props.onClick}
        />
    )
}