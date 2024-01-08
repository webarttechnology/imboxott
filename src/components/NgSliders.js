import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {original} from '../AppUtilities';

const NationalSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 414 },
      items: 2,
    },
    smallmobile: {
        breakpoint: { max: 414, min: 0 },
        items: 1,
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
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

        <div>
            <div class="item">
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

        <div>
            <div class="item">
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

        <div>
            <div class="item">
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

        <div>
            <div class="item">
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

        <div>
            <div class="item">
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

        <div>
            <div class="item">
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

        <div>
            <div class="item">
                <a href="#">
                <img src={original} alt="" class="w-100 main_img"/>
                <div class="week_content">
                    <center>
                        <h4>Underworld of Sea</h4>
                    </center>
                </div>
                </a>
            </div>
        </div>

      </Carousel>
    </>
  );
};

export default NationalSlider;
