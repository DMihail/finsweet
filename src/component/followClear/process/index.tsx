import React from "react";
import styles from "./Process.module.scss";
import {ReactComponent as DottedLine} from "../../../assets/svg/DottedLine.svg";

type Props = {
    title: string,
    description: string
    point: number
}

function Process({title, description, point}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.container__point}>
                0{point}
            </div>

            <div className={styles.container__title}>{title}</div>
            <div className={`${styles.container__dottedLine} ${point === 3 && styles.hide}`}>
                <DottedLine/>
            </div>
            <div className={styles.container__subtitle}>{description}</div>
        </div>
    );
}

export default Process;
