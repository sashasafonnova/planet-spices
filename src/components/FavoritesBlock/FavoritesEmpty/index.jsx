import styles from './styles.module.scss';
import { Link } from "react-router-dom";



function FavoritesEmpty() {


   return (
      <div className={styles.emptyBlock}>
         <div className={styles.img}>
            <svg width="100" height="50" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 0L6.90897 6.25643L0 7.25393L5 12.1261L3.81793 19L10 15.7564L16.1821 19L15 12.1261L20 7.26071L13.091 6.25643L10 0Z" stroke="#83BA17" />
            </svg>

         </div>
         <p className={styles.title}>Нет избранных товаров</p>
         <Link to='/catalog'className={styles.link}>Смотреть каталог →</Link>
      </div>
   );
}

export default FavoritesEmpty;