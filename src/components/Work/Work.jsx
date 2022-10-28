import styles from './work.module.css';

function Work() {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.work}>
                    <h1>We work how you<br>
                    </br>work everyday</h1>
                    <span>Since the easiest things to use actually get used, we<br>
                    </br> adapts to the way your team works – not the other<br>
                        </br> way around.</span>
                    <div className={styles.get}>
                        <button>Get started free</button>
                    </div>
                </div>
                <div className={styles.WorkImg}>
                    <img src='./assets/img3.svg' />
                </div>
            </div>
        </div>
    );
}

export default Work;