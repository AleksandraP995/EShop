import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit";
import { TabsProps } from "../../../models/TabsProps";
import { darkBrown, lightBrown } from "../styles/style";

export const Tabs = (props : TabsProps) => {
    
    console.log(props.isActive);
    console.log(props.justifyActive);
    return (
        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
                <MDBTabsLink 
                    className="login"
                    onClick={() => props.handleJustifyClick('tab1')} 
                    active={props.justifyActive === 'tab1' }
                    style = {{  backgroundColor : props.isActive ? lightBrown : darkBrown, 
                                color: props.isActive ? darkBrown : lightBrown,
                                maxWidth: "90%",
                                paddingLeft: "5.5em"
                            }}
                >
                    LOGIN
                </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
                <MDBTabsLink
                    className="register" 
                    onClick={() => props.handleJustifyClick('tab2')} 
                    active={props.justifyActive === 'tab2'} 
                    style = {{  backgroundColor : props.isActive ? darkBrown : lightBrown,
                                color: props.isActive ? lightBrown : darkBrown, 
                                maxWidth: "100%",
                                paddingLeft: "3.5em",
                                paddingRight: "3.5em"
                            }}
                >
                    REGISTER
                </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>
    )
}