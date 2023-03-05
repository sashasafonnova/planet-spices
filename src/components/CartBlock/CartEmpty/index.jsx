import styles from './styles.module.scss';
import { Link } from 'react-router-dom';


import emptyCartSGV from '../../../assets/img/cart/emptyCart.svg'



function CartEmpty() {


   return (
      <div className={styles.emptyBlock}>
         <div className={styles.img}>
            <img src={emptyCartSGV} alt='emptyCart' />
         </div>
         <p className={styles.title}>Ваша корзина пуста</p>
         <Link to='/catalog' className={styles.link}>Смотреть каталог →</Link>
      </div>
   );
}

export default CartEmpty;