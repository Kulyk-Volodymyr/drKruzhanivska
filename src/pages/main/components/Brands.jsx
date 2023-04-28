import React from 'react';
import styles from './Brands.module.css';
import pic from '../../../assets/banners/young-woman-having-facial-treatment.jpg';
import {BRANDS} from '../../../data/brands';

function Brands() {
    return (
        <section className={styles.brands}>

            <div className={styles.image}>
                <div className={styles.imgContainer}>
                    <img src={pic} alt="Естетична косметологія" />
                </div>
                <div className={styles.imgBg1}></div>
                <div className={styles.imgBg2}></div>
                <div className={styles.imgBg3}></div>
            </div>

            <div className={styles.info}>
                <div className={styles.infoContainer}>
                    <h2>Ми відповідальні за кожного Клієнта.</h2>
                    <p>Тому в своїй роботі ми використовуємо продукцію кращих виробників.</p>
                    <div className={styles.brandsContainer}>
                        {BRANDS.map((brand, key) => {
                            return (
                                <div className={styles.brand} key={key}>
                                    <img src={brand} alt="brand"/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands;