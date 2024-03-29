import { ReactElement } from "react";
import useCards from "../../hooks/useCards";
import Card     from "../Card";
import './styles.css';

const CardList = () => {
    const { cards } = useCards();

    let pageContent: ReactElement | ReactElement[] = cards.map(card => {
        return (
            <Card
                key={card.upc}
                card={card}
            />
        )
    });
    
    const content = (
        <main className="main main-grid">
            {pageContent}
        </main>
    );

    return content;
};

export default CardList;
