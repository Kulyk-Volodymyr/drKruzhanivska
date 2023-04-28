import React from 'react';
import styles from './MapAndForm.module.css'

function MapAndForm() {
  return (
    <section className={styles.section}>
        <div className={styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1574.6517485909849!2d24.003153910586718!3d49.84532443424244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1678529687202!5m2!1suk!2sua" allowFullScreen={""} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
        </div>
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Напишіть нам:</h1>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor='name'>Ім'я:</label>
                        <input name='name' placeholder="Ваше ім'я..." type='text' />
                        <label htmlFor='email'>E-mail:</label>
                        <input name='email' placeholder='Ваш e-mail...' type='email' />
                        <label htmlFor='message'>Повідомлення:</label>
                        <textarea placeholder='Ваше повідомлення...' name='message'></textarea>
                        <button type='submit'>НАДІСЛАТИ</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MapAndForm;

//<input name='phone' placeholder='+380-(__)-___-__-__*' dataMask='+380-(__)-___-__-__*' type='phone' />