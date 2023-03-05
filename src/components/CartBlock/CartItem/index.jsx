import styles from './styles.module.scss';
import CardLabel from '../../CatalogBlock/Card/CardLabel';

import { useDispatch } from 'react-redux';
import { removeProduct, countIncrement, countDecrement } from '../../../redux/slices/cartSlice';




function CartItem({ product }) {

   const dispatch = useDispatch();
   const priceStyle = product.oldPrice ? styles.newPrice : styles.price;

   

   return (
      <div className={styles.cartItem}>
         <div className={styles.imgBlock}>
            <div className={styles.icons}>
               {product.category && <CardLabel category={product.category} />}
            </div>
            <div className={styles.img}>
               <img src={product.imgUrl} alt='card-img' />
            </div>
         </div>   
         
         <div className={styles.main}>
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.text}>{product.description}</p>
            
            
            <ul className={styles.prices}>
               <li className={priceStyle}>{`${product.price} руб.`}</li>
               {product.oldPrice && <li className={styles.oldPrice}>{`${product.oldPrice} руб.`}</li>}
               <li className={styles.weight}>{`(${product.weight} г)`}</li>
            </ul>
            <div className={styles.counter}>
               <button className={styles.counterBtn} onClick={() => dispatch(countDecrement(product))}>-</button>
               <p className={styles.counterText}>{product.count}</p>
               <button className={styles.counterBtn} onClick={() => dispatch(countIncrement(product))}>+</button>
            </div>
            <p className={styles.sum}><span>Сумма: </span>{`${product.count * product.price} руб.`}</p>
         </div>
         <button className={styles.deleteBtn} onClick={() => dispatch(removeProduct(product))}>Х</button>     
      </div>
   );
}

export default CartItem;