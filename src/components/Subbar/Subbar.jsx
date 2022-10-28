import styles from './subbar.module.css';

function Subbar() {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.subText}>
                    <span>TRUSTED BY OVER <b>10.000+</b> WORLD’S BEST TEAMS</span>
                </div>
                <div className={styles.subIcons}>
                    <img src='./assets/Icons/google.svg' />
                    <img src='./assets/Icons/airbnb.svg' />
                    <img src='./assets/Icons/facebook.svg' />
                    <img src='./assets/Icons/hubspot.svg' />
                    <img src='./assets/Icons/slack.svg' />
                </div>
            </div>
        </div>
    );
}

export default Subbar;