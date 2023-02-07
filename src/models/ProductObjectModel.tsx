export type ProductObject = {
    id : string;
    title :string;
    image : string;
    price : number;
    rating : number;
}

export interface ProductObjectProps extends ProductObject  {
    isFavorite: boolean;
    onClickHeartIcon : () => void;
}

export interface ProductObjectExtendedProps extends ProductObject  {
    removeFromPanel: (cardId: string) => void;
}
