import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latestSliders } from '../../../AppUtilities';


const SimilerPartSlider = () => {
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
          breakpoint: { max: 1024, min: 768 },
          items: 4,
        },
        tabletlandscape: {
          breakpoint: { max: 767, min: 667 },
          items: 2,
        },
        mobile: {
          breakpoint: { max:480, min: 0 },
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
            center={true}
          >
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={latestSliders} alt="" class="w-100 main_img"/>
                    <div class="week_content">
                        <center>
                            <h4>Underworld of 
    Sea</h4>
                        </center>
                    </div>
                    </a>
                </div>
            </div>
            
          </Carousel>
        </>
      );
}

export default SimilerPartSlider;