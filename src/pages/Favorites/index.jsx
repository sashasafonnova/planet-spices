import styles from './styles.module.scss';
import FavoriteCard from '../../components/FavoritesBlock/FavoriteCard'


import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { clearFavorites } from '../../redux/slices/favoritesSlice';

import FavoritesEmpty from '../../components/FavoritesBlock/FavoritesEmpty';



function Favorites() {


   const products = useSelector(state => state.favoritesSlice.products);
   const dispatch = useDispatch();


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


   useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(products));
   }, [products]);

   

   return (
      <section>
         <div className="container">
            <div className={styles.content}>
               <h1 className={styles.title}>Избранное</h1>
               
               {products.length === 0 && <FavoritesEmpty />}

               {products.length > 0 && (
               
               <div className={styles.details}>
                  <p>{`Товаров: ${products.length}`}</p>
                  <button className={styles.clearAll} onClick={() => dispatch(clearFavorites())}>X Очистить избранное</button>
               </div>
               )
               }

               <div className={styles.items}>
                  {products.map(product => <FavoriteCard key={product.id} product={product} />)}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Favorites;


