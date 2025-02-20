import React from "react";
import styles from "./MainContainer.module.css";

const MainContainer = (props) => {
  return <div className={styles.MainContainer}>{props.children}</div>;
};

export default MainContainer;
