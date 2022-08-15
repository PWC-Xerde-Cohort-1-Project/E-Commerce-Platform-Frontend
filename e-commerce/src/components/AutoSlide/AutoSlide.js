import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
// import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";
import DiscountBadge from "../DiscountBadge";

const len = sliderImage.length - 1;

function AutoSlide(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="bg_autoslide mobile-slides">
      <div class="container d-sm-flex justify-content-between">
        <div className="slider-container my-4 ">
          <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
          <DiscountBadge value="-20%"/>
          {/* <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          /> */}
          <Dots
            activeIndex={activeIndex}
            sliderImage={sliderImage}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </div>
        <div className="slider-container my-4">
          <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
          <DiscountBadge value="-20%"/>
          {/* <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          /> */}
          <Dots
            activeIndex={activeIndex}
            sliderImage={sliderImage}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </div>
      </div>
    </div>
  );
}

export default AutoSlide;
