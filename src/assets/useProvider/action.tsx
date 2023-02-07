
import { setValues } from "./reducer";

export const setHeroImage = (dispatch:any, payload:any) => dispatch({ type: setValues.set_heroImage, payload });
export const setHeroImageTitle = (dispatch:any, payload:any) => dispatch({ type: setValues.set_heroImage, payload });
export const setProductsContainerSlug = (dispatch:any, payload:any) => dispatch({ type: setValues.set_productsContainerSlug, payload });
export const setProducts = (dispatch:any, payload:any) => dispatch({ type: setValues.set_products, payload });

export const setToBasket = (dispatch:any, payload:any) => dispatch({ type: setValues.set_to_basket, payload });
export const setIsFavourite = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Is_Favourite, payload });

export const setPassword = (dispatch:any, payload:any) => dispatch({ type: setValues.set_password, payload });
export const setEmail = (dispatch:any, payload:any) => dispatch({ type: setValues.set_email, payload });
export const setJustifyActive = (dispatch:any, payload:any) => dispatch({ type: setValues.set_JustifyActive, payload });
export const setIsActive = (dispatch:any, payload:any) => dispatch({ type: setValues.set_IsActive, payload });
export const setIsRembered = (dispatch:any, payload:any) => dispatch({ type: setValues.set_IsRembered, payload });
export const setIsDisabled = (dispatch:any, payload:any) => dispatch({ type: setValues.set_isDisabled, payload });