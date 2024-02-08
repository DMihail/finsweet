import React from 'react';
import styles from "./service.module.scss";

type Props = {
    icon:JSX.Element;
    title: string
}

function Service({icon, title}: Props) {
    return (
        <div className={styles.container} >
            {icon}
            <span className={styles.container__title}>{title}</span>
        </div>
    );
}

export default Service;
