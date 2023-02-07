import { MDBBtn } from "mdb-react-ui-kit"
import { TiSocialFacebook, TiSocialLinkedin, TiSocialSkype, TiSocialTwitter } from "react-icons/ti"
import { iconSize, iconStyle } from "../styles/style"

export const SocialMediaIcons = () => {
    return (
        <div style={{ marginLeft: "12em", width: '40%'}}>
            <MDBBtn tag='a' color='none'>  
                <TiSocialFacebook size= {iconSize} style = {iconStyle}/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1'>
                <TiSocialTwitter size= {iconSize} style = {iconStyle}/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1'>
                <TiSocialLinkedin size= {iconSize} style = {iconStyle}/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1'>
                <TiSocialSkype size= {iconSize} style = {iconStyle}/>
            </MDBBtn>
        </div>
    )
}