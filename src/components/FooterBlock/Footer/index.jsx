
import FooterMenu from '../FooterMenu';
import styles from './styles.module.scss';


import facebookSGV from '../../../assets/img/networks/facebook-icon.svg'
import vkSGV from '../../../assets/img/networks/vk-icon.svg'
import instagramSGV from '../../../assets/img/networks/instagram-icon.svg'



function Footer() {
    return (
        <footer>
            <div className={styles.footerTop}>
                <div className='container'>
                    <nav className={styles.nav}>
                        <FooterMenu/>  
                    </nav>               
                </div>    
            </div>    
            <div className={styles.footerBottom}>
                <div className='container'>
                    <div className={styles.bottomContent}>
                        <p className={styles.copyright}>2023 © ООО “ПланетаСпеций”</p>
                        <div className={styles.networks}>
                            <a href='/'><img src={facebookSGV} alt='facebook-icon' /></a>
                            <a href='/'><img src={vkSGV} alt='vk-icon' /></a>
                            <a href='/'><img src={instagramSGV} alt='instagram-icon' /></a>
                        </div>
                        <a className={styles.developers} href='/'>Разработка сайта @sashasafonnova</a>
                    </div>    
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;