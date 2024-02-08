import { useContext }           from "react";
import { UseCardsContextType }  from "../context/CardProvider";
import CardsContext             from "../context/CardProvider";

const useCards = (): UseCardsContextType => {
    return useContext(CardsContext);
};

export default useCards;
