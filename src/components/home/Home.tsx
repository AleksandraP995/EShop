
import getHeroImage from "../../service/getHeroImage";
import { useContext, useEffect, useReducer} from "react";
import { initialState, reducer } from "../../assets/useProvider/reducer";
import { slugValues } from "../../assets/useProvider/enums";
import { setHeroImage, setProducts, setProductsContainerSlug, setIsFavourite } from "../../assets/useProvider/action";
import { getProducts } from "../../service/getProducts";
import { ProductsContainerModel } from "../../models/ProductsContainerModel";
import { ProductComponentHello } from "./ProductComponent";
import toast from "react-hot-toast";
import { ToasterComponent } from "./Toaster";
import "./css/ProductComponent.css";
import { ProductObject } from "../../models/ProductObjectModel";
import { useGlobalContext } from "../../assets/useContext/NewContext";
import Link from '@mui/joy/Link';

export function Home() {

    const [data, dispatch] = useReducer(reducer, initialState);
    const { basket, setBasket } = useGlobalContext();
    
    const { getHeroImageContent } = getHeroImage();
    const { getProductsContainer } = getProducts();
   
    const addToFavorites = (productEntity:ProductObject) => {
        
        if (!basket.includes(productEntity)) {
            toast.success("Added to favourites");
            setBasket([...basket, productEntity]);
            setIsFavourite(dispatch, true);
        } else {
            toast.success("Removed from favourites");
            setBasket([...basket.filter((item: any) => item !== productEntity)]);
            setIsFavourite(dispatch, false);
        }
      }

    useEffect(() => {
        getHeroImageContent(slugValues.heroImage).then((data: any) => {
            setHeroImage(dispatch, data.heroImage);  
        })
        getProductsContainer(slugValues.products).then((data:ProductsContainerModel) => {
            setProductsContainerSlug(dispatch, data.slug);
            setProducts(dispatch, data.products)
        })
    }, [data.heroImage]);
    
    return (
        <div>
            <div><ToasterComponent/></div>
            <div className="row">
                <div className="col-12">
                    <img src= {data.heroImage} alt = "logo" width= "100%" className="bg" />
                </div>
            </div>
            <br />
            <br />
            <div className="row centered">
    
                {data.products.map((it: any) => ( //pazi! ne { } vec ()
                    <div className="col-3 color">
                        <ProductComponentHello
                            key = {it.id}
                            id={it.id} 
                            title={it.title} 
                            image={it.image} 
                            price={it.price} 
                            rating={it.rating} 
                            isFavorite = {false}
                            onClickHeartIcon = {() => addToFavorites(it)}
                        />
                    </div>
                ))}
              
            </div>
            <div className="row">
                <div className="col-2" id="searchBar">
                <Link color="neutral" href="/basketPanel"><b className="name"> Added to Cart :{basket.length}</b></Link>
          </div>
            </div>
        </div>
        
    )
}

export default Home;