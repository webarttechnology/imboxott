import React from "react";
import MovieSlider from "./TopMoviesSlider";

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

                        <MovieSlider/>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default TopMovie;