import React from 'react';
import { useEffect } from 'react';
import HeaderCart from '../HeaderCart';
import HeaderFavorites from '../HeaderFavorites';
import Logo from '../Logo';
import Menu from '../Menu';

import Search from '../Search';
import menuBurgerList from '../../../assets/menuBurgerList';

import styles from './styles.module.scss';
import { Link } from "react-router-dom";





function Header() {

    const [menuBurgerOpen, setMenuBurgerOpen] = React.useState(false);
    const menuList = React.useRef();
    const menuBtn = React.useRef();



    useEffect(() => {

        const onClickBody = (event) => {
            if (!event.composedPath().includes(menuBtn.current) && !event.composedPath().includes(menuList.current)) {
                setMenuBurgerOpen(false);
            }
        }

        document.body.addEventListener('click', onClickBody)
        return () => document.body.removeEventListener('click', onClickBody)
    }, []);



    return (
        <header className={styles.header}>
            <section>    
                <div className="container">
                    <div className={styles.headerContent}>
                        <Logo />
                        <div className={styles.userPanel}>
                            <HeaderFavorites/>
                            <HeaderCart/>    
                        </div>
                    </div>    
                </div>
            </section>        
            <nav className={styles.nav}>
                <div className="container">
                    <div className={styles.navContent}>
                        <Menu/>
                        <button onClick={() => setMenuBurgerOpen(!menuBurgerOpen)} className={styles.menuBurgerBtn} ref={menuBtn}>
                            <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H25C25.2652 0 25.5196 0.105357 25.7071 0.292893C25.8946 0.48043 26 0.734784 26 1C26 1.26522 25.8946 1.51957 25.7071 1.70711C25.5196 1.89464 25.2652 2 25 2Z" fill="white" />
                                <path d="M25 9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H25C25.2652 7 25.5196 7.10536 25.7071 7.29289C25.8946 7.48043 26 7.73478 26 8C26 8.26522 25.8946 8.51957 25.7071 8.70711C25.5196 8.89464 25.2652 9 25 9Z" fill="white" />
                                <path d="M25 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14H25C25.2652 14 25.5196 14.1054 25.7071 14.2929C25.8946 14.4804 26 14.7348 26 15C26 15.2652 25.8946 15.5196 25.7071 15.7071C25.5196 15.8946 25.2652 16 25 16Z" fill="white" />
                            </svg>
                        </button>
                        <Search/>   
                    </div>  
                </div>
                {menuBurgerOpen && (
                    <ul className={styles.menuBurger} ref={menuList}>

                        {menuBurgerList.map(item => (
                            <li className={styles.item} key={item.id}>
                                <Link to={item.link} className={styles.link} onClick={() => setMenuBurgerOpen(false)}>{item.name}</Link>
                            </li>))}
                    </ul> 
                )}
            </nav>    
        </header> 
    );
  }
  
  export default Header;