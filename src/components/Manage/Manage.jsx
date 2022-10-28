import styles from './style.module.css';

function Manage() {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.promo}>
                    <button className={styles.save}>Save 90%</button>
                    <span className={styles.get}>Get account of $59</span>
                </div>
                <div className={styles.manageText}>
                    <span>Manage the team<br></br>everyone wants to be on</span>
                </div>
                <div className={styles.simple}>
                    <span>Simple platform that lets you master what great managers do best,<br>
                    </br>as develop trust, collaborate, and drive team performance.</span>

                </div>
                <div className={styles.contact}>
                    <input placeholder="name@yourcompany.com" type="text" />
                    <button>Try it free</button>
                </div>
                <img src='./assets/img1.svg' className={styles.image}/>
            </div>
        </div>
    );
}

export default Manage;