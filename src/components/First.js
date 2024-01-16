import React from "react";
import styles from "./first.module.css";
// import "../index.css";
const First = () => {
  return (
    <div>
      <h1>First Hello</h1>
      <button className="btn">First Button</button>
      <button className={`${styles.btn3} btn2`}>second Button</button>
    </div>
  );
};

export default First;
