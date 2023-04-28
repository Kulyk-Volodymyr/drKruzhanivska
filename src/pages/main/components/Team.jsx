import React from 'react';
import styles from './Team.module.css';
import Employee from './Employee';
import {EMPLOYEES} from '../../../data/employees';

function Team() {
  return (
    <section className={styles.team}>
        <div className={styles.container}>

          <div className={styles.aboutTeam}>
            <h2>Всі маніпуляції абсолютно безпечні, адже їх роблять професіонали.</h2>
            <p>В нас успішно працюють дипломовані косметологи і дерматологи, 
              які мають необхідний багаж знань в даному напрямку і не перестають удосконалюватися. 
              Їх досвід дозволяє приймати правильні рішення і підбирати найефективніші способи 
              для боротьби з естетичними проблемами.
            </p>
          </div>

          <div className={styles.employees}>
            {EMPLOYEES.map((employee, key) => {
              return (
                <Employee 
                  key={key}
                  name={employee.name} 
                  lastName={employee.lastName} 
                  specialty={employee.specialty}
                  photo={employee.photo}
                />
              )
            })}
          </div>
        </div>
    </section>
  )
}

export default Team;