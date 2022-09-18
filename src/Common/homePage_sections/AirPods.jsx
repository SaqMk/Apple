import React from "react";
import styles from "../homePage_sections/airpods.module.scss";
import airPodsPro from "../../Assets/Image/airPodsPro.webp";
import pods from "../../Assets/Image/pods.png";
export default function AirPods() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>AirPods Pro</p>
        <p className={styles.titleContent}>Rebuilt from the sound up.</p>
        <p className={styles.availableContent}>Available starting 9.23</p>
        <img
          onDragStart={handleClick}
          className={styles.airPods}
          src={airPodsPro}
        ></img>
        <img onDragStart={handleClick} className={styles.pods} src={pods}></img>
      </div>
    </div>
  );
}
