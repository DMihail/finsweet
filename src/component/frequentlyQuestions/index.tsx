import React from "react";
import styles from "./index.module.scss";
import Question from "./question";

const questions = [
  {
    title: "How long should a car repair take?",
    description:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
  },
  {
    title: "How do I schedule my car's appointment ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis doloribus, eius eos eveniet exercitationem minus modi, molestias nemo nulla perspiciatis provident quidem quos saepe tempore velit.",
  },
  {
    title: "What are the repair services provided?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolore ea error, est fugiat hic incidunt iste maiores molestias nulla numquam, officia recusandae, repudiandae soluta tempora ullam veritatis! Totam.",
  },
  {
    title: "How do I find auto body shops near me?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam autem debitis deleniti dicta dolorem, doloremque expedita illum ipsam libero minima molestias obcaecati odio odit placeat possimus qui quia quidem sit, tenetur vel voluptatibus? Commodi corporis cum deserunt esse iste nihil quisquam rerum, sunt!",
  },
  {
    title: "Genuine spare parts during car repair?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus deserunt dignissimos dolorem dolorum ducimus, ea in, laboriosam maxime nam necessitatibus nobis quisquam reiciendis sed sit, tempora velit veritatis vero!",
  },
];

function FrequentlyQuestions() {
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questionse</h2>
      <div className={styles.container__questions}>
        {questions.map((item) => (
          <Question
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentlyQuestions;
