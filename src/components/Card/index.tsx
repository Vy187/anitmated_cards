import { CardType }     from '../../context/CardProvider';
import { ReactElement } from 'react';
import './styles.css';

type PropsType = {
    card: CardType
};

const Card = ({ card }: PropsType): ReactElement => {
    const content = (
        <article className='card'>
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
