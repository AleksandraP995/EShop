import { createContext, useContext } from "react";

export type GlobalContent = {
    basket: any[]
    setBasket:(c: any[]) => void
    overallPrice: number,
    setOverallPrice:(c: number) => void,
    wrapPrice: number,
    setWrapPrice:(c: number) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (c: boolean) => void,
    userName: string,
    setUserName: (c: string) => void
  }

export const MyGlobalContext = createContext<GlobalContent>({
    basket: [{id : "nn",title :"nn", image : 1, price : 1, rating : 1}], // set a default value
    setBasket: () => {},
    overallPrice : 1,
    setOverallPrice: () => {},
    wrapPrice: 0,
    setWrapPrice: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    userName: "",
    setUserName : () => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext)