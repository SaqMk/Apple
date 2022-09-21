import React from "react";
import styles from "../homePage_sections/unicef.module.scss";
import unicefLogo from "../../Assets/Image/unicefLogo.svg";
export default function Ubisoft() {
  return (
    <div className={styles.main}>
      <img src={unicefLogo} alt="" />
      <p>Donate to support families affected by the war in Ukraine</p>
    </div>
  );
}
