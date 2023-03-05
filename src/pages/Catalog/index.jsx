import Card from "../../components/CatalogBlock/Card";
import CatalogMenu from "../../components/CatalogBlock/CatalogMenu";
import CatalogTrack from "../../components/CatalogBlock/CatalogTrack";
import CatalogSort from "../../components/CatalogBlock/CatalogSort";


import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";

import styles from './styles.module.scss';
import Skeleton from "../../components/Skeleton";

import fetchError from '../../assets/img/items/fetchError.jpg'



function Catalog() {   

   const dispatch = useDispatch();
   const products = useSelector(state => state.productsSlice.products);
   const cartState = useSelector(state => state.cartSlice); 
   const favoriteProducts = useSelector(state => state.favoritesSlice.products);


   const sortValue = useSelector(state => state.sortSlice.params.value);
   const sortOrder = useSelector(state => state.sortSlice.params.order);

   const filterCategory = useSelector(state => state.filterSlice.filterParams.category);
   const filterType = useSelector(state => state.filterSlice.filterParams.type);
   const filterDishes = useSelector(state => state.filterSlice.filterParams.dishes);
   const filterSearch = useSelector(state => state.filterSlice.filterParams.search);

   const fetchStatus = useSelector(state => state.productsSlice.fetchStatus);
     

   const fetchParams = {
      sortValue,
      sortOrder,
      filterCategory,
      filterType,
      filterDishes,
      filterSearch,
   }

   const skeletons = (
      <div className={styles.items}>
         {[...new Array(6)].map((index) => <Skeleton key={index}/>)}
      </div>);



   const fetchErrorMessage = (
      <div className={styles.fetchError}>
         <img className={styles.imgError} src={fetchError} alt="fetchError" />
         <p> Упс, что-то пошло не так...</p>
      </div>)



   const fetchEmptyMessage = (
      <div className={styles.emptyItems}> Товары не найдены</div>
   )


   const productsRender = (
      <div className={styles.items}>
         {products.map(product => <Card key={product.id} product={product} />)}
      </div>
   );




   const getFetchResult = () => {
      if (fetchStatus === "error") {
         return fetchErrorMessage;
      } else if (fetchStatus === "loading") {
         return skeletons;
      } else if (fetchStatus === "success" && products.length === 0) {
         return fetchEmptyMessage;
      } else {
         return productsRender;
      }
   }


   useEffect(() => {
      dispatch(fetchProducts()); 
      window.scrollTo(0, 0);
      }, []);


   useEffect(() => {
      dispatch(fetchProducts(fetchParams));
   }, [sortValue, sortOrder, filterCategory, filterType, filterDishes, filterSearch]); 


   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(cartState.products));
   }, [cartState.products]);

   
   useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favoriteProducts));
   }, [favoriteProducts]);
   



   return (
      <section>
         <div className="container">
            <div className={styles.content}>
               <h1 className={styles.title}>Каталог</h1>
               <CatalogTrack/>
               <CatalogMenu />
               <CatalogSort />

               
               {getFetchResult()}      
               
               
            </div>
         </div>
      </section>
   );
}

export default Catalog;