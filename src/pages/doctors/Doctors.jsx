import React from "react";
import styles from "./Doctors.module.css";
import Banner from "../../components/Banner";
import {BANNERS} from '../../data/banners';
import Team from './Team';

function Doctors() {
    return (
        <main>
            <Banner 
                title={BANNERS.doctors.title}
                text={BANNERS.doctors.text} 
                image={BANNERS.doctors.image} 
                brightness={BANNERS.doctors.brightness} 
                contrast={BANNERS.doctors.contrast} 
            >
                <div className={styles.banner}>
                    <p>Ut molestie venenatis diam, vitae rhoncus neque tincidunt vel. 
                        Sed facilisis justo ipsum, id malesuada velit lacinia vitae. 
                        Integer lacus eros, sollicitudin quis orci viverra, aliquet porttitor 
                        odio. Suspendisse molestie interdum metus, eu lacinia ligula sagittis 
                        eu. Nulla risus sapien, vulputate et arcu a, maximus finibus nisl. 
                        Cras pulvinar, nibh et placerat egestas, ipsum sem consequat turpis, 
                        eu feugiat justo massa sed libero. Proin eleifend, eros at interdum 
                        ornare, odio magna mollis ante, eu maximus nulla ante quis sem.
                    </p>
                </div>
            </Banner>
            <Team />
        </main>
    );
};

export default Doctors;