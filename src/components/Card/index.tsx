import { CardType }     from '../../context/CardProvider';
import { ReactElement } from 'react';

type PropsType = {
    card: CardType
};

const Card = ({ card }: PropsType): ReactElement => {
    const img: string = new URL(`../../images/${card.upc}.jpg`, import.meta.url).href;
    
    const content = (
        <article className='card card-shadow'>
            <header className='card-header card-image'>
                <img src={img} alt={card.upc} />
            </header>
            <section className='card-body'>
                <h1>{card.price}</h1>
                <p className='description'>{card.bed} bds | {card.bathroom} ba | {card.sqft} sqft | {card.status}</p>
                <p className='address'>{card.address}</p>
                <p>{card.agency}</p>
            </section>
            <footer className='card-footer'>
                <button className='button'>Details</button>
                <button className='button button-outline'>Contact Seller</button>
            </footer>
        </article>
    );

    return content;
};

export default Card;
