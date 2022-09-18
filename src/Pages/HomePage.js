import React from "react";
import AirPods from "../Common/homePage_sections/AirPods";
import Background1NewPhone from "../Common/homePage_sections/Background1NewPhone";
import Background2NewIphon from "../Common/homePage_sections/Background2NewIphon";
import Unicef from "../Common/homePage_sections/Unicef";
import Watchs from "../Common/homePage_sections/Watchs";
import Carousel from "../Common/homePage_sections/Carousel";
export default function HomePage() {
  return (
    <>
      <Unicef />
      <Background1NewPhone/>
      <Background2NewIphon/>
      <AirPods/>
      <Watchs/>
      <Carousel/>
    </>
  );
}
