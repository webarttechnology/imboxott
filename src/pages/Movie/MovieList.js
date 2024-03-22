import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../API/Index.js";
const MovieList = () => {
  const [allData, setAllData] = useState([]);
  const allMovieData = async () => {
    try {
      const response = await API.getMovie();
      console.log("response", response);
      setAllData(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    allMovieData();
  }, []);
  return (
    <>
      <section class="movie_list">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-sm-11">
              <div class="row justify-content-center">
                <div class="col-12">
                  <h2 class="site_heading text-center mb-4">ENGLISH</h2>
                </div>

                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/1.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/2.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/3.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/4.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/5.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/1.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/2.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/3.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/4.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/5.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/1.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/2.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/3.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/4.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/5.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/1.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/2.jpg" alt="" class="w-100" />
                  </Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 movies">
                  <Link to="/movie-details">
                    <img src="images/movies/3.jpg" alt="" class="w-100" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieList;
