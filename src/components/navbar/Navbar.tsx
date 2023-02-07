import {useContext, useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Navbar.css";
import Link from '@mui/joy/Link';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { useGlobalContext } from "../../assets/useContext/NewContext";
import { useNavigate } from "react-router-dom";

export function NavbarComponent(): JSX.Element  {

  const { isLoggedIn, setIsLoggedIn} = useGlobalContext();
  const { userName, setUserName} = useGlobalContext();

  const navigate = useNavigate(); 

  const navigateTo = () => {
    navigate("/basket");
  }
  const navigateToLogIn = () => {
    navigate("/login");
  }
  const { basket, setBasket } = useGlobalContext();

  console.log(isLoggedIn);
  console.log(userName);

    return (
        <div>
        <Navbar variant="light" fixed="top" sticky="top" expand="lg" className = "navBar" id = "navTabCont">

          <Container className = "navBar">
            <Navbar.Brand href="#home" 
              style= {{marginLeft: "-5em", color: 'white'}} 
            >
                <StorefrontIcon className = "header_logoImage" fontSize = "large" style={{ fontSize: "3em"}}/>
                <Link color="neutral" underline="hover" href="/" className = "navLink header__logoTitle"><b className="name">eShop</b></Link> 
            </Navbar.Brand>

            <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className="header__searchIcon" />
            </div>
            <Nav className="header__nav">

              <Nav.Link style={{ textDecoration:"none", marginLeft: "2em"}} onClick = {navigateToLogIn}> 
    
                <div className="nav__item ">
                  <span className="nav__itemLineOne">
                    {isLoggedIn ? `Hello ` : "Hello Guest"}
                  </span>
                  <span className="nav__itemLineTwo"><b>
                    {isLoggedIn ? `${userName}` : "Sign In"}
                  </b></span>
                </div>
              </Nav.Link> 

              <div className="nav__item second">
                  <span className="nav__itemLineOne">Your</span>
                  <span className="nav__itemLineTwo">Shop</span>
              </div>

              <Nav.Link  style={{ textDecoration:"none" }} onClick = {navigateTo}> 
              {/* "/checkout" href="/basketPanel" */}
                <div className="nav__itemBasket">
                  <ShoppingBasketIcon style={{ fontSize: "3em"}}/>
                  <span className="nav__itemLineTwo nav__basketCount">{basket!.length}</span>
                  
                </div>
              </Nav.Link>  
            </Nav>

          </Container>
        </Navbar>
      </div>  
    )
}

export default NavbarComponent;