import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { crews } from '../../../AppUtilities';


const Crew = () => {
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
          items: 3,
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
                    <img src={crews } alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
            <div>
                <div class="item">
                    <a href="#">
                    <img src={crews} alt="" class="cast_img"/>
                    <div class="cast_content">
                        <p class="cast_text">Robert Dow-ney Jr.<br/>as Tony Stark / Iron Man:</p>
                    </div>
                    </a> 
                </div>
            </div>
          </Carousel>
        </>
      );
}

export default Crew;