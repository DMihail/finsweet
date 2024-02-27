import React from "react";
import Logo from "../../assets/svg/LogoWhite.svg";
import styles from "./index.module.scss";
import { ReactComponent as Facebook } from "../../assets/svg/social/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svg/social/Instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/svg/social/LinkedIn.svg";
import { ReactComponent as Twitter } from "../../assets/svg/social/Twitter.svg";
import { navs } from "../hero";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__footerTop}>
        <div className={styles.footer__container}>
          <div className={styles.footer__footerTop__sideContainer}>
            <div>
              <div>
                <h2>Get in touch with us for your service</h2>
              </div>
              <div className={styles.footer__footerTop__socialBox}>
                <a href={"https://uk-ua.facebook.com/"} target={"_blank"} rel="noreferrer">
                  <Facebook />
                </a>
                <a href={"https://twitter.com/i/flow/login"} target={"_blank"} rel="noreferrer">
                  <Twitter />
                </a>
                <a href={"https://www.instagram.com/"} target={"_blank"} rel="noreferrer">
                  <Instagram />
                </a>
                <a href={"https://ua.linkedin.com/"} target={"_blank"} rel="noreferrer">
                  <LinkedIn />
                </a>
              </div>
            </div>

            <div className={styles.footer__serviceData}>
              <div>
                <p className={styles.footer__serviceData_title}>
                  Help line Noumber
                </p>
                <p className={styles.footer__serviceData_value}>
                  1800 265 24 52
                </p>
              </div>

              <div>
                <p className={styles.footer__serviceData_title}>Address</p>
                <p className={styles.footer__serviceData_value}>
                  NH 234 Public Square San Francisco 65368
                </p>
              </div>

              <div>
                <p className={styles.footer__serviceData_title}>We are open</p>
                <p className={styles.footer__serviceData_value}>
                  Monday to Friday 9:00 AM to 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__footerBottom}>
        <div className={styles.footer__container}>
          <div className={styles.footer__footerBottom__content}>
            <div>
              <a href={"/"}>
                <img src={Logo} alt={"White Logo"} />
              </a>
            </div>

            <div className={styles.footer__footerBottom__ways}>
              {navs.map((item) => (
                <div key={item}>
                  <a href={`#${item}`}>{item}</a>
                </div>
              ))}
            </div>

            <div>@ Copyright Finsweet 2024</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
