
import styles from './styles.module.scss';

import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { changeFormStatus } from "../../../redux/slices/formsSlice";



function FormQuestion() {


    const { register, handleSubmit, formState: { errors }, reset } = useForm({mode: "onBlur"});
    const dispatch = useDispatch();



    const onSubmit = () => {
        reset();
        dispatch(changeFormStatus(true));
    }




    return (
        <section className={styles.block}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <h4 className={styles.title}>Есть вопросы?</h4>
                    <p>Оставьте свои данные и наш менеджер свяжется с вами в ближайшее время.</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputs}>

                        <div className={styles.name}>

                            <input className={styles.inputName} 

                                {...register('name', {
                                    required: "*обязательное поле",
                                    pattern: {
                                        value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                                        message: "*введите корректное имя",
                                    }    
                                })} 

                                type="text" 
                                placeholder="Имя"
                            />
                                {errors?.name && <div className={styles.error}>{errors.name.message}</div>}

                        </div>


                        <div className={styles.tel}>
                            <input className={styles.inputTel} 

                                {...register('tel', {
                                    required: "*обязательное поле",
                                    pattern: {
                                        value: /^((\+7|7|8)+([0-9]){10})$/,
                                        message: "*введите корректный номер телефона",
                                    }
                                })}

                                type="tel" 
                                placeholder="+7 900 900 9090"
                            />
                                {errors?.tel && <div className={styles.error}>{errors.tel.message}</div>}


                        </div>

                        
                        <div className={styles.question}>
                            <textarea className={styles.inputQuestion} 
                                {...register('textarea', {
                                    required: "*обязательное поле",
                                    pattern: /\S/,
                                })}
                                placeholder="Введите ваш вопрос">

                            </textarea>
                            {errors?.textarea && <div className={styles.error}>{errors.textarea.message}</div>}
                        </div>        

                    </div>
                    <div className={styles.agreements}>
                        <label className={styles.subscribe}>
                            
                                <input className={styles.normalCheckbox} type="checkbox"/> 
                                <span className={styles.customCheckbox}></span>
                                Согласен на рассылку рекламных материалов, акций и скидок.
                            
                        </label>
                        <label className={styles.persondata}>

                                <input className={styles.normalCheckbox} 
                                    type="checkbox" 
                                    {...register('personData', {
                                        required: "*обязательное поле",
                                    })} 
                                />
                                <span className={styles.customCheckbox}></span>
                                Согласен на обработку моих персональных данных.
                                {errors?.personData && <div className={styles.errorPersonData}>{errors.personData.message}</div>} 

                        </label>
                       
                    </div>           
                    <button className={styles.btn} type="submit">Отправить</button>
                </form>
                
            </div>
        </div>
    </section>
    );
}

export default FormQuestion;