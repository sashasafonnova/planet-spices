
import styles from './styles.module.scss';

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';




function Favorites() {

    const favoriteProducts = useSelector(state => state.favoritesSlice.products);


    return (
        <Link to="favorites" className={styles.favorites}>
            <svg className={styles.icon} viewBox="0 0 23 22" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 3.55143L13.6563 7.93571L14.0156 8.72143L14.7969 8.83929L19.6094 9.53857L16.1875 12.9171L15.6016 13.4907L15.7422 14.2764L16.5625 19.0929L12.2578 16.8221L11.5 16.5L10.7734 16.885L6.46875 19.1243L7.25 14.3079L7.39063 13.5221L6.8125 12.9171L3.35938 9.49929L8.17188 8.8L8.95313 8.68214L9.3125 7.89643L11.5 3.55143ZM11.5 0L7.94531 7.24429L0 8.39929L5.75 14.0407L4.39063 22L11.5 18.2443L18.6094 22L17.25 14.0407L23 8.40714L15.0547 7.24429L11.5 0Z" fill="black" fillOpacity="0.5"/>
            </svg>
            {favoriteProducts.length > 0 && <span className={styles.count}>{favoriteProducts.length}</span>}
        </Link>
    );
}

export default Favorites;