import React from "react";
import styles from "./Main.module.css";
import Banner from "../../components/Banner";
import {BANNERS} from '../../data/banners';
import Services from "./components/Services";
import About from "./components/About";
import Team from './components/Team';
import Brands from "./components/Brands";
import Prices from "./components/Prices";
import Reviews from './components/Reviews';
import Welcome from "./components/Welcome";
import MapAndForm from "../../components/MapAndForm";

function Main() {
    return (
        <main>
            <Banner 
                title={BANNERS.main.title} 
                text={BANNERS.main.text} 
                image={BANNERS.main.image} 
                brightness={BANNERS.main.brightness} 
                contrast={BANNERS.main.contrast} 
            >
                <div className={styles.banner}>
                    <p>Центр естетичної медицини Dr.KRUZHANIVSKA — це сучасна клініка естетичної медицини та косметології нового покоління. Ми пропонуємо широкий спектр послуг для збереження і продовження Вашої краси, молодості та здоров’я.</p>
                    <div  className={styles.bannerCite}>
                        <p>"11 років, саме стільки я працюю й буквально живу у прекрасному світі естетичної косметології. Протягом цього часу я вчилась, постійно вдосконалювалась , дуже любила (й люблю) свою роботу. Вважаю, що саме ця цифра дозволяє мені ділитись досвідом, давати поради, показувати результат своєї праці, передавати атмосферу робочих моментів."<br />Тетяна Крижанівська, SEO</p>
                    </div>
                    <p>У нашій клініці представлені інноваційні апаратні методики по догляду за обличчям і тілом, широкий спектр доглядових процедур від провідних космецевтичних брендів, послуги лазерної епіляції, оздоровчого та моделюючого масажу.</p>
                </div>
            </Banner>
            <Services />
            <About />
            <Team />
            <Brands />
            <Prices />
            <Reviews />
            <Welcome />
            <MapAndForm />
        </main>
    );
}

export default Main;