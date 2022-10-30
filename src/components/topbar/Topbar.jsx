import styles from './topbar.module.css';

function Topbar() {
    return ( 
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.logo} >
                    <span>team.flow</span>
                </div>
                <div className={styles.menu}>
                    <span>How it Works</span>
                    <span>Product</span>
                    <span>Pricing</span>
                    <span>Resources</span>
                    <span>Log in</span>
                </div>
                <div className={styles.get} >
                    <button>Get started free</button>
                </div>
            </div>
        </div>
     );
}

export default Topbar;