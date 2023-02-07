import { useGlobalContext } from "../../assets/useContext/NewContext";
import { BasketPanel } from "./ItemsSelected/BasketPanel";
import NoItemsComponent from "./NoItemsComponent";

export const IntroComponent = () => {

    const { basket, setBasket } = useGlobalContext();

    return (
        <div>
            {
                basket.length > 0 ? (
                    <BasketPanel/>
                ) : (
                    <NoItemsComponent/>
                )
            }
        </div>
    )
}