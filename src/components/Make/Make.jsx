import styles from './make.module.css'

function Make() {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>Make your work easier</h1>
                </div>
                <div className={styles.makeOne}>
                    <div className={styles.banner}>
                        <img src='./assets/MakeIcons/icon1.svg' />
                        <h1>Team Surveys & Reports</h1>
                        <span>Short, anonymous surveys track your<br>
                        </br>team’s needs weekly so you can focus.</span>
                    </div>
                    <div className={styles.banner}>
                        <img src='./assets/MakeIcons/icon2.svg' />
                        <h1>Collaborative 1:1</h1>
                        <span>Build relationships by planning <br>
                        </br>1-on-1s and start meetings.</span>
                    </div>
                    <div className={styles.banner}>
                        <img src='./assets/MakeIcons/icon3.svg' />
                        <h1>Learning Center</h1>
                        <span>Quickly get solutions tailored to your<br>
                        </br>personal challenges from the manager.</span>
                    </div>
                </div>
                <div className={styles.makeTwo}>
                    <div className={styles.banner}>
                        <img src='./assets/MakeIcons/icon4.svg' />
                        <h1>Anonymous Messaging</h1>
                        <span>Develop trust in a safe channel for<br>
                        </br>important conversations.</span>
                    </div>
                    <div className={styles.bannerFive}>
                        <img src='./assets/MakeIcons/icon5.svg' />
                        <h1>Conversation Engine</h1>
                        <span>Communicate confidently with<br>
                        </br>recommended talking points.</span>
                    </div>
                    <div className={styles.banner}>
                        <img src='./assets/MakeIcons/icon6.svg' />
                        <h1>Exclusives Manager</h1>
                        <span>Access manager tips, activities and<br>
                        </br>best practices from our team of experts.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Make;