
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';


import { useSelector } from 'react-redux';

function Cart() {

    const CartDetails = useSelector(state => state.cartSlice);

    return (
    <Link to='cart' className={styles.cart}>
        <svg className={styles.icon} viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 0L4.18436 7.50928H0V12.5683H1.02679L3.31118 20.3938L3.49107 21H19.5089L19.6888 20.3938L21.9732 12.5683H23V7.50928H18.8156L11.5 0ZM11.5 2.39798L16.4803 7.50928H6.5205L11.5 2.39798ZM1.64286 9.19562H21.3571V10.882H20.7411L20.5612 11.4882L18.2768 19.3137H4.72321L2.43882 11.4882L2.25893 10.882H1.64286V9.19562ZM7.39286 11.7251V17.6273H9.03571V11.7251H7.39286ZM10.6786 11.7251V17.6273H12.3214V11.7251H10.6786ZM13.9643 11.7251V17.6273H15.6071V11.7251H13.9643Z" fill="black" fillOpacity="0.5"/>
        </svg>  
        <div>
            <p className={styles.number}>{`Товаров: ${CartDetails.products.length}`}</p>
            <p className={styles.sum}>{`${CartDetails.totalPrice} руб.`}</p>
        </div>
    </Link>
    );
}

export default Cart;