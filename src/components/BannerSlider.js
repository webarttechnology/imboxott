import React from "react";
import {homeSliders} from '../AppUtilities'

const HomeBanner = () => {
    return (
        <>
        <section class="home_slider">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <img src={homeSliders} alt="" class="w-100"/>
                    <div class="banner_caption">
                        <h1 class="banner_heading">Avengers: Infinity War</h1>
                        <ul class="caption_info d-flex align-items-center">
                            <li>2018 <i class="bi bi-dot"></i></li>
                            <li>2h 29m <i class="bi bi-dot"></i></li>
                            <li> English , Hindi <i class="bi bi-dot"></i></li>
                            <li class="badge bg-light">U/A 16+</li>
                        </ul>
                        <p class="site_text_bold">Avengers: Infinity War is a 2018 American superhero film based 
                            on the Marvel Comics superhero team the Avengers. Produced 
                            by Marvel Studios and distributed by Walt Disney Studios </p>

                        <ul class="rating_tags d-flex align-items-center">
                            <li><a href="#"><i class="bi bi-star-fill"></i> <span>8.9</span></a></li>
                            <li><a href="#">Adventure</a></li>
                            <li><a href="#">Fantasy</a></li>
                            <li><a href="#">Comedy</a></li>
                        </ul>    
                        <span>
                            <a href="" class="btn transparent_btn banner_btn length_big">Watch Movie</a>
                        </span>
                        <span>
                            <a href="" class="btn transparent_btn banner_btn ml-10"><i class="bi bi-plus-lg"></i></a>
                        </span>
                    </div>
                </div>
                {/* <div class="item">
                    <img src={homeSliders} alt="" class="w-100"/>
                    <div class="banner_caption">
                        <h1 class="banner_heading">Avengers: Infinity War</h1>
                        <ul class="caption_info d-flex align-items-center">
                            <li>2018 <i class="bi bi-dot"></i></li>
                            <li>2h 29m <i class="bi bi-dot"></i></li>
                            <li> English , Hindi <i class="bi bi-dot"></i></li>
                            <li class="badge bg-light">U/A 16+</li>
                        </ul>
                        <p class="site_text_bold">Avengers: Infinity War is a 2018 American superhero film based 
                            on the Marvel Comics superhero team the Avengers. Produced 
                            by Marvel Studios and distributed by Walt Disney Studios </p>

                        <ul class="rating_tags d-flex align-items-center">
                            <li><a href="#"><i class="bi bi-star-fill"></i> <span>8.9</span></a></li>
                            <li><a href="#">Adventure</a></li>
                            <li><a href="#">Fantasy</a></li>
                            <li><a href="#">Comedy</a></li>
                        </ul>    
                        <span>
                            <a href="" class="btn transparent_btn banner_btn length_big">Watch Movie</a>
                        </span>
                        <span>
                            <a href="" class="btn transparent_btn banner_btn ml-10"><i class="bi bi-plus-lg"></i></a>
                        </span>
                    </div>
                </div>
                <div class="item">
                    <img src={homeSliders} alt="" class="w-100"/>
                    <div class="banner_caption">
                        <h1 class="banner_heading">Avengers: Infinity War</h1>
                        <ul class="caption_info d-flex align-items-center">
                            <li>2018 <i class="bi bi-dot"></i></li>
                            <li>2h 29m <i class="bi bi-dot"></i></li>
                            <li> English , Hindi <i class="bi bi-dot"></i></li>
                            <li class="badge bg-light">U/A 16+</li>
                        </ul>
                        <p class="site_text_bold">Avengers: Infinity War is a 2018 American superhero film based 
                            on the Marvel Comics superhero team the Avengers. Produced 
                            by Marvel Studios and distributed by Walt Disney Studios </p>

                        <ul class="rating_tags d-flex align-items-center">
                            <li><a href="#"><i class="bi bi-star-fill"></i> <span>8.9</span></a></li>
                            <li><a href="#">Adventure</a></li>
                            <li><a href="#">Fantasy</a></li>
                            <li><a href="#">Comedy</a></li>
                        </ul>    
                        <span>
                            <a href="" class="btn transparent_btn banner_btn length_big">Watch Movie</a>
                        </span>
                        <span>
                            <a href="" class="btn transparent_btn banner_btn ml-10"><i class="bi bi-plus-lg"></i></a>
                        </span>
                    </div>
                </div>
                <div class="item">
                    <img src={homeSliders} alt="" class="w-100"/>
                    <div class="banner_caption">
                        <h1 class="banner_heading">Avengers: Infinity War</h1>
                        <ul class="caption_info d-flex align-items-center">
                            <li>2018 <i class="bi bi-dot"></i></li>
                            <li>2h 29m <i class="bi bi-dot"></i></li>
                            <li> English , Hindi <i class="bi bi-dot"></i></li>
                            <li class="badge bg-light">U/A 16+</li>
                        </ul>
                        <p class="site_text_bold">Avengers: Infinity War is a 2018 American superhero film based 
                            on the Marvel Comics superhero team the Avengers. Produced 
                            by Marvel Studios and distributed by Walt Disney Studios </p>

                        <ul class="rating_tags d-flex align-items-center">
                            <li><a href="#"><i class="bi bi-star-fill"></i> <span>8.9</span></a></li>
                            <li><a href="#">Adventure</a></li>
                            <li><a href="#">Fantasy</a></li>
                            <li><a href="#">Comedy</a></li>
                        </ul>    
                        <span>
                            <a href="" class="btn transparent_btn banner_btn length_big">Watch Movie</a>
                        </span>
                        <span>
                            <a href="" class="btn transparent_btn banner_btn ml-10"><i class="bi bi-plus-lg"></i></a>
                        </span>
                    </div>
                </div> */}
            </div>
        </section>
        </>
    );
}
export default HomeBanner;