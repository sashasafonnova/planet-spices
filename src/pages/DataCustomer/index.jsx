import styles from './styles.module.scss';

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { changeFormStatus } from "../../redux/slices/formsSlice";
import { clearCart } from '../../redux/slices/cartSlice';


function DataCustomer() {

   const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onBlur" });
   const dispatch = useDispatch();


   const onSubmit = () => {
      reset();
      dispatch(changeFormStatus(true));
      dispatch(clearCart());
   }
   

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);



   return (
      <section>
         <div className="container">
            <div className={styles.content}>
               <Link to="/cart" className={styles.btnBack}>← Назад</Link>
               <h1 className={styles.title}>Оформление заказа</h1>
               <p>Пожалуйста, укажите ваши данные, чтобы завершить покупку.</p>
               <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                  <div className={styles.item}>
                     <label className={styles.label}>Фамилия</label>
                     <input className={styles.input} 
                     
                        {...register('surname', {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                              message: "*введите корректные данные",
                           }
                        })}

                     type="text"
                     placeholder="Иванова"/>

                     {errors?.surname && <div className={styles.error}>{errors.surname.message}</div>}

                  </div>

                  <div className={styles.item}>
                     <label className={styles.label}>Имя</label>
                     <input className={styles.input} 
                     
                        {...register('name', {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                              message: "*введите корректное имя",
                           }
                        })}
                        type="text" 
                        placeholder="Мария"/>
                     
                     {errors?.name && <div className={styles.error}>{errors.name.message}</div>}

                  </div>

                  <div className={styles.item}>
                     <label className={styles.label}> Отчество</label>
                     <input className={styles.input} 

                        {...register('secondname', {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                              message: "*введите корректные данные",
                           }
                        })}
                     
                     type="text"
                     placeholder="Ивановна"/>
                     
                     {errors?.secondname && <div className={styles.error}>{errors.secondname.message}</div>}

                  </div>

                  <div className={styles.item}>
                     <label className={styles.label}>Номер телефона</label>
                     <input className={styles.input} 
                     
                        {...register('tel', {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^((\+7|7|8)+([0-9]){10})$/,
                              message: "*введите корректный номер телефона",
                           }
                        })}
                     
                     type="tel"
                     placeholder="+7 (999) 123-12-34"/>
                        

                     {errors?.tel && <div className={styles.error}>{errors.tel.message}</div>}

                  </div>

                  <div className={styles.item}>
                     <label className={styles.label}>E-mail</label>
                     <input className={styles.input} 
                     
                        {...register('email', {
                           required: "*обязательное поле",
                           pattern: {
                              value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                              message: "*введите корректный e-mail",
                           }
                        })}
                     
                     type="email"
                     placeholder="email@mail.ru"/>
                        
                     {errors?.email && <div className={styles.error}>{errors.email.message}</div>}

                  </div>

                  <div className={styles.item}>
                     <label className={styles.label}>Адрес доставки</label>
                     <input className={styles.input} 
                     
                        {...register('adress', {
                           required: "*обязательное поле",
                           pattern: /\S/,
                        })}
                     
                     type="text"
                     placeholder="121354 Москва, ул. Кутузова, д. 55"/>

                     {errors?.adress && <div className={styles.error}>{errors.adress.message}</div>}

                  </div>
                  <div className={styles.agreements}>
                     <label className={styles.subscribe}>

                        <input className={styles.normalCheckbox} type="checkbox" name="subscribe" />
                        <span className={styles.customCheckbox}></span>
                        Согласен на рассылку рекламных материалов, акций и скидок.

                     </label>
                     <label className={styles.persondata}>

                        <input className={styles.normalCheckbox} 
                        
                        {...register('personData', {
                           required: "*обязательное поле",
                        })} 
                        
                        type="checkbox" />

                        <span className={styles.customCheckbox}></span>
                        Согласен на обработку моих персональных данных.

                        {errors?.personData && <div className={styles.errorPersonData}>{errors.personData.message}</div>} 


                     </label>
                  </div>  

                  <button className={styles.btn} type="submit" >Зарегистрироваться</button>
               </form>

               <p>После отправки данных наш менеджер свяжется с вами для подтверждения заказа.</p>
            </div>
         </div>
      </section>
   );
}

export default DataCustomer;