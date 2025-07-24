import React from "react";
import Slider from "react-slick";
import bg1 from "../../Assets/bg-1.jpg";
import bg2 from "../../Assets/bg-2.jpg";
import bg3 from "../../Assets/bg-3.jpg";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="item">
          <img src={bg1} className="w-100"></img>
        </div>
        <div className="item">
          <img src={bg2} className="w-100"></img>
        </div>
        <div className="item">
          <img src={bg3} className="w-100"></img>
        </div>
      </Slider>
      <div className="homeBannerSection"></div>
    </>
  );
};

export default HomeBanner;
