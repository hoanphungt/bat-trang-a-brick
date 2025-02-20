import React from "react";
import styles from "./HomePhoto.module.css";

const HomePhoto = () => {
  return (
    <div className={styles.HomePhoto}>
      <div className={styles.HomePhotoScrolling}>
        <a href="/#introduction">
          <img
            className={styles.ScrollingIcon}
            src="/images/scrolling-icon.gif"
            alt="scrolling"
          />
        </a>
      </div>
    </div>
  );
};

export default HomePhoto;
