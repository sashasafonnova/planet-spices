import styles from './styles.module.scss';
import { useEffect } from 'react';


function Contacts() {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []); 

   return (
      <section>
         <div className='container'>
            <div className={styles.content}>
               <h1 className={styles.title}>Контакты</h1>
               <p>Свяжитесь с нами: planetaspetsii@mail.ru</p>
            </div>
         </div>
      </section>
   );
}

export default Contacts;