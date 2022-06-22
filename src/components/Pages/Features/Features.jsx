import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import styles from "./features.module.css";

const Features = () => {
  return (
    <>
      <Header />
      <div className={styles.masterMain}>
        <div className={styles.main}>
          <h1>Cover your page</h1>
          <div className={styles.mainContainer}>
            <p>Features page (FEATURES)</p>
            <button className={styles.btn}>Lean more</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
