import React from 'react';
import Navbar from "./Navbar/Navbar";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>eLib</div>
            <div className={styles.navbar}>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;