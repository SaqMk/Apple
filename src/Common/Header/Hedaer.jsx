import React from "react";
import styles from "../Header/header.module.scss";
import applelogo from "../../Assets/Image/applelogo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAppstore } from "react-icons/io";
export default function Hedaer() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src={applelogo} alt="" />
        <ul>
          <li>Mac</li>
          <li>IPad</li>
          <li>IPhone</li>
          <li>AirPods</li>
          <li>Accessories</li>
          <li>Watch</li>
        </ul>
        <div className={styles.wrapper}>
          <AiOutlineSearch className={styles.iconSearch} />
          <IoMdAppstore className={styles.iconSearch} />
        </div>
      </div>
    </div>
  );
}
