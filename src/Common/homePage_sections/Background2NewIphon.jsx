import React from "react";
import styles from "../../Common/homePage_sections/background2NewIphone.module.scss";
import Slider from "./Slider";

export default function Background2NewIphon() {
  //   function handleClick(e) {
  //     e.preventDefault();
  //   }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>iPhone 14 </p>
        <p className={styles.titleContent}>Big and bigger.</p>
        <p className={styles.availableContent}>
          iPhone 14 available starting 9.16 iPhone 14 Plus available starting
          10.7
        </p>
        <Slider />
      </div>
    </div>
  );
}
