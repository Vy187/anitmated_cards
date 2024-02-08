import { ReactElement, createContext, useState } from "react";

export type CardType = {
    upc: string,
    header: string,
    body: string
};

const initialState: CardType[] = [
    {
        'upc'       : '1',
        'header'    : '1',
        'body'      : 'hi',
    },
    {
        'upc'       : '2',
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
