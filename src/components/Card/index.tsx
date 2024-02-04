import './styles.css';

const Card = () => {
    const content = (
        <article className='card'>
            <header className='card-header'></header>
            <p className='card-body'></p>
            <footer className='card-footer'>
                <button className='button'>Details</button>
                <button className='button button-outline'>Contact Seller</button>
            </footer>
        </article>
    );

    return content;
}

export default Card;
