import styles from './team.module.css';

function Team() {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.chat}>
                    <img src="./assets/img2.svg" />
                </div>
                <div className={styles.team}>
                    <div className={styles.teamTitle}>
                        <h1>Survey your team</h1>
                        <span>Powerful questions that get to the heart<br>
                        </br> of how team members really feel.</span>
                    </div>
                    <div className={styles.teamText}>
                        <h1>Resolve issues quickly</h1>
                        <span>Anonymous messaging that connects<br>
                        </br> employees and teams.</span>
                    </div>
                    <div className={styles.teamText}>
                        <h1>Plan your 1-on-1s</h1>
                        <span>Plan meetings together and give a stake<br>
                        </br> of how team members really feel.</span>
                    </div>
                    <div className={styles.teamText}>
                        <h1>Track your progress</h1>
                        <span>Easy-to-read reports and sharable <br>
                        </br> results help managers and teams.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;