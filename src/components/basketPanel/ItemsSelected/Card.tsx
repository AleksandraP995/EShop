import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WebFont from 'webfontloader';
import { AiOutlineClose } from "react-icons/ai";
import { ProductObjectExtendedProps } from '../../../models/ProductObjectModel';
import { useGlobalContext } from '../../../assets/useContext/NewContext';
import DropdownComponent from '../ItemsSelected/DropdownComponent';

export default function MediaCard( props: ProductObjectExtendedProps) {

  const { overallPrice, setOverallPrice } = useGlobalContext();
  const { wrapPrice, setWrapPrice } = useGlobalContext();

  const [quantity, setQuantity] = useState(1);
  const [priceToPay, setPriceToPay] = useState(props.price);
  //const [wrapPrice, setWrapPrice] = useState(0);
  
  const setValues = (price :number, quantity: number, wrapPrice: number) => {
    setPriceToPay((price * quantity) + wrapPrice);
    setOverallPrice(overallPrice + priceToPay + wrapPrice);
  }

  const handleClick = (wrapPriceValue: string)=> { 
    setWrapPrice(+wrapPriceValue);
    setValues(props.price, quantity, wrapPrice);
  }

  const addQuantity = () => {
    setQuantity(quantity + 1);
    setValues(props.price, quantity, wrapPrice);
  }

  const subtractQuantity = (id: string) => {
    setQuantity(quantity - 1);
    setValues(props.price, quantity, wrapPrice);
    if (quantity == 0) {
      props.removeFromPanel(id)
    }
  }

  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Lato']
        }
    })
 }, [wrapPrice, priceToPay, props.price, quantity]);

  return (
    <div className = "font-loader">
        <Card sx={{ maxWidth: 700 }} className = "font-loader cardItem">
          <CardActions>
              <AiOutlineClose onClick={() => props.removeFromPanel(props.id)} className = "xIcon"/>
          </CardActions>
          <CardContent>
              <Typography gutterBottom variant="h5" component="div"><b>
                {props.title}
              </b></Typography>
              <Typography gutterBottom variant="h6" component="div" className='quant'>
                <span><i>Quantity</i></span><span className='price'><i>Price</i></span>
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                <div className='row'>
                  <div className='col-1 sign' onClick={() => addQuantity()}> + </div>
                  <div className='col-3'>{quantity}</div>
                  <div className='col-1 sign' onClick={() => subtractQuantity(props.id)}> - </div>
                  <div className='col-4'/>
                  <div className='col-3'>{priceToPay}$</div>
                </div>
              </Typography>
              <Typography gutterBottom variant="h6" component="div" className='quant'>
                <span><i>Please select</i></span><span className='price'><DropdownComponent handleClick = {handleClick}/></span>
              </Typography>
          </CardContent>
          <CardMedia className='cardMedia'
              sx={{ height: 140 }}
              image={props.image}
              title={props.title}
          />
        </Card>
    </div>
  );
}