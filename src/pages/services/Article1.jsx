import React from 'react';
import styles from "./Article1.module.css";
import Text from './Text';

function Article1(props) {
    return (
        <article  className={styles.article}>

            <div className={styles.image}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={props.image} alt="photo" />
                    </div>
                    <div className={styles.imgBg1}></div>
                    <div className={styles.imgBg2}></div>
                    <div className={styles.imgBg3}></div>
                </div>
            </div>

            <div className={styles.info}>
                <Text />
            </div>

        </article>
    )
}

export default Article1;