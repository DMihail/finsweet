import React, { useState } from "react";
import styles from "./Questiion.module.scss";
import { ReactComponent as Appear } from "../../../assets/svg/appear.svg";
import { ReactComponent as Disappear } from "../../../assets/svg/disappear.svg";

type Props = {
  title: string;
  description: string;
};

function FrequentlyQuestions({ title, description }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.container} ${open && styles.container__apear}`}>
      <div className={styles.container__textContainer}>
        <div className={styles.container__title}>{title}</div>
        {open && (
          <div className={styles.container__description}>{description}</div>
        )}
      </div>

      <a type={"button"} onClick={() => setOpen(!open)}>
        {!open ? <Appear /> : <Disappear />}
      </a>
    </div>
  );
}

export default FrequentlyQuestions;
