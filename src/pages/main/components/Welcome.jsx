import React from 'react';
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <section className={styles.welcome}>
        <div className={styles.container}>
            <h1>Завітайте до нас!</h1>
            <h3>Чекаємо на Вас за адресою: м. Львів, вул. Бортнянського 23</h3>
            <h3>Працюємо від понеділка до суботи з 10.00 до 20.00</h3>
        </div>
    </section>
  )
}

export default Welcome;