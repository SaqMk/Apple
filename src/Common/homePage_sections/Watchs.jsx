import React from "react";
import styles from "../homePage_sections/watchs.module.scss";
import arr from "../homePage_sections/WatchItem";

export default function Watchs() {
  return (
    <div className={styles.main}>
      {arr.map(x => (
        <div style={{backgroundColor:`${x.color}`}} key={x.id} className={styles.item}>
            <div style={{display:'flex',justifyContent:'space-between',width:'fit-content'}}>
            <img style={{width:'2vw'}} src={x.img}></img>
            <p style={{color:`${x.titleColor}`}} className={styles.title}>{x.title}</p>
            </div>
            <p style={{color:`${x.titleColor}`}} className={styles.titleContent}>Adventure awaits</p>
            <p style={{color:`${x.availableContent}`}} className={styles.titleContent}>{x.availableContent}</p>
            <img className={styles.img1} src={x.img1}></img>
        </div>
      ))}

    </div>
  );
}
