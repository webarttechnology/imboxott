import React from 'react'
import {superHeroesSliders} from '../AppUtilities'

const Superheroes = () => {
  return (
    <>
    <section class="top_week best_hero pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-between">
                    <h3>Best of superheroes</h3>
                    <span><a href="#" class="text-light">View all</a></span>
                </div>
                <div class="col-12">
                    <hr class="mt-4 mb-4"/>

                    <div class="owl-carousel owl-theme">
                        
                        <div class="item">
                            <a href="#">
                            <img src={superHeroesSliders} alt="" class="w-100 main_img"/>
                            <div class="week_content">
                                <center>
                                    <h4>Justice League</h4>
                                </center>
                            </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                            <img src={superHeroesSliders} alt="" class="w-100 main_img"/>
                            <div class="week_content">
                                <center>
                                    <h4>Justice League</h4>
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

export default Superheroes