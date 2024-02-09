import { CardType }     from '../../context/CardProvider';
import { ReactElement } from 'react';
import './styles.css';

type PropsType = {
    card: CardType
};

const Card = ({ card }: PropsType): ReactElement => {
    const img: string = new URL(`../../images/${card.upc}.jpg`, import.meta.url).href;
    console.log(img)
    
    const content = (
        <article className='card card-shadow'>
            <img className="card-img" src={img} alt="" />
            <header className='card-header'>{card.header}</header>
            <p className='card-body'>{card.body}</p>
            <footer className='card-footer'>
                <button className='button'>Details</button>
                <button className='button button-outline'>Contact Seller</button>
            </footer>
        </article>
    );

    return content;
};

export default Card;
