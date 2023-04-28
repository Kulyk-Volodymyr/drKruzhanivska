import React from 'react';
import styles from './Team.module.css';

function Employee(props) {
  return (
    <div className={styles.employee}>
        <div className={styles.employeeContainer}>
            <div className={styles.employeePhoto}>
                <img src={props.photo} alt="photo" />
            </div>
            <div className={styles.employeeBg1}></div>
            <div className={styles.employeeInfo}>
                <h3>{props.name}</h3>
                <h3>{props.lastName}</h3>
                <p>{props.specialty}</p>
            </div>
        </div>
        <div className={styles.employeeBg1}></div>
        <div className={styles.employeeBg2}></div>
    </div>
  )
}

export default Employee;