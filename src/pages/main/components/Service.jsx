import React from 'react';
import {Link} from "react-router-dom";
import styles from './Services.module.css';

function Service(props) {
  return (
    <div className={styles.service}>

        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <h2>{props.title}</h2>
                <a href={`/services#${props.id}`} >ДІЗНАТИСЬ БІЛЬШЕ</a>
            </div>
        </div>

        <div className={styles.image}>
            <img src={props.image} alt={props.title} />
        </div>

        <div className={styles.border}></div>
    </div>
  )
}

export default Service;


//<button className={styles.infoBtn} ><Link to="/services" onClick={() => document.getElementById(props.id).scrollIntoView()}>ДІЗНАТИСЬ БІЛЬШЕ</Link></button>