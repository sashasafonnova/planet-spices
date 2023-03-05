
import styles from './styles.module.scss';
import imgSpices from './img/spices.jpg';
import { Link } from 'react-router-dom';

function Promo() {
    return (
        <section className={styles.promo}>
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.title}>Бесплатная доставка при заказе от 2000 руб</h2>
                        <p className={styles.text}>Только 3 дня! Привезем ваш заказ курьером в любую точку страны.</p>
                        <Link to='/catalog' className={styles.btn}>Выбрать товары</Link>
                    </div>
                    <div className={styles.img}>
                        <img src={imgSpices} alt='spices'/>
                    </div>    
                </div>
            </div>
        </section> 
    );
}

export default Promo;
