import React from "react";
import heroIphone14 from "../../Assets/Image/heroIphone14.svg";
import { ComparisonSlider } from "react-comparison-slider";
import heroIphone14hover from '../../Assets/Image/heroIphone14hover.jpg'
export default function Slider() {
  return (
    <div style={{width:'50vw',height:'20vw',marginTop:"3vw"}}>
      <ComparisonSlider
        defaultValue={50}
        itemOne={
          <img
            style={{ width: "50vw" }}
            src={heroIphone14}
          ></img>
        }
        itemTwo={
          <img
            style={{ width: "50vw" }}
            src={heroIphone14hover}
          ></img>
        }
        aspectRatio={16 / 9}
        orientation="horizontal"
      />
    </div>
  );
}
