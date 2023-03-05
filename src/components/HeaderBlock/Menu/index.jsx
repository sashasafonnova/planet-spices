
import styles from './styles.module.scss';

import { Link } from "react-router-dom";

function Menu() {
    return (
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to="/planet-spices" className={styles.menuLink}>Главная</Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/catalog" className={styles.menuLink}>Каталог</Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/delivery" className={styles.menuLink}>Доставка и оплата</Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/contacts" className={styles.menuLink}>Контакты</Link>
            </li>
        </ul>
    );
}

export default Menu;

