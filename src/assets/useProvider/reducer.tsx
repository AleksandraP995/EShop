
    export const initialState = {
        heroImage: "",
        heroImageTitle: "",
        productsContainerSlug: "",
        products: [],
        basket: [],
        isFavourite: false,
        password: "",
        email: "",
        justifyActive : "tab1",
        isActive: true,
        isRemembered: false,
        isDisabled: true
    }

    export enum setValues  {
        set_heroImage = "set_heroImage",
        set_heroImageTitle = "set_heroImageTitle",
        set_productsContainerSlug = "set_productsContainerSlug",
        set_products = "set_products",
        set_to_basket = "set_to_basket",
        set_Is_Favourite = "set_Is_Favourite",
        set_password = "set_password",
        set_email = "set_email",
        set_JustifyActive = "set_JustifyActive",
        set_IsActive = "set_IsActive",
        set_IsRembered = "set_IsRembered",
        set_isDisabled = "set_isDisabled"
    }


    export const reducer = (state: any, action: any) => {
        
        const { type, payload } = action;
        switch(type) {

            case setValues.set_heroImageTitle:
                return { ...state, heroImageTitle: payload}
            case setValues.set_heroImage :
                return { ...state, heroImage: payload}
            case setValues.set_productsContainerSlug :
                return { ...state, productsContainerSlug: payload}
            case setValues.set_products :
                return { ...state, products: payload}
            case setValues.set_to_basket :
                return { ...state, basket: payload}
            case setValues.set_Is_Favourite :
                return { ...state, isFavourite: payload}
            case setValues.set_password :
                return { ...state, password: payload}
            case setValues.set_email :
                return { ...state, email: payload}
            case setValues.set_JustifyActive :
                return { ...state, justifyActive: payload}
            case setValues.set_IsActive :
                return { ...state, isActive: payload}
            case setValues.set_IsRembered :
                return { ...state, isRemembered: payload}
            case setValues.set_isDisabled :
                return { ...state, isDisabled: payload}
            default:
                return state;
        }
    }
    