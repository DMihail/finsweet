import React from "react";
import styles from "./index.module.scss";
import { ReactComponent as Batteries } from "../../assets/svg/service/Batteries.svg";
import { ReactComponent as BodyWork } from "../../assets/svg/service/BodyWork.svg";
import { ReactComponent as CustomService } from "../../assets/svg/service/CustomService.svg";
import { ReactComponent as Diagnostics } from "../../assets/svg/service/Diagnostics.svg";
import { ReactComponent as EngineRepair } from "../../assets/svg/service/EngineRepair.svg";
import { ReactComponent as InsuranceClaim } from "../../assets/svg/service/InsuranceClaim.svg";
import { ReactComponent as OilFilter } from "../../assets/svg/service/OilFilter.svg";
import { ReactComponent as WheelRepair } from "../../assets/svg/service/WheelRepair.svg";
import { ReactComponent as Arrow } from "../../assets/svg/Arrow.svg";
import Service from "./service/Service";

const services = [
  {
    title: "Diagnostics ",
    svg: <Diagnostics />,
  },
  {
    title: "Engine Repair",
    svg: <EngineRepair />,
  },
  {
    title: "Wheel Repair",
    svg: <WheelRepair />,
  },
  {
    title: "Oil Filter",
    svg: <OilFilter />,
  },
  {
    title: "Body Work",
    svg: <BodyWork />,
  },
  {
    title: "Batteries",
    svg: <Batteries />,
  },
  {
    title: "Insurance Claim",
    svg: <InsuranceClaim />,
  },
  {
    title: "Custom Service",
    svg: <CustomService />,
  },
];

function WeOffer() {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__title}>What we Offer</div>
        <h2>We offer full service auto repair & maintenance</h2>
        <div className={styles.container__services}>
          {services.map((item) => (
            <Service icon={item.svg} title={item.title} key={item.title} />
          ))}
        </div>
        <div className={styles.container__about}>
          Learn about services <Arrow />
        </div>
      </div>
    </div>
  );
}

export default WeOffer;
