import React from 'react';
import { Link } from 'react-router-dom';
import CastSlider from './MovieDetailsSlider/Cast';
import Crew from './MovieDetailsSlider/Crew';
import SimilerPartSlider from './MovieDetailsSlider/SimilerPartSlider';

const MovieDetails = () => {
  return (
    <>
    <section class="movie_details_Banner">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-11 d-flex">
                    <span class="movie_banner_pic"><img src="images/movie-details/banner.jpg" alt="" class="w-100"/></span>
                    <div>
                        <h1 class="banner_heading mb-3">Avengers: Infinity War</h1>
                        <div class="clearfix"></div>
                        <span class="ratings"><a href="#"><i class="bi bi-star-fill"></i> 8.9/10</a></span>
                        <small class="votes"><a href="#">523.3K Votes ></a></small>
                        <p class="site_text">2D , 4DX 3D , 3D , IMAX 3D , IMAX 2D</p>
                        <p class="site_text">English , Hindi , Telugu , Tamil , English (English Subtitle)</p>
                        <ul class="caption_info d-flex align-items-center">
                            <li>2h 29m <i class="bi bi-dot"></i></li>
                            <li> Action , Adventure , Fantasy <i class="bi bi-dot"></i></li>
                            <li> UA <i class="bi bi-dot"></i></li>
                            <li>27 April , 2018</li>
                        </ul>
                        <div class="ratingBtn mt-3 mb-3">
                            <span>Add your rating & review<br/>Your ratings matter</span>
                            <span><a href="#" class="btn btn-light">Rate Now</a></span>
                        </div>
                        <div class="clearfix"></div>
                        <span>
                            <a href="" class="btn transparent_btn banner_btn length_big">Watch Movie</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
    <section class="about_part">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-11">
                    <h3 class="site_heading mb-4">About the movie</h3>
                    <p>As the Avengers and their allies have continued to protect the world from threats too large for any one hero to 
    handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to 
    collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. 
    Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never 
    been more uncertain.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="cast">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-11 d-flex flex-wrap align-items-center justify-content-between">
                    <h3>Cast</h3>
                    <span><a href="#" class="text-light">View all</a></span>
                    <hr class="mt-4 mb-4 w-100"/>
                </div>
                <div class="col-sm-11">
                    <CastSlider/>
                </div>
            </div>
        </div>
    </section>

    <section class="cast crew mt-5">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-11 d-flex flex-wrap align-items-center justify-content-between">
                    <h3>Crew</h3>
                    <span><a href="#" class="text-light">View all</a></span>
                    <hr class="mt-4 mb-4 w-100"/>
                </div>
                <div class="col-sm-11">
                    <Crew/>
                </div>
            </div>
        </div>
    </section>

    <section class="top_week original likes mt-5">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-11 d-flex flex-wrap align-items-center justify-content-between">
                    <h3>You might also like :</h3>
                    <span><a href="#" class="text-light">View all</a></span>
                    <hr class="mt-4 mb-4 w-100"/>
                </div>
                <div class="col-sm-11">
                    <SimilerPartSlider/>
                </div>
            </div>
        </div>
    </section>

    <section class="reviws mt-5">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-11 d-flex flex-wrap align-items-center justify-content-between">
                    <h3>Top reviews :</h3>
                    <span><a href="#" class="text-warning">436.6K reviews  ></a></span>
                    <hr class="mt-4 mb-4 w-100"/>
                </div>
                <div class="col-sm-11">
                    <p class="site_text">Summary of 436.6K reviews.</p>
                    <ul class="d-flex reviws_btn mb-5">
                        <li><a href="#" class="btn btn-outline-warning">#Blockbuster <span class="text-white">800</span></a></li>
                        <li><a href="#" class="btn btn-outline-warning">#SuperDirection <span class="text-white">734</span></a></li>
                        <li><a href="#" class="btn btn-outline-warning">#GreatActing <span class="text-white">706</span></a></li>
                        <li><a href="#" class="btn btn-outline-warning">#AwesomeStory <span class="text-white">703</span></a></li>
                        <li><a href="#" class="btn btn-outline-warning">#Wellmade <span class="text-white">600</span></a></li>
                    </ul>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-9">
                            <div class="row">
                                <div class="col-sm-6 mb-3">
                                    <div class="single_reviws">
                                        <div class="row align-items-center mb-4">
                                            <div class="col-6">
                                                <span><img src="images/user.png" alt="" class="img-fluid"/> &nbsp;Pratyush</span>
                                            </div>
                                            <div class="col-6 text-end">
                                                <span class="ratings"><a href="#"><i class="bi bi-star-fill"></i> 9.2/10</a></span>
                                            </div>
                                        </div>
                                        <h5 class="mb-2">Awesome movie</h5>
                                        <p>Epic blockbuster movie I'm shocked fantastic day 
                                            mind blowing unforgettable memories NYC job 
                                            actors and direction good photography and 
                                            cgi work</p>
                                        <div class="row align-items-center mb-4">
                                            <div class="col-12 col-sm-6">
                                                <small class="review_share"><a href="#"><i class="bi bi-hand-thumbs-up"></i> 1.2k</a></small>
                                                <small class="review_share"><a href="#"><i class="bi bi-hand-thumbs-down"></i></a></small>
                                            </div>
                                            <div class="col-12 col-sm-6 text-end">
                                                <small class="review_share"><a href="#">5 Years ago <i class="bi bi-share"></i></a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3">
                                    <div class="single_reviws">
                                        <div class="row align-items-center mb-4">
                                            <div class="col-12 col-sm-6">
                                                <span><img src="images/user.png" alt="" class="img-fluid"/> &nbsp;Pratyush</span>
                                            </div>
                                            <div class="col-12 col-sm-6 text-end">
                                                <span class="ratings"><a href="#"><i class="bi bi-star-fill"></i> 9.2/10</a></span>
                                            </div>
                                        </div>
                                        <h5 class="mb-2">Awesome movie</h5>
                                        <p>Epic blockbuster movie I'm shocked fantastic day 
                                            mind blowing unforgettable memories NYC job 
                                            actors and direction good photography and 
                                            cgi work</p>
                                        <div class="row align-items-center mb-4">
                                            <div class="col-6">
                                                <small class="review_share"><a href="#"><i class="bi bi-hand-thumbs-up"></i> 1.2k</a></small>
                                                <small class="review_share"><a href="#"><i class="bi bi-hand-thumbs-down"></i></a></small>
                                            </div>
                                            <div class="col-6 text-end">
                                                <small class="review_share"><a href="#">5 Years ago <i class="bi bi-share"></i></a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-end">
                            <span><a href="#" class="text-white">View All <i class="bi bi-arrow-right-circle"></i></a></span>
                        </div>
                        <div class="col-12 mt-4">
                            <small class="tags">Online tickets   <i class="bi bi-arrow-right"></i>    Movie tickets   <i class="bi bi-arrow-right"></i>   Latest Movies  <i class="bi bi-arrow-right"></i>  Avengers: Infinity War</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MovieDetails