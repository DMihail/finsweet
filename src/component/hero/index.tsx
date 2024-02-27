import React from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/svg/Logo.svg";
import AssistanceIcon from "../../assets/svg/AssistanceIcon.svg";
import HeaderImage from "../../assets/images/Image.png";
import Stars from "../../assets/svg/Stars.svg";

export const navs = ["Home", "About us", "Services", "Blog", "Contact"];

function Hero() {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.container}>
          <div className={styles.header__top__inner}>
            <a className={styles.header__logo} href={"/"}>
              <img src={Logo} alt={"Logo"} />
            </a>
            <nav className={styles.header__nav}>
              <ul className={styles.header__nav__list}>
                {navs.map((item) => (
                  <li className={styles.header__nav__item} key={item}>
                    <a href={"#"} className={styles.header__nav__link}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.header__btnBox}>
              <a className={styles.header__btn} href={"tel:1800 265 24 52"}>
                <img src={AssistanceIcon} alt={"Assistance"} />
              </a>
              <div className={styles.header__btn__description}>
                <div className={styles.header__btn__description__title}>
                  Road Assistance
                </div>
                <div className={styles.header__btn__description__tel}>
                  1800 265 24 52
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header__body}>
        <div className={styles.container}>
          <div className={styles.header__content}>
            <div className={styles.header__textContent}>
              <h1 className={styles.header__title}>
                Get your vehicle service done online at one place
              </h1>
              <div className={styles.header__btnBox}>
                <button type={"button"} className={styles.button}>
                  Book a service
                </button>
                <button
                  type={"button"}
                  className={`${styles.button} ${styles.playVideo}`}
                >
                  <span>Play Video</span>
                </button>
              </div>
              <div className={styles.header__openBlock}>
                <div>
                  <div className={styles.header__openBlock__title}>
                    We are open
                  </div>
                  <div className={styles.header__openBlock__subTitle}>
                    Monday to Friday 9:00 AM to 10:00 AM
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.header__imageContent}>
              <img src={HeaderImage} alt={"the master fixes the car"} />
              <div
                className={`${styles.header__advertising} ${styles.header__service}`}
              >
                <div className={styles.header__advertising__time}>
                  <span>24</span>
                  <span className={styles.header__advertising__time_hr}>
                    hr
                  </span>
                </div>
                <span>Quick service</span>
              </div>
              <div
                className={`${styles.header__advertising} ${styles.header__rating}`}
              >
                <div className={styles.header__advertising__gradeBox}>
                  <div>4.5/5</div>
                  <div className={styles.header__advertising__gradeBox_rating}>
                    Rating
                  </div>
                </div>
                <img src={Stars} alt={"service Rating"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
