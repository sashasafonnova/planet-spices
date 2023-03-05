import styles from './styles.module.scss';


import deliverySVG from '../../assets/img/delivery/delivery.svg';



function Delivery() {

   window.scrollTo(0, 0);

   return (
      <section>
         <div className="container">
            <div className={styles.content}>
               <div className={styles.textBlock}>
                  <h1 className={styles.title}>Доставка и оплата</h1>
                  <h2 className={styles.subtitle}>Стоимость доставки</h2>
                  <p className={styles.text}>Доставка по Москве при заказе  до 2500 руб. и весом  до 5 кг  - стоимость 300 руб.,  свыше 5 кг - стоимость 400 руб.</p>
                  <h2 className={styles.subtitle}>Доставка по России</h2>
                  <p className={styles.text}>Доставка транспортными компаниями и почтой России (работаем только по 100%-ой предоплате!)</p>
                  <h2 className={styles.subtitle}>Бесплатная доставка</h2>
                  <p className={styles.text}>При заказе от 2500 руб.</p>

               </div>
               <div className={styles.img}>
                  <img src={deliverySVG} alt="delivery" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Delivery;