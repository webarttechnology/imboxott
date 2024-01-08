import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {brand} from '../AppUtilities';

const BrandSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
      >
        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>

        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>

        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>

        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>

        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>

        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>
        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>
        <div>
          <div class="item">
            <img src={brand} alt="" class="img-fluid"/>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default BrandSlider;
