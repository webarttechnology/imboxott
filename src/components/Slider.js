import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latestSliders } from "../AppUtilities";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="item">
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="item">
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="item">
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="item">
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="item">
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="item">
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="item">
            <img src="images/release/1.jpg" alt="" class="w-100 main_img" />
            <div class="movie_content">
              <img src={latestSliders} alt="" class="img-fluid mb-2" />
              <span>
                <a href="#" class="btn btn_samll btn-light">
                  <i class="bi bi-play-fill"></i> Watch Now
                </a>
              </span>
              <span>
                <a href="#" class="btn btn_samll btn-light btn_icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </span>
              <ul class="caption_info d-flex align-items-center">
                <li>
                  2009<i class="bi bi-dot"></i>
                </li>
                <li>
                  2h 29m <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  English <i class="bi bi-dot"></i>
                </li>
                <li>
                  {" "}
                  A <i class="bi bi-dot"></i>
                </li>
                <li>Science Fiction</li>
              </ul>
              <p class="site_text">
                Former Marine Jake Sully is deployed as an Avtar on a mission to
                Pandora but, he ultimately finds himself torn between two
                worlds.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
