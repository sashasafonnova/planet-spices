import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { changeFormStatus } from "../../../redux/slices/formsSlice";

function FormSuccess() {

   const dispatch = useDispatch();

   setTimeout(() => {
      dispatch(changeFormStatus(false));
   }, 2000);

      return (
         <section className={styles.formSuccess}>
            <div className={styles.window}>
               <div className={styles.content}>Ваши данные успешно отправлены</div>
            </div>
         </section>
      );
}

export default FormSuccess;