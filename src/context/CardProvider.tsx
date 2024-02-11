import { ReactElement, createContext, useState } from "react";

export type CardType = {
    upc     : string,
    price   : string,
    bed     : number,
    bathroom: number,
    sqft    : string,
    status  : string,
    address : string,
    agency  : string
};

const initialState: CardType[] = [
    {
        'upc'       : 'house0001',
        'price'     : '679,500',
        'bed'       : 4,
        'bathroom'  : 3,
        'sqft'      : '2,527',
        'status'    : 'House For Sale',
        'address'   : '19727 E Raven Dr, Queen Creek, AZ 85142',
        'agency'    : 'Superlative Realty'
    },
    {
        'upc'       : 'house0002',
        'price'     : '625,000',
        'bed'       : 5,
        'bathroom'  : 3,
        'sqft'      : '2,545',
        'status'    : 'House For Sale',
        'address'   : '18820 E Superstition Dr, Queen Creek, AZ 85142',
        'agency'    : 'Firebird Housing'
    },
    {
        'upc'       : 'house0003',
        'price'     : '630,000',
        'bed'       : 5,
        'bathroom'  : 5,
        'sqft'      : '3,291',
        'status'    : 'House For Sale',
        'address'   : 'Sterling Collection, Queen Creek, AZ 85142',
        'agency'    : 'Mattamy Homes'
    },
    {
        'upc'       : 'house0004',
        'price'     : '630,000',
        'bed'       : 5,
        'bathroom'  : 5,
        'sqft'      : '3,291',
        'status'    : 'House For Sale',
        'address'   : 'Sterling Collection, Queen Creek, AZ 85142',
        'agency'    : 'Mattamy Homes'
    },
    {
        'upc'       : 'house0005',
        'price'     : '630,000',
        'bed'       : 5,
        'bathroom'  : 5,
        'sqft'      : '3,291',
        'status'    : 'House For Sale',
        'address'   : 'Sterling Collection, Queen Creek, AZ 85142',
        'agency'    : 'Mattamy Homes'
    }
];

export type UseCardsContextType = { cards: CardType[] };

const initialContextState: UseCardsContextType = { cards: [] };

const CardsContext = createContext<UseCardsContextType>(initialContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CardsProvider = ({ children }: ChildrenType): ReactElement => {
    const [cards, setCards] = useState<CardType[]>(initialState);

    return (
        <CardsContext.Provider value={{ cards }}>
            {children}
        </CardsContext.Provider>
    )
};

export default CardsContext;
