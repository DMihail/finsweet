import React from 'react';
import HeaderBody from "./headerBody";
import styles from "./index.module.scss";
import Logo from "../../assets/svg/Logo.svg";
import AssistanceIcon from "../../assets/svg/AssistanceIcon.svg";

const navs = [
    'Home',
    "About us",
    "Services",
    "Blog",
    "Contact"
];

function Hero() {
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className={styles.container}>
                    <div className={styles.header__top__inner}>
                        <a className={styles.header__logo} href={'/'}>
                            <img src={Logo} alt={'Logo'}/>
                        </a>
                        <nav className={styles.header__nav}>
                            <ul className={styles.header__nav__list}>
                                {
                                    navs.map(item => (
                                        <li className={styles.header__nav__item} key={item}>
                                            <a href={'#'} className={styles.header__nav__link}>{item}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>

                        <div className={styles.header__btnBox}>
                            <a className={styles.header__btn} href={'tel:1800 265 24 52'}>
                                <img src={AssistanceIcon} alt={'Assistance'}/>
                            </a>
                            <div className={styles.header__btn__description}>
                                <div className={styles.header__btn__description__title}>
                                    Road Assistance
                                </div>
                                <div className={styles.header__btn__description__title}>
                                    1800 265 24 52
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderBody/>
        </header>
    );
}

export default Hero;
