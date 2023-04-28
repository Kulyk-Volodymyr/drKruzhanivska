import React from "react";
import styles from "./Gallery.module.css";
import Banner from "../../components/Banner";
import {BANNERS} from '../../data/banners';

function Gallery() {
    return (
        <main>
            <Banner 
                title={BANNERS.gallery.title} 
                text={BANNERS.gallery.text} 
                image={BANNERS.gallery.image} 
                brightness={BANNERS.gallery.brightness} 
                contrast={BANNERS.gallery.contrast} 
            >
                <div className={styles.banner}>
                    <p>Donec rhoncus, justo ac dictum pellentesque, tellus libero consequat leo, sed molestie nibh purus non metus. Mauris quis egestas tortor. Duis eu ullamcorper neque. Nunc sed lacus odio. Aenean vel augue egestas, euismod tortor ac, imperdiet enim. Pellentesque tempus varius accumsan. Fusce rutrum, est ut blandit interdum, enim neque fermentum dolor, at ullamcorper neque metus sed lectus.</p>
                </div>
            </Banner>
            <div>
                <h1>Gallery</h1>
            </div>
        </main>
    );
};

export default Gallery;