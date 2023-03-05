import React from 'react';
import { useEffect } from 'react';
import styles from './styles.module.scss';
import sortListItems from '../../../assets/sortListItems'

import { useSelector, useDispatch } from 'react-redux';
import { changeSortItem } from '../../../redux/slices/sortSlice';


function Sort() {

   const [menuOpen, setMenuOpen] = React.useState(false);
   const ActiveItem = useSelector(state => state.sortSlice.params.name);

   const dispatch = useDispatch();
   const styleSelectedItem = (item) => ActiveItem === item.name ? `${styles.item} + " " ${styles.selectedItem}` : styles.item;
   const catalogSort = React.useRef();
   

   const onClickItem = (item) => {
      dispatch(changeSortItem(item));
      setMenuOpen(!menuOpen);   
   }


   

   useEffect(() => {

      const onClickBody = (event) => {
         if (!event.composedPath().includes(catalogSort.current)) {
            setMenuOpen(false); 
         }
      }

      document.body.addEventListener('click', onClickBody)
      return () => document.body.removeEventListener('click', onClickBody)
      }, []);



   return (
      <div className={styles.sort} ref={catalogSort}>            
         <button onClick={() => setMenuOpen(!menuOpen)} className={styles.itemActive}>
            <svg width="20" height="20" viewBox="0 0 102 82" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M21.9895 1.82279C22.9428 0.869814 24.2355 0.33446 25.5835 0.33446C26.9314 0.33446 28.2241 0.869814 29.1774 1.82279L49.5107 22.1561C50.4367 23.1149 50.949 24.3989 50.9375 25.7317C50.9259 27.0646 50.3913 28.3395 49.4488 29.282C48.5063 30.2245 47.2313 30.7591 45.8985 30.7707C44.5657 30.7823 43.2816 30.2699 42.3229 29.344L30.6668 17.6879V76.5834C30.6668 77.9316 30.1312 79.2245 29.1779 80.1778C28.2246 81.1311 26.9316 81.6667 25.5835 81.6667C24.2353 81.6667 22.9423 81.1311 21.989 80.1778C21.0357 79.2245 20.5001 77.9316 20.5001 76.5834V17.6879L8.84403 29.344C7.88531 30.2699 6.60124 30.7823 5.26841 30.7707C3.93558 30.7591 2.66061 30.2245 1.71812 29.282C0.775631 28.3395 0.241022 27.0646 0.22944 25.7317C0.217858 24.3989 0.730229 23.1149 1.6562 22.1561L21.9895 1.82279ZM71.3335 64.3122V5.41671C71.3335 4.06852 71.869 2.77556 72.8223 1.82225C73.7756 0.868939 75.0686 0.333374 76.4168 0.333374C77.765 0.333374 79.0579 0.868939 80.0112 1.82225C80.9646 2.77556 81.5001 4.06852 81.5001 5.41671V64.3122L93.1562 52.6561C94.1149 51.7302 95.399 51.2178 96.7318 51.2294C98.0647 51.2409 99.3396 51.7756 100.282 52.718C101.225 53.6605 101.759 54.9355 101.771 56.2683C101.782 57.6012 101.27 58.8852 100.344 59.844L80.0107 80.1773C79.0574 81.1303 77.7647 81.6656 76.4168 81.6656C75.0689 81.6656 73.7761 81.1303 72.8229 80.1773L52.4895 59.844C51.5636 58.8852 51.0512 57.6012 51.0628 56.2683C51.0744 54.9355 51.609 53.6605 52.5515 52.718C53.4939 51.7756 54.7689 51.2409 56.1017 51.2294C57.4346 51.2178 58.7186 51.7302 59.6774 52.6561L71.3335 64.3122Z" fill="#D2D2D2" />
            </svg>
            <p>Сортировать по: <span>{ActiveItem}</span></p>
         </button>
         {menuOpen && <ul className={styles.list}>{
             sortListItems.map(item => <li key={item.id}>
               <button className={styleSelectedItem(item)} onClick={() => onClickItem(item)}>{item.name}</button>
               </li> 
            )}                
         </ul>
         }
      </div>
   );
}

export default Sort;