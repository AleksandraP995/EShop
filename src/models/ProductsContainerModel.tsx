import { ProductObject } from "./ProductObjectModel"

export type ProductsContainerModel = {
    title: string,
    slug: string, 
    products: ProductObject[]
}