import React from 'react';
import styles from './About.module.css';
import pic from '../../../assets/banners/woman-cosmetology.jpg';

function About() {
  return (
    <section className={styles.about}>

        <div className={styles.info}>
          <div className={styles.infoContainer}>
              <div className={styles.infoData}>
              <h2>В клініці Dr.Kruzhanivska на Вас чекають:</h2>
              <ul>
                <li>кваліфікований персонал</li>
                <li>індивідуальний підхід</li>
                <li>якісний сервіс</li>
                <li>надійне обладнання</li>
                <li>сучасні препарати</li>
                <li>відмінний результат</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <div className={styles.imgContainer}>
            <img src={pic} alt="Естетична косметологія" />
          </div>
          <div className={styles.imgBg1}></div>
          <div className={styles.imgBg2}></div>
          <div className={styles.imgBg3}></div>
        </div>

    </section>
  )
}

export default About;