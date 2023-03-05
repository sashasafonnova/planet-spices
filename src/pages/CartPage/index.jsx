import styles from './styles.module.scss';
import CartItem from "../../components/CartBlock/CartItem";
import CartEmpty from '../../components/CartBlock/CartEmpty';


import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { clearCart } from '../../redux/slices/cartSlice';
import { Link } from "react-router-dom";



function CartPage() {
   
   const { products, totalPrice } = useSelector(state => state.cartSlice);
   const dispatch = useDispatch();


   useEffect(() => {
      window.scrollTo(0, 0);
   }, []); 


   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(products));
   }, [products]);


   return (
      <section>
         <div className="container">
            <div className={styles.content}>
               <h1 className={styles.title}>Корзина</h1>

               {products.length === 0 && <CartEmpty/>}


               {products.length > 0 && <>
      
               <div className={styles.details}>
                  <p>Товаров: { products.length }</p>
                  <button className={styles.clearAll} onClick={() => dispatch(clearCart())}>X  Очистить корзину</button>
               </div>
               <div>
                  {products.map(product => <CartItem key={product.id} product={product} />)}
               </div>
               <div className={styles.total}>
                  <p className={styles.totalPrice}>К оплате: <span>{`${totalPrice} руб.`}</span></p>
                  <Link to="/datacustomer" className={styles.btn}>Оформить заказ</Link>
               </div>
               
               </>}
               
            </div>
         </div>
      </section>
   );
}

export default CartPage;


