import styles from './styles.module.scss';
import tabBtnsList from '../../assets/tabBtnsList';

import Card from "../CatalogBlock/Card";


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { changeCategory } from "../../redux/slices/tabsSlice";
import { Link } from "react-router-dom";
import Skeleton from '../Skeleton';
 


function Tabs () {

    const products = useSelector(state => state.productsSlice.products);
    const cartPproducts = useSelector(state => state.cartSlice.products);
    const favoriteProducts = useSelector(state => state.favoritesSlice.products);
    const fetchStatus = useSelector(state => state.productsSlice.fetchStatus);

    const activeCategory = useSelector(state => state.tabsSlice.category);
    const dispatch = useDispatch();
    const skeletons = [... new Array(4)].map((index) => <Skeleton key={index}/>)


    const styleSelectedBtn = (btn) => activeCategory.name === btn.name ? `${styles.btn} + ' ' + ${styles.btnActive}` : styles.btn;
   

    const fetchParams = {
        filterCategory: activeCategory.value,
        pageParam: 1,
        limitParam: 4,
    }


    const onClickBtn = (btn) => {
        fetchParams.filterCategory = btn.value;
        dispatch(fetchProducts(fetchParams));
        dispatch(changeCategory(btn));
    }


    useEffect(() => {
        dispatch(fetchProducts(fetchParams));
    }, []); 


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteProducts));
    }, [favoriteProducts]);


    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(cartPproducts));
    }, [cartPproducts]);



    



    return (
        <section>
            <div className="container">
                <ul className={styles.btns}>
                    {tabBtnsList.map(btn => (

                        <li className={styles.item} key={btn.id}>
                            <button className={styleSelectedBtn(btn)} onClick={() => onClickBtn(btn)}>{btn.name}</button>
                    </li>))}
                </ul>
                
                <div className= {styles.items}>
                    {fetchStatus === 'loading' || fetchStatus === 'error' ? skeletons : products.map(product => <Card key={product.id} product={product}/>)}  
                </div>    
                <div className={styles.showCatalog}>
                    <Link to="/catalog" className={styles.link}>Смотреть каталог →</Link>
                </div>  
            </div>    
        </section>
    );
}

export default Tabs;

