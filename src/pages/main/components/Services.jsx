import React from 'react';
import styles from './Services.module.css';
import Service from './Service';
import {SERVICES} from '../../../data/services';

function Services() {
  return (
    <section className={styles.services}>

      <div className={styles.container}>

          <div className={styles.aboutServices}>
            <h1>Отримайте результат, який залишиться на тривалий період.</h1>
            <p>Центр естетичної медицини надає широкий спектр послуг, 
              більшість з яких затребувані не тільки серед жінок, а й серед чоловіків. 
              І це не просто гучні слова, адже наш клієнт дійсно може вдосконалюватися, 
              вибираючи один із наступних напрямків:
            </p>
          </div>

      </div>

      <div className={styles.servicesContainer}>

        <div className={styles.ourServices}>
            {SERVICES.map((service) => {
              return (
                <Service 
                  key={service.id}
                  id={service.id} 
                  title={service.title} 
                  image={service.image} 
                />
              )
            })}
        </div>

        <div className={styles.imgBg1}></div>
        <div className={styles.imgBg2}></div>

      </div>

    </section>
  )
}

export default Services;