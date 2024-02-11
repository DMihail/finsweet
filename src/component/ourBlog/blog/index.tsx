import React from "react";
import styles from "./Blog.module.scss";

type Props = {
  imageUrl: string;
  createAt: string;
  title: string;
  text: string;
};

function Blog({ imageUrl, createAt, title, text }: Props) {
  const date = new Date(createAt);
  const formatDate = new Intl.DateTimeFormat("en-AU", { month: "long" }).format(
    date,
  );

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={title} />
      <div className={styles.container__data}>
        Posted on {formatDate} {date.getDay()}th {date.getFullYear()}
      </div>
      <div className={styles.container__title}>{title}</div>
      <div>{text}</div>
    </div>
  );
}

export default Blog;
