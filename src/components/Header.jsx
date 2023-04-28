import React from "react";
import styles from "./Header.module.css";
import Instagram from '../assets/instagram-icon.png';
import Navbar from './Navbar';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <div className={styles.infoText}>
                    <p>Львів, вул. Бортнянського 23</p>
                    <p>Стежте за нами в Instagram:</p>
                </div>
                <div className={styles.instagram}>
                    <a href="https://www.instagram.com/dr.kruzhanivska/" target='_blank'>
                        <img src={Instagram} alt='' />
                    </a>
                </div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;