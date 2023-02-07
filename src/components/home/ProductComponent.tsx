import React from "react";
import { ProductObject, ProductObjectProps } from "../../models/ProductObjectModel";
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";
import { CardMedia, Collapse } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { ExpandMore } from "./ExpandMore";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import "./css/ProductComponent.css";

export const  ProductComponentHello = ( props: ProductObjectProps) => { 

    const arr = Array.from({length: props.rating}, (v, i) => i) 

    const [expanded, setExpanded] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(props.isFavorite);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    const handleFavoritesClick = () => {
        setIsFavourite(!isFavourite); 
    };

    return(
        <div>
            <Card  sx={{ maxWidth: 350, margin: ".5em"}} > 
                <CardHeader
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                    }
                    title= {props.title}
                /> 
                <div className='img-container'>
                    <CardMedia
                        className="image"
                        component="img"
                        height="194"
                        image= {props.image}
                        alt= {props.title}
                    />
                </div>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      <b>{props.price}{"$"}</b> | <br/>
                      Rated by our Users: {arr.map( () => <span><FavoriteIcon className="opacity"/></span>)} 
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites"  
                        onClick = {props.onClickHeartIcon}  
                    >
                        <FavoriteIcon
                            onClick = {handleFavoritesClick}
                            style={{ color: isFavourite ? "#846a29" : "grey"}}
                        />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>More Info:</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        
                    </Typography>
                
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default ProductComponentHello;


