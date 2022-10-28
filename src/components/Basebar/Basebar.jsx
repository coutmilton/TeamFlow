import styles from './Basebar.module.css';

function Basebar() {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.colunm}>
                    <div className={styles.colunmOne}>
                        <h1 className={styles.Company}>Company</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className={styles.colunmText}>
                        <h1>Support</h1>
                        <ul>
                            <li>Help Center</li>
                            <li>Safety Center</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className={styles.colunmText}>
                        <h1>Legal</h1>
                        <ul>
                            <li>Cookies Policy</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className={styles.icons}>
                        <h1>Install App</h1>
                        <div className={styles.iconsImg}>
                            <img src='./assets/Basebar/google.svg' alt="" />
                        </div>
                        <div className={styles.iconsImg}>
                            <img src='./assets/Basebar/apple.svg' alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.rodape}>
                    <div className={styles.reserved}>
                        <span>© 2022 - Se trata de um portfólio - Todos os direitos aos designers</span>
                    </div>
                    <div className={styles.rodapeIcons}>
                        <img src='./assets/Basebar/icon1.svg' alt="" />
                        <img src='./assets/Basebar/icon2.svg' alt="" />
                        <img src='./assets/Basebar/icon3.svg' alt="" />
                        <img src='./assets/Basebar/icon4.svg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basebar;