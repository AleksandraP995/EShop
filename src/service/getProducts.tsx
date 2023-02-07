import { connectToContentful } from "../migrations/contentfulConnection";
import { ProductObject } from "../models/ProductObjectModel";
import { ProductsContainerModel } from "../models/ProductsContainerModel";
import { findObject } from "./findObject";

const client = connectToContentful();

let productObj: ProductObject = {
    id: "",
    title: "",
    image: "",
    price: 0,
    rating: 0
};

const getProductsArr = (arr: []) => {

    const getProductArrTwo = (arr: []) => {
        const arrTwo= []
        const prodArrThree = arr.map((it: any) => {
            const prodObj : ProductObject = {
                id : it.fields.id,
                image : it.fields.productImage.fields.file.url,
                price : it.fields.price,
                rating: it.fields.rating,
                title: it.fields.title
            }
            return prodObj
        })
       
    return prodArrThree;
    }
    
    arr.map((it: any) => {
        const prodObj : ProductObject = {
            id : it.fields.id,
            image : it.fields.productImage.fields.file.url,
            price : it.fields.price,
            rating: it.fields.rating,
            title: it.fields.title
        }
        const productsArrayClean: ProductObject[] = [];
        productsArrayClean.push(prodObj)
        return productsArrayClean;
    })
    
};

export const getProducts = () => {
    const getProductsContainer = async (slug: string): Promise<any> => { //ProductsContainerModel | undefined
        try {
            const productsContainerObject = await client.getEntries()
            .then((response : any) => {
                const foundObject = findObject(response.items, slug);

                const slugStr = foundObject['fields']['slug'];
                const title = foundObject['fields']['title'];
                const fullArr: ProductObject[] = foundObject['fields']['products'];

                const productsArray =  fullArr.map((it: any) => {
                    const prodObj : ProductObject = {
                        id : it.fields.id,
                        image : it.fields.productImage.fields.file.url,
                        price : it.fields.price,
                        rating: it.fields.rating,
                        title: it.fields.title
                    }
                    return prodObj;
                })
                //console.log(productsArray);

                const productsObject : ProductsContainerModel = {
                    title: title,
                    slug: slugStr,
                    products: productsArray
                }
              return  productsObject;

            })
            .catch(console.error);
            return productsContainerObject!;

        } catch(err){
            console.log(`There was an error: ${err}`);
            
        }
    } 
    return { getProductsContainer }
}


