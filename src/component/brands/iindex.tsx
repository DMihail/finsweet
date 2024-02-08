import React from 'react';
import styles from "./index.module.scss";
import { ReactComponent as Logo1} from '../../assets/svg/brands/logo-11.svg'
import { ReactComponent as Logo2} from '../../assets/svg/brands/logo-12.svg'
import { ReactComponent as Logo3} from '../../assets/svg/brands/logo-3.svg'
import { ReactComponent as Logo4} from '../../assets/svg/brands/logo-31.svg'
import { ReactComponent as Logo5} from '../../assets/svg/brands/logo-6.svg'
import { ReactComponent as Logo6} from '../../assets/svg/brands/logo-61.svg'
import { ReactComponent as Logo7} from '../../assets/svg/brands/logo-71.svg'
import { ReactComponent as Logo8} from '../../assets/svg/brands/logo-72.svg'
import { ReactComponent as Logo9} from '../../assets/svg/brands/logo-81.svg'
import { ReactComponent as Logo10} from '../../assets/svg/brands/logo-82.svg'
const brands = [
    <Logo1 />, <Logo2 />, <Logo3 />, <Logo4 />, <Logo5 />, <Logo6 />, <Logo7 />, <Logo8 />, <Logo9 />, <Logo10 />
]

function Brands() {
    return (
    <div className={styles.container}>
            <h2>Brands we Serve</h2>
            <div className={styles.container__brands}>
                {brands.map((item, index) => (
                    <div key={`${index}`}>{item}</div>
                ))}
            </div>
    </div>
    );
}

export default Brands;
