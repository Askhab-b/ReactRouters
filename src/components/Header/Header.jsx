import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.cover}>Cover</p>
      <div className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/contacts">Contact</Link>
      </div>
    </div>
  );
}
