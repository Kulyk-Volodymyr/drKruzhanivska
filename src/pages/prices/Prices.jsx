import React from 'react';
import styles from './Prices.module.css';
import Banner from "../../components/Banner";
import {BANNERS} from '../../data/banners';

function Prices() {
  return (
    <main>
      <Banner 
        title={BANNERS.prices.title} 
        text={BANNERS.prices.text} 
        image={BANNERS.prices.image} 
        brightness={BANNERS.prices.brightness} 
        contrast={BANNERS.prices.contrast} 
      >
        <div className={styles.banner}>
          <p>Ut orci augue, lacinia scelerisque dapibus ac, fermentum auctor eros. 
            Duis quam nibh, aliquet vel justo ut, porttitor eleifend lacus. Nullam 
            vestibulum sapien eget viverra accumsan. Duis dictum massa ut porta posuere. 
            Curabitur vitae ullamcorper massa. Etiam congue elit velit, eget porttitor 
            ante aliquam ac. Nunc viverra arcu nec nisl aliquet, et ornare mi suscipit. 
            Donec fringilla aliquam nunc, sed volutpat massa posuere at.
          </p>
        </div>
      </Banner>

      <section className={styles.section}>
        <h2>Естетична косметологія</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Консультація</td><td>500грн</td>
            </tr>
            <tr>
              <td>Мікротоки</td><td>1000грн</td>
            </tr>
            <tr>
              <td>Пілінги</td><td>800-1500грн</td>
            </tr>
            <tr>
              <td>BioRePeel (пілінг)</td><td>1300грн</td>
            </tr>
            <tr>
              <td>Карбокситерапія (DECCAR)</td><td>1000грн</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2>Ін’єкційна косметологія</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Консультація</td><td>500грн</td>
            </tr>
            <tr>
              <td>Контурна пластика губ Juvaderm</td><td>6000-8000грн</td>
            </tr>
            <tr>
              <td>Контурна пластика губ Teosyal</td><td>6000-8000грн</td>
            </tr>
            <tr>
              <td>Контурна пластика губ Belotero</td><td>6000-8000грн</td>
            </tr>
            <tr>
              <td>Контурна пластика губ Neuramis</td><td>4200-4900грн</td>
            </tr>
            <tr>
              <td>Мезотерапія Lamik</td><td>1000грн</td>
            </tr>
            <tr>
              <td>Мезотерапія Lamik (обличчя + шия)</td><td>1000грн</td>
            </tr>
            <tr>
              <td>Зволоження Ericsson</td><td>1900грн</td>
            </tr>
            <tr>
              <td>Біоревіталізація</td><td>3000-4000грн</td>
            </tr>
            <tr>
              <td>Мезотерапія</td><td>1200-1800грн</td>
            </tr>
            <tr>
              <td>Мезотерапія шкіри голови (проти випадіння волосся)</td><td>1200-1700грн</td>
            </tr>
            <tr>
              <td>Філлер для стимуляції росту, укріплення волосся</td><td>4800грн</td>
            </tr>
            <tr>
              <td>Ботулінотерапія</td><td>1700 грн/зона</td>
            </tr>
            <tr>
              <td>Бланшинг Belotero</td><td>5500грн</td>
            </tr>
            <tr>
              <td>Ботулінотерапія проти гіпергідрозу (надмірне потовиділення)</td><td>1300грн</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2>Дерматологія</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Консультація</td><td>500грн</td>
            </tr>
            <tr>
              <td>Чистка обличчя</td><td>1000грн</td>
            </tr>
            <tr>
              <td>Чистка обличчя + пілінг</td><td>1100грн</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2>Масаж</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Консультація</td><td>500грн</td>
            </tr>
            <tr>
              <td>Масаж обличчя</td><td>850грн</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default Prices;