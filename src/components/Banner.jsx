import React, {useState} from 'react';
import styles from './Banner.module.css';

function Banner(props) {
  const [orderCall, setOrderCall] = useState(false);
  function showHideForm() { setOrderCall(!orderCall) };

  return (
    <section className={styles.banner} >
      <div 
        className={styles.modal} 
        style={orderCall ? { display:'block'} : {display : 'none'}} 
        onClick={showHideForm} 
      >
        <div className={styles.modalForm}>
          <div className={styles.formContainer}>
            <h2>Замовте дзвінок - і ми зв'яжемося з Вами у найкоротший час</h2>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label htmlFor='name'>Ім'я:</label>
              <input name='name' placeholder="Ваше ім'я..." type='text' />
              <label htmlFor='email'>Телефон:</label>
              <input name='email' placeholder='Ваш телефон...' type='email' />
              <button type='submit' >НАДІСЛАТИ</button>
            </form>
          </div>
          <div className={styles.modalClose}>
            <span>&#x2716;</span>
          </div>
        </div>
      </div>

      <div 
        className={styles.background} 
        style={{
          backgroundImage: `url("${props.image}")`, 
          filter: `brightness(${props.brightness}%) contrast(${props.contrast}%)`
        }}
      >
      </div>

      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.infoTitle}>{props.title}</span>
          <div className={styles.children}>
            {props.children}
          </div>
          <button className={styles.infoBtn} onClick={showHideForm}>ЗАМОВИТИ КОНСУЛЬТАЦІЮ</button>
        </div>
      </div>
    </section>
  )
}

export default Banner;
