import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className={styles.masterMain}>
        <div className={styles.main}>
          <h1>Cover your page</h1>
          <div className={styles.mainContainer}>
            <p>Contact Page (CONTACT)</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.4957466516253!2d45.6902511157565!3d43.32481428162064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d13abc103637%3A0x8601f7fff1cac51f!2zSW50b2NvZGUgQ29kaW5nIEJvb3RjYW1wIOKAkyDRiNC60L7Qu9CwINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1655896079128!5m2!1sru!2sru"
              width="600"
              title="ku"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
