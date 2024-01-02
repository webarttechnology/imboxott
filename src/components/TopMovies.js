import React from "react";
import {topMovieSlider} from '../AppUtilities'

const TopMovie = () => {
    return (
        <>
        <section class="top_week pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex align-items-center justify-content-between">
                        <h3>Top Movies of the week</h3>
                        <span><a href="#" class="text-light">View all</a></span>
                    </div>
                    <div class="col-12">
                        <hr class="mt-4 mb-4"/>

                        <div class="owl-carousel owl-theme">
                            <div class="item">
                            <a href="#">
                                <img src={topMovieSlider} alt="" class="w-100 main_img"/>
                                <div class="week_content">
                                    <center>
                                    <h3>01</h3>
                                    </center>
                                </div>
                                </a> 
                            </div>
                            <div class="item">
                                <a href="#">
                                <img src={topMovieSlider} alt="" class="w-100 main_img"/>
                                <div class="week_content">
                                    <center>
                                        <h3>02</h3>
                                    </center>
                                </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                <img src={topMovieSlider} alt="" class="w-100 main_img"/>
                                <div class="week_content">
                                    <center>
                                        <h3>03</h3>
                                    </center>
                                </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                <img src={topMovieSlider} alt="" class="w-100 main_img"/>
                                <div class="week_content">
                                    <center>
                                        <h3>04</h3>
                                    </center>
                                </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                <img src={topMovieSlider} alt="" class="w-100 main_img"/>
                                <div class="week_content">
                                    <center>
                                        <h3>05</h3>
                                    </center>
                                </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                <img src={topMovieSlider} alt="" class="w-100 main_img"/>
                                <div class="week_content">
                                    <center>
                                        <h3>06</h3>
                                    </center>
                                </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                <img src={topMovieSlider} alt="" class="w-100 main_img"/>
                                <div class="week_content">
                                    <center>
                                        <h3>07</h3>
                                    </center>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default TopMovie;