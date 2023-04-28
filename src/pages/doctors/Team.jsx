import React from "react";
import styles from "./Team.module.css";
import doctor1 from '../../assets/team/kryzhanivska.jpg';
import doctor2 from '../../assets/team/cosmetolog.jpg';
import doctor3 from '../../assets/team/stebelska.jpg';

function Team() {
    return (
        <div className={styles.container}>

            <section className={styles.doctor}>
                <div className={styles.image}>
                    <div className={styles.imgContainer}>
                        <img src={doctor1} alt="Тетяна Крижанівська" />
                    </div>
                    <div className={styles.imgBg1}></div>
                    <div className={styles.imgBg2}></div>
                </div>
                <div className={styles.info}>
                    <h2>Тетяна Крижанівська</h2>
                    <h3>SEO, лікар косметолог</h3>
                    <p><b>Медична спеціалізація:</b> лікар-дерматовенеролог</p>
                    <p><b>Лікарський досвід:</b> 12 років</p>
                    <p>На сьогоднішній день природність зовнішності буде найкращим трендом! Важливою частиною нашої роботи 
                        є омолодження і гармонізація Вашої зовнішності. Це неможливо зробити без здорової шкіри, тому 
                        ми починаємо працювати з шкірою, адже тільки здорова шкіра буде гарантувати «Вау» ефект! У клініці 
                        ми використовуємо останні розробки у сфері естетичної медицини, зібрані з усього світу. У своїй роботі 
                        я люблю поєднувати апаратні та ін’єкційні процедури, вважаю, вони прекрасно доповнюють один одного. 
                        Ін’єкційні методики – посилять регенерацію шкіри. Після пройденого курсу – стимулюється мікроциркуляція 
                        шкіри, яка попереджає набряк і нездоровий колір обличчя. Шкіра буде краще протистояти погодним явищем 
                        і згубних звичок. Апаратні методикі  посилюють вироблення колагену і еластину і забезпечить тотальний 
                        3D ліфтинг ефект на всіх рівнях дерми, робить рельєф шкіри рівним, розгладжує зморшки. 
                        У підсумку – пацієнти завжди отримують прекрасний видимий результат, при цьому зберігши природність 
                        і гармонійні пропорції своєї неповторною зовнішності.
                    </p>
                    <p><b>Освіта та курси:</b></p>
                    <ul>
                        <li>2019 Сертифікат про проходження курсів «корекція мімічних зморшок препаратом Диспорт» (Київ, Львів)</li>
                        <li>2018 Сертифікат про проходження навчання з професійної косметики Holy Land (1, 2 рівень) (Львів)</li>
                        <li>2018 Сертифікат учасника науково-практичної конференції “Сучасні аспекти діагностики та лікування хронічних дерматозів в рамках доказової медицини” (Львів)</li>
                        <li>2018 Сертифікат учасника Sensetive Skin Conference (Львів)</li>
                        <li>2018 Сертифікат учасника науково-практичної конференції «Актуальні питання дерматоонкології» (Київ)</li>
                        <li>2018 Сертифікат учасника Dermoscopy Congress 2018 (Thessaloniki, Greece)</li>
                        <li>2018 Сертифікат про проходження курсів «Базова косметологія» в школі Тетяни Луцик (Львів)</li>
                        <li>2019 Сертифікат учасника UHRS second congress (international trichoscopy course) (Київ)</li>
                        <li>2017-2019-інтернатура з дерматовенерології у ЛНМУ.</li>
                        <li>2011-2017 рр. – навчалася в ЛНМУ ім. Данила Галицького</li>
                    </ul>
                </div>
            </section>

            <section className={styles.doctor}>
                <div className={styles.image}>
                    <div className={styles.imgContainer}>
                        <img src={doctor2} alt="Таїсія Косметолог" />
                    </div>
                    <div className={styles.imgBg1}></div>
                    <div className={styles.imgBg2}></div>
                </div>
                <div className={styles.info}>
                    <h2>Таїсія Косметолог</h2>
                    <h3>Лікар косметолог</h3>
                    <p><b>Медична спеціалізація:</b> лікар-дерматовенеролог</p>
                    <p><b>Лікарський досвід:</b> 11 років</p>
                    <p>Своєю метою вважаю донести до людей, що шкіра – це орган, навіть не так – це найбільший орган нашого тіла! 
                        І про неї потрібно піклуватися. Любити її і розуміти, що все, що вона нам «показує», йде зсередини. 
                        Тому, щоб досягнути зовнішньої краси та гармонії, потрібно зазирнути організм ближче. Буду рада 
                        допомогти Вам відшукати свою гармонію.
                    </p>
                    <p><b>Освіта та курси:</b></p>
                    <ul>
                        <li>2019 Сертифікат про проходження курсів «корекція мімічних зморшок препаратом Диспорт» (Київ, Львів)</li>
                        <li>2018 Сертифікат про проходження навчання з професійної косметики Holy Land (1, 2 рівень) (Львів)</li>
                       
                        <li>2011-2017 рр. – навчалася в ЛНМУ ім. Данила Галицького</li>
                    </ul>
                </div>
            </section>

            <section className={styles.doctor}>
                <div className={styles.image}>
                    <div className={styles.imgContainer}>
                        <img src={doctor3} alt="Дарина Стебельська" />
                    </div>
                    <div className={styles.imgBg1}></div>
                    <div className={styles.imgBg2}></div>
                </div>
                <div className={styles.info}>
                    <h2>Дарина Стебельська</h2>
                    <h3>Лікар дерматолог</h3>
                    <p><b>Медична спеціалізація:</b> лікар-дерматовенеролог</p>
                    <p><b>Лікарський досвід:</b> 8 років</p>
                    <p><b>Освіта та курси:</b></p>
                    <ul>
                        <li>2019 Сертифікат про проходження курсів «корекція мімічних зморшок препаратом Диспорт» (Київ, Львів)</li>
                        <li>2018 Сертифікат про проходження навчання з професійної косметики Holy Land (1, 2 рівень) (Львів)</li>
                        <li>2018 Сертифікат учасника науково-практичної конференції “Сучасні аспекти діагностики та лікування хронічних дерматозів в рамках доказової медицини” (Львів)</li>
                        <li>2018 Сертифікат учасника Sensetive Skin Conference (Львів)</li>
                        <li>2018 Сертифікат учасника науково-практичної конференції «Актуальні питання дерматоонкології» (Київ)</li>
                        <li>2018 Сертифікат учасника Dermoscopy Congress 2018 (Thessaloniki, Greece)</li>
                        <li>2018 Сертифікат про проходження курсів «Базова косметологія» в школі Тетяни Луцик (Львів)</li>
                        <li>2019 Сертифікат учасника UHRS second congress (international trichoscopy course) (Київ)</li>
                        <li>2017-2019-інтернатура з дерматовенерології у ЛНМУ.</li>
                        <li>2011-2017 рр. – навчалася в ЛНМУ ім. Данила Галицького</li>
                    </ul>
                </div>
            </section>

        </div>
    );
};

export default Team;