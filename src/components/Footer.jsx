import React from "react";
import styles from "./Footer.module.css";
import logo from '../assets/logo-big-white.png';
import Instagram from '../assets/instagram-icon.png';

function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <img src={logo} alt="Dr.Kruzhanivska" />
                    </div>
                    <div className={styles.services}>
                        <p>Наші послуги:</p>
                        <p>Естетична косметологія</p>
                        <p>Ін'єкційна косметологія</p>
                        <p>Дерматологія</p>
                        <p>Масаж</p>
                    </div>
                    <div className={styles.contacts}>
                        <div>
                            <p>Графік роботи:</p>
                            <p>Пон. - Суб.: 10.00 - 20.00</p>
                        </div>
                        <div>
                            <p>Львів, вул. Бортнянського 23</p>
                            <p>+38 (050) 980 2592</p>
                            <p>kruganivska@ukr.net</p>
                        </div>
                        <div className={styles.instagram}>
                            <p>Стежте за нами в Instagram &nbsp;</p>
                            <a href="https://www.instagram.com/dr.kruzhanivska/" target='_blank'>
                                <img src={Instagram} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.container}>
                    <p>&copy; Copyright 2023 Dr.Kruzhanivska</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;