import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselIvestore() {
  function SampleArrow() {
    return <div style={{ display: "none" }} />;
  }
  return (
    <Slider
      dots={false}
      infinite={true}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay={true}
      speed={2000}
      autoplaySpeed={2000}
      cssEase={"linear"}
      nextArrow={<SampleArrow />}
      prevArrow={<SampleArrow />}
    >
      <div className="pr-2">
        <img src="images/alpha.png" alt="" className="w-80 rounded-xl" />
      </div>
      <div className="pr-2">
        <img src="images/500.png" alt="" className="w-80 rounded-xl" />
      </div>
      <div className="pr-2">
        <img src="images/insig.png" alt="" className="w-80 rounded-xl" />
      </div>
      <div className="pr-2">
        <img src="images/sequi.png" alt="" className="w-80 rounded-xl" />
      </div>
      <div className="pr-2">
        <img src="images/sginnovate.png" alt="" className="w-80 rounded-xl" />
      </div>
      <div className="pr-2">
        <img src="images/wave.png" alt="" className="w-80 rounded-xl" />
      </div>
      <div className="pr-2">
        <img src="images/gfc.png" alt="" className="w-80 rounded-xl" />
      </div>
      <div className="pr-2">
        <img src="images/golden.png" alt="" className="w-80 rounded-xl" />
      </div>
    </Slider>
  );
}
