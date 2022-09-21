import React, { useState } from "react";
import styles from "../homePage_sections/background1NewPhone.module.scss";
import background1Iphone14 from "../../Assets/Image/background1Iphone14.svg";
export default function Background1NewPhone() {
  function handleClick(e) {
    e.preventDefault();
  }
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const [order, setOrder] = useState(true);
  const [plus, setPlus] = useState(1);
  const price = 999;

  function orderOpen() {
    setOrder(!order);
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <p className={styles.title}>iPhone 14 Pro</p>
            <p className={styles.titleContent}>Pro. Beyond.</p>
            <p className={styles.availableContent}>
              Available starting {hours} : {minute}
            </p>
            <div className={styles.item}>
              <p onClick={orderOpen}>Pre-order</p>
            </div>
          </div>
          <div className={styles.wrapper}>
            <img onDragStart={handleClick} src={background1Iphone14} alt="" />
            {/* <div
              onClick={orderOpen}
              className={styles.hover}
              style={
                order
                  ? {}
                  : {
                      backgroundColor: "rgb(177, 177, 177)",
                      opacity: "0.4",
                      color: "black",
                      fontSize: "6vw",
                      transition: "0.7s",
                    }
              }
            >
              <p>999$</p>
            </div> */}
          </div>
        </div>
        <div></div>
        <div
          className={styles.wrapperOrder}
          style={
            order
              ? {
                  width: "0",
                  transition: "0.4s",
                  visibility: "hidden",
                }
              : {
                  width: "35vw",
                  height: "70%",
                  marginLeft: "5vw",
                  transition: "0.5s",
                  borderRadius: "1vw",
                }
          }
        >
          <input
            placeholder="Name"
            className={styles.input}
            style={
              order
                ? { width: "0", transition: "0.1s", zIndex: "-2" }
                : { width: "80%" }
            }
            type="text"
          ></input>
          <input
            placeholder="SurName"
            className={styles.input}
            style={
              order
                ? { width: "0", transition: "0.1s", zIndex: "-2" }
                : { width: "80%" }
            }
            type="text"
          ></input>
          <input
            placeholder="Country"
            className={styles.input}
            style={
              order
                ? { width: "0", transition: "0.1s", zIndex: "-2" }
                : { width: "80%" }
            }
            type="text"
          ></input>
          <div
            style={
              order
                ? {
                    display: "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "0",
                    height: "3vw",
                    fontSize: "1.5vw",
                    transition: "0.1s",
                  }
                : {
                    width: "10vw",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "0.1s",
                  }
            }
          >
            <button
              onClick={() => setPlus(plus > 0 ? plus - 1 : plus)}
              style={{
                width: "3vw",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "2vw",
                border: "none",
              }}
            >
              -
            </button>
            <p style={{ color: "white", fontSize: "2vw" }}>{plus}</p>

            <button
              onClick={() => setPlus(plus + 1)}
              style={{
                width: "3vw",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "2vw",
                border: "none",
              }}
            >
              +
            </button>
          </div>
          <p
            style={
              order
                ? {
                    display: "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "3vw",
                    fontSize: "1.5vw",
                    transition: "0.1s",
                  }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "0.1s",
                    fontSize: "1.5vw",
                    color: "white",
                  }
            }
          >
            Price&emsp;{plus * price}$
          </p>

          <button
            style={
              order
                ? { width: "0", transition: "0.1s", zIndex: "-2" }
                : { width: "50%" }
            }
            className={styles.buyButton}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
