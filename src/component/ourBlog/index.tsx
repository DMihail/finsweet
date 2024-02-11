import React, { useState } from "react";
import styles from "./index.module.scss";
import { blogs } from "../../assets/data/blogs";
import Blog from "./blog";

type ActiveType = "Latest" | "Popular" | "Favorites";

function OurBlog() {
  const [active, setActive] = useState<ActiveType>("Latest");

  return (
    <div className={styles.container}>
      <div className={styles.container__body}>
        <h2>Our blog</h2>
        <div className={styles.container__typeBox}>
          <button
            type={"button"}
            className={`${active === "Latest" && styles.container__activeType}`}
            onClick={() => setActive("Latest")}
          >
            Latest
          </button>
          <button
            type={"button"}
            className={`${active === "Popular" && styles.container__activeType}`}
            onClick={() => setActive("Popular")}
          >
            Popular
          </button>
          <button
            type={"button"}
            className={`${active === "Favorites" && styles.container__activeType}`}
            onClick={() => setActive("Favorites")}
          >
            Favorites
          </button>
        </div>
        <div className={styles.container__blogs}>
          {blogs.map((item) => (
            <Blog
              imageUrl={item.imageUrl}
              createAt={item.createAt}
              title={item.title}
              text={item.text}
              key={item.createAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
