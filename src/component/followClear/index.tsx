import React from "react";
import styles from "./index.module.scss";
import Process from "./process";

const process = [
  {
    title: "Get a Quote",
    description:
      "Through True Rich Attended does no end it his mother since real had half every.",
  },
  {
    title: "Book an Appointment",
    description:
      "Through True Rich Attended does no end it his mother since real had half every.",
  },
  {
    title: "Get your Service Done",
    description:
      "Through True Rich Attended does no end it his mother since real had half every.",
  },
];

function FollowClear() {
  return (
    <div className={styles.container}>
      <div>
        <h2>We follow a clear process to help you out.</h2>
        <div className={styles.container__subtitle}>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire
        </div>
        <button>Learn more</button>
      </div>

      <div className={styles.container__processes}>
        {process.map((item, index) => (
          <Process
            title={item.title}
            description={item.description}
            point={index + 1}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default FollowClear;
