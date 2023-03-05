import styles from './styles.module.scss';


function WelcomeBlock () {
    return (
        <section>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textBlock}>
                        <h1 className={styles.title}>Экзотические специи<span> со всего мира</span></h1>
                        <p>Добро пожаловать! Рады видеть вас в нашем интернет-магазине.</p>
                        <p>Здесь мы собрали самые необычные специи из разных уголков мира. Мы постоянно расшираем ассортимент, чтобы радовать вас новыми необыкновенными вкусами. Сделайте каждое свое блюда незабываемым с нашей ПланетойСпеций!</p>
                        
                    </div>
                    <ul className={styles.numbers}>
                        <li className={styles.numbersItem}>
                            <p className={styles.number}>6</p>
                            <p>лет на рынке</p>
                        </li>
                        <li className={styles.numbersItem}>
                            <p className={styles.number}>1000+</p>
                            <p>довольных клиентов</p>
                        </li>
                        <li className={styles.numbersItem}>
                            <p className={styles.number}>100+</p>
                            <p>товаров на сайте</p>
                        </li>
                        <li className={styles.numbersItem}>
                            <p className={styles.number}>12</p>
                            <p>стран мира</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default WelcomeBlock;