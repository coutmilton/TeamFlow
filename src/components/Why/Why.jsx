import styles from './why.module.css';

function Why() {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.whyText}>
                    <h1>Why customers love<br>
                    </br>working with us</h1>
                    <span>“It's amazing what has helped me learn about my team.<br>
                    </br>I don't worry about blindspots anymore, and 1-on-1s have never<br>
                        </br>been more productive. The team loves it.”</span>
                </div>
                <div className={styles.peaple}>
                    <div className={styles.person}>
                        <img src='./assets/WhyIcon/icon1.svg' alt="" />
                        <div className={styles.personText}>
                            <h1>Jorge Robertson</h1>
                            <span>CS at Google</span>
                        </div>
                    </div>
                    <div className={styles.personOther}>
                        <img src='./assets/WhyIcon/icon2.svg' alt="" />
                        <div className={styles.personText}>
                            <h1>Francisco Bell</h1>
                            <span>Designer at Microsoft</span>
                        </div>
                    </div>
                    <div className={styles.personOther}>
                        <img src='./assets/WhyIcon/icon3.svg' alt="" />
                        <div className={styles.personText}>
                            <h1>Beth Fox</h1>
                            <span>Developer at Airbnb</span>
                        </div>
                    </div>
                </div>
                <div className={styles.alignBanner}>
                    <div className={styles.banner}>
                        <div className={styles.bannerText}>
                            <span>84% of employees who use<br>
                            </br>trust their direct manager</span>
                        </div>
                        <div className={styles.bannerIcon}>
                            <img src='./assets/WhyIcon/goplay.svg' alt="" />
                            <img src='./assets/WhyIcon/app.svg' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;