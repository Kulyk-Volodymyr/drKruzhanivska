import React from 'react';
import styles from './Prices.module.css';
import pic from '../../../assets/banners/cosmetologist-showing.jpg';
import {Link} from "react-router-dom";

function Prices() {
  return (
    <section className={styles.prices}>

      <div className={styles.info}>
        <div className={styles.infoContainer}>
          <div className={styles.infoData}>
            <h2>Завжди раді бачити Вас у нашій клініці.</h2>
            <p>Ми зробимо все можливе, щоб Ви відчували себе комфортно 
              та були задоволені результатами нашої спільної праці.
            </p>
            <ul>
              <li>естетична косметологія: 500 - 1500 грн</li>
              <li>ін'єкційна косметологія: 500 - 8000 грн</li>
              <li>дерматологія: 500 - 1100 грн</li>
              <li>масаж: 500 - 850 грн</li>
            </ul>
            <Link to="/prices" >
              <button className={styles.infoBtn} onClick={() => window.scroll(0, 0)}>ДІЗНАТИСЯ ВСІ ЦІНИ</button>
            </Link>
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

export default Prices;
