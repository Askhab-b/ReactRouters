import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Contact from "./components/Pages/Contacts/Contact";
import Features from "./components/Pages/Features/Features";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
