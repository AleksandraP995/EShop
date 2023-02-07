
import './App.css';
import { NavbarComponent } from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import { useState } from 'react';
import { MyGlobalContext } from './assets/useContext/NewContext';
import { IntroComponent } from './components/basketPanel/IntroComponent';
import { LoginPage } from './components/Login/Login';


function App() {
  const [basket, setBasket]= useState<any[]>([]);
  const [overallPrice, setOverallPrice] = useState<number>(1);
  const [wrapPrice, setWrapPrice] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  
  console.log(basket.length);
  
  return (
        <Router>
            <MyGlobalContext.Provider 
              value= {{ 
                basket, setBasket, 
                overallPrice, setOverallPrice, 
                wrapPrice, setWrapPrice, 
                isLoggedIn, setIsLoggedIn,
                userName, setUserName
              }}
            >
            <div className="App">
              
              <div className= "row">
                <div className='col-12'><NavbarComponent/></div>
              </div>
                <Routes>
                    <Route path = "" element = {<Home/>}></Route>
                    <Route path = "/basket" element = {<IntroComponent/>}></Route>
                    <Route path = "/login" element = {<LoginPage/>}></Route>
                </Routes>
              </div>
            </MyGlobalContext.Provider>
          </Router>
      
   
  );
}

export default App;

