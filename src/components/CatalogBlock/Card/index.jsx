import styles from './styles.module.scss';

import CardLabel from './CardLabel';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/slices/cartSlice';
import { countIncrement, countDecrement, countReset } from '../../../redux/slices/productsSlice';
import { toggleIsFavorite } from '../../../redux/slices/favoritesSlice';





function Card({ product }) {

    const dispatch = useDispatch(); 
    const favoriteProducts = useSelector(state => state.favoritesSlice.products);


    const priceStyle = product.oldPrice ? styles.newPrice : styles.price;
    
    
    const styleBtn = (product) => {
        const foundFavorite = favoriteProducts.find(favorite => favorite.id === product.id)

        if (foundFavorite) {
            return styles.favoriteAdded
        } else {
            return styles.favoriteNoAdded
        }
    }



    const AddToCart = (product) => {
        dispatch(addProduct(product));
        dispatch(countReset(product));
    }



    return (
        <div className={styles.card}>
            <div className={styles.icons}>
                {product.category && <CardLabel category={product.category}/>}
                <button className={styles.favorite} onClick={() => dispatch(toggleIsFavorite(product))}>
                    <svg className={styleBtn(product)} width="23" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.98042 6.7513L7.24074 6.71371L7.35724 6.4779L10 1.12881L12.6428 6.4779L12.7591 6.71344L13.0191 6.75123L18.9245 7.60963L14.6513 11.7677L14.4626 11.9513L14.5072 12.2108L15.5177 18.0868L10.2323 15.3137L10 15.1918L9.7677 15.3137L4.48232 18.0868L5.49277 12.2108L5.53735 11.9516L5.34895 11.768L1.07553 7.60383L6.98042 6.7513Z" />
                    </svg>
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src={product.imgUrl} alt="card-img"/>
                </div>
                <h3 className={styles.title}>{product.name}<span className={styles.weight}>{" (" + product.weight + "г)"}</span></h3>
                <p className={styles.text}>{product.description}</p>
                <div className={styles.details}>
                    <div className={styles.prices}>
                        <p className={priceStyle}>{product.price + " руб."}</p>
                        <p className={styles.oldPrice}>{product.oldPrice && product.oldPrice + "руб"}</p>
                    </div>
                    <div className={styles.counter}>
                        <button className={styles.counterBtn} onClick={() => dispatch(countDecrement(product)) }>-</button>
                        <p className={styles.counterText}>{product.count}</p>
                        <button className={styles.counterBtn} onClick={() => dispatch(countIncrement(product))}>+</button>
                    </div>
                    <button className={styles.btn} onClick={() => AddToCart(product)}>В корзину</button>
                </div>      
            </div>
        </div>
    );
}

export default Card;