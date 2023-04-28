import React from 'react';
import styles from './Reviews.module.css';
import pic from '../../../assets/banners/woman-cosmetology-studio-procedures.jpg';

function Reviews() {
  return (
    <section className={styles.reviews}>
        <div className={styles.container}>

          <div  className={styles.infoContainer}>
            <h2>Ми працюємо, щоб втілити Ваші побажання на найвищому рівні.</h2>
            <p>Після процедур у Dr.Kruzhanivska шкіра сяє, ти почуваєшся впевнено, 
              а замість музики доводиться слухати компліменти. Ось що про це говорять наші клієнти:
            </p>
          </div>
        </div>

          <div className={styles.reviewContainer}>

            <div className={styles.reviewLeftGradient}></div>
            
            <div className={styles.review}>
              <p>Це справді дуже дорого відвідувати Вашу клініку! Адже після процедур по корекціїі фігури, рекомендованих Вашим масажистом, мені довелось змінити більшу частину свого гардеробу! Давно я вже не відчувала себе так легко, вільно  і здорово!</p>
              <h3>Оксана Радченко</h3>
            </div>

            <div className={styles.review}>
              <p>Відвідавши Вашу клініку, получила море задоволення, як від процедури, так і від атмосфери, яка там панує. З впевненістю, можу сказати, що прийду до Вас ще не один раз.</p>
              <h3>Марта Біла</h3>
            </div>

            <div className={styles.review}>
              <p>Я у великому захваті! Сервіз дуже хороший, завжди пропонують і чай з кавою, я просто душевну компанію) Самі послуги супер, була і на чистці, і на ін'єкціях - дуже задоволена. Роблять якісно, гігієнічно, безболісно. </p>
              <h3>Світлана Лісна</h3>
            </div>

            <div className={styles.review}>
              <p>Я помолодшала на 10-15 років відразу ж. Ціни доступні. Персонал надзвичайно ввічливий, акуратний, чемний, впевнений та професійний.</p>
              <h3>Вероніка Вій</h3>
            </div>

            <div className={styles.review}>
              <p>Дякую дівчаткам - косметологам за те, що даєте можливість відчути себе красивою, і від того щасливою) Чудовий салон, який тепер є моїм улюбленим. Ви найкращі!!! </p>
              <h3>Ірина Зарічна</h3>
            </div>

            <div className={styles.reviewRightGradient}></div>

          </div>
          
        
    </section>
  )
}

export default Reviews;