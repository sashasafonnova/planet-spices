
import styles from './styles.module.scss';

import { Link } from "react-router-dom";

function FooterMenu() {
    return (
        <ul className={styles.menu}>
            <li className={styles.item}>
                <Link to="/planet-spices" className={styles.link}>Главная</Link>
            </li>
            <li className={styles.item}>
                <Link to="/catalog" className={styles.link}>Каталог</Link>
            </li>
            <li className={styles.item}>
                <Link to="/delivery" className={styles.link}>Доставка и оплата</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contacts" className={styles.link}>Контакты</Link>
            </li>
        </ul>
    );
}

export default FooterMenu;