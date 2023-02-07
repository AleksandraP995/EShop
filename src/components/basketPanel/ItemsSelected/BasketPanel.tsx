import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../assets/useContext/NewContext";
import NavbarComponent from "../../navbar/Navbar";
import {IoIosArrowBack} from "react-icons/io";
import MediaCard from "./Card";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import WebFont from 'webfontloader';
import { Card } from '@nextui-org/react';
import { TotalAmount } from "./TotalAmount";

export const BasketPanel = (): JSX.Element => {

    const navigate = useNavigate(); 

    const { basket, setBasket } = useGlobalContext();
    
 
    const removeFromPanel = (cardId: string) => {
        setBasket([...basket.filter((card: any)=> card.id !== cardId)])
    }
    const navigateTo = () => {
        navigate("/")
    }
    
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Lato']
            }
        })
     }, [basket]);


    return (
        <div className="center font-loader">
            <br /><br /><br />
            <div className="row">
                <div className="col-6"><h2><b>
                    <IoIosArrowBack onClick = {() => navigateTo()} className= "backArrow" title='Continue Shopping'/>
                    
                </b></h2></div>
                <div className="col-6 backText"><h4><b>Continue Shopping</b></h4></div>
            </div>

            <div className="row">
                <div className="col-12"><h2><b>SHOPPING CART</b></h2></div>
            </div>

            <br /><br /><br />
            <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4">
                    {basket.map((card : any) => (
                            <MediaCard
                            key = {card.id}
                            id = {card.id}
                            title= {card.title}
                            image = {card.image}
                            price = {card.price}
                            rating = {card.rating}
                            removeFromPanel = {removeFromPanel}
                            />
                    ))}
                    </div>
                    <div className="col-2"/>
                    <div className="col-5"><TotalAmount/></div>
            </div>
        </div>
    )
}

