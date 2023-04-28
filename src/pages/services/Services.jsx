import React from "react";
import styles from "./Services.module.css";
import Banner from "../../components/Banner";
import {BANNERS} from '../../data/banners';
import {SERVICES} from '../../data/services';
import Article1 from "./Article1";
import Article2 from "./Article2";
import pic1 from '../../assets/gallery/lips1.JPEG';
import pic2 from '../../assets/gallery/lips2.JPEG';

function Services() {
    return (
        <main>
            <Banner 
                title={BANNERS.services.title} 
                text={BANNERS.services.text} 
                image={BANNERS.services.image} 
                brightness={BANNERS.services.brightness} 
                contrast={BANNERS.services.contrast} 
            >
                <div className={styles.banner}>
                    <p>Cras in ullamcorper nunc, ac imperdiet dui. Class aptent taciti 
                        sociosqu ad litora torquent per conubia nostra, per inceptos 
                        himenaeos. Aliquam faucibus tortor eget dui volutpat, at 
                        sollicitudin felis aliquet. Sed laoreet vitae lacus non sagittis. 
                        Nulla condimentum, velit quis pulvinar egestas, est odio luctus 
                        nulla, non efficitur lacus sapien in massa. Duis tempus a neque 
                        aliquam suscipit. Cras a nunc felis. Vestibulum id dignissim ante.
                    </p>
                </div>
            </Banner>
            <div className={styles.container}>

                <section className={styles.section} id={SERVICES[0].id}>
                    <h1>Естетична косметологія</h1>
                    <Article1 image={SERVICES[0].image} />
                    <Article2 image1={pic1} image2={pic2} />
                </section>

                <section className={styles.section} id={SERVICES[1].id}>
                    <h1>Ін'єкційна косметологія</h1>
                    <Article1 image={SERVICES[1].image} />
                    <Article2 image1={pic1} image2={pic2} />
                </section>

                <section className={styles.section} id={SERVICES[2].id}>
                    <h1>Дерматологія</h1>
                    <Article1 image={SERVICES[2].image} />
                    <Article2 image1={pic1} image2={pic2} />
                </section>

                <section className={styles.section} id={SERVICES[3].id}>
                    <h1>Масаж</h1>
                    <Article1 image={SERVICES[3].image} />
                    <Article2 image1={pic1} image2={pic2} />
                </section>

            </div>
        </main>
    );
};

export default Services;