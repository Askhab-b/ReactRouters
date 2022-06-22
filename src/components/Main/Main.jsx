import React from "react";
import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.masterMain}>
    <div className={styles.main}>
      <h1>Cover your page</h1>
      <div className={styles.mainContainer}>
        <p>
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <button className={styles.btn}>Lean more</button>
      </div>
    </div>
    </div>
  );
}
