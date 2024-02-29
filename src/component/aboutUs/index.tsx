import React from "react";
import styles from "./index.module.scss";
import CigaretteLighter from '../../assets/images/CigaretteLighter.png'
import CarNumber from '../../assets/images/CarNumber.png'

const advantages = [
    {
        title: 'Proffesional',
        value: '20+'
    },
    {
        title: 'Years Eperience',
        value: '10+'
    },
    {
        title: 'Service Closed',
        value: '12K+'
    },
    {
        title: 'Customer Satisfaction',
        value: '100%'
    },
]

function AboutUs() {
  return (
      <div className={styles.container}>
          <div className={styles.container__imageContainer}>
              <img src={CarNumber} alt={'Rear of the car'}/>
              <img src={CigaretteLighter} alt={'Cigarette Lighter'}/>
              <div className={styles.container__contactUs}>
                  <h3>
                      Get in touch with us for your service related query
                  </h3>
                  <button className={styles.button}>
                      Contact Us
                  </button>
              </div>
          </div>

          <div className={styles.container__advantages}>
              {advantages.map(item => (
                  <div>
                      <h2>
                          {item.value}
                      </h2>
                      <span>
                    {item.title}
                  </span>
                  </div>
              ))}

          </div>

      </div>
  );
}

export default AboutUs;
