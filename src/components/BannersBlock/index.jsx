
import styles from './styles.module.scss';

import { useDispatch } from 'react-redux';
import { changeMenuItem, changeFilterParams } from '../../redux/slices/filterSlice';
import { Link } from 'react-router-dom';

import mainCooksJPG from '../../assets/img/banners/main-cooks.jpg';
import cocktailsJPG from '../../assets/img/banners/cocktails.jpg';
import desertsJPG from '../../assets/img/banners/deserts.jpg';
import classicSpicesJPG from '../../assets/img/banners/classic-spices.jpg';
import vegetablesJPG from '../../assets/img/banners/vegetables.jpg';




function Banners() {

    const dispatch = useDispatch();

    const onClickBanner = (menuItem, param, paramValue) => {
        const params = {
            param,
            paramValue,
        };

        dispatch(changeFilterParams(params))
        dispatch(changeMenuItem(menuItem));
}



    return (
        <section className={styles.banners}>
            <div className='container'>
                <div className={styles.content}>
                    <Link to='catalog' className={styles.item + ' ' + styles.item1} onClick={() => onClickBanner('Основные блюда', 'dishes', 'Основные')} >
                        <p className={styles.text}>Для основных блюд</p>
                        <img className={styles.img} src={mainCooksJPG} alt='Banner' />
                    </Link>
                    <Link to='catalog' className={styles.item + ' ' + styles.item2} onClick={() => onClickBanner('Для напитков', 'dishes', 'Напитки')} >
                        <p className={styles.text}>Для напитков</p>
                        <img className={styles.img} src={cocktailsJPG} alt='Banner'/>
                    </Link>
                    <Link to='catalog' className={styles.item + ' ' + styles.item3} onClick={() => onClickBanner('Для выпечки', 'dishes', 'Выпечка')} >
                        <p className={styles.text}>Для выпечки</p>
                        <img className={styles.img} src={desertsJPG} alt='Banner'/>
                    </Link>
                    <Link to='catalog' className={styles.item + ' ' + styles.item4} onClick={() => onClickBanner('Классические приправы', 'type', 'classic')} >
                        <p className={styles.text}>Классические специи</p>
                        <img className={styles.img} src={classicSpicesJPG} alt='Banner'/>
                    </Link>
                    <Link to='catalog' className={styles.item + ' ' + styles.item5} onClick={() => onClickBanner('Пряные травы и овощи', 'type', 'herbs')} >
                        <p className={styles.text}>Пряные травы и овощи</p>
                        <img className={styles.img} src={vegetablesJPG} alt='Banner'/>
                    </Link>
                </div>    
            </div>    
        </section>
    );
  }
  
  export default Banners;