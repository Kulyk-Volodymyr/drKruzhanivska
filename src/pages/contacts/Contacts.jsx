import React from 'react';
import styles from './Contacts.module.css';
import Banner from "../../components/Banner";
import {BANNERS} from '../../data/banners';
import MapAndForm from "../../components/MapAndForm";

function Contacts() {
  return (
    <main>
      <Banner 
        title={BANNERS.contacts.title} 
        text={BANNERS.contacts.text} 
        image={BANNERS.contacts.image} 
        brightness={BANNERS.contacts.brightness} 
        contrast={BANNERS.contacts.contrast} 
      >
        <div className={styles.banner}>
          <h3>Львів, вул. Бортнянського 23</h3>
          <p>Телефон: +38 (050) 980 2592</p>
          <p>E-mail: kruganivska@ukr.net</p>
          <br />
          <h3>Графік роботи:</h3>
          <p>понеділок - субота: 10.00 - 20.00</p>
          <p>неділя: вихідний</p>
        </div>
      </Banner>
      <MapAndForm />
    </main>
  )
}

export default Contacts;