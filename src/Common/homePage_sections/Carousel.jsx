import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../homePage_sections/carousel.module.scss";
import imagemovie1 from "../../Assets/Image/imagemovie1.svg";
import imagemovie2 from "../../Assets/Image/imagemovie2.svg";
import imagemovie3 from "../../Assets/Image/imagemovie3.svg";
import imagemovie4 from "../../Assets/Image/imagemovie4.svg";
import imagemovie5 from "../../Assets/Image/imagemovie5.svg";
import imagemovie6 from "../../Assets/Image/imagemovie6.svg";
import imagemovie7 from "../../Assets/Image/imagemovie7.svg";
export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  const carouselItems = [
    {
      img: imagemovie1,
      content: "1",
    },
    {
      img: imagemovie2,
      content: "2",
    },
    {
      img: imagemovie3,
      content: "3",
    },
    {
      img: imagemovie4,
      content: "4",
    },
    {
      img: imagemovie5,
      content: "5",
    },
    {
      img: imagemovie6,
      content: "6",
    },
    {
      img: imagemovie7,
      content: "7",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Slider className={styles.slider} {...settings}>
          {carouselItems.map((x, index) => (
            <div key={index} className={styles.items}>
              <img className={styles.carouselimg} src={x.img}></img>
            </div>
          ))}
        </Slider>
        {/* {carouselItems.map((x, index) => (
          <p>{x.content}</p>
        ))} */}
      </div>
    </>
  );
}
