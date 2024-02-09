import { ReactElement, createContext, useState } from "react";

export type CardType = {
    upc: string,
    header: string,
    body: string
};

const initialState: CardType[] = [
    {
        'upc'       : 'house0001',
        'header'    : '1',
        'body'      : 'hi',
    },
    {
        'upc'       : 'house0002',
        'header'    : '2',
        'body'      : 'hi',
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
