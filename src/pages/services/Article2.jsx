import React from 'react';
import styles from "./Article2.module.css";
import Text from './Text';

function Article2(props) {
    return (
        <article  className={styles.article}>

            <div className={styles.image}>
                <h2>Результати нашої роботи:</h2>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={props.image1} alt="photo" />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={props.image2} alt="photo" />
                    </div>
                </div>
                <button type='submit'>БІЛЬШЕ</button>
            </div>

            <div className={styles.info}>
                <Text />
            </div>

        </article>
    )
}

export default Article2;