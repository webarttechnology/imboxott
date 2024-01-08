import React from 'react'
import HeroSlider from "./SuperHeroSlider";

const SuperHeroes = () => {
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

                    <HeroSlider/>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default SuperHeroes