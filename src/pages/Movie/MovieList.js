import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../API/Index.js";
import { IMG, NOIMG } from "../../API/constant.js";
import { BeatLoader } from "react-spinners";
const MovieList = () => {
  const [allData, setAllData] = useState([]);
  const allMovieData = async () => {
    try {
      const response = await API.getMovie();
      console.log("response", response);
      setAllData(response.data.data);
    } catch (error) {}
  };
  console.log("allData", allData);
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
                {allData.length === 0 ? (
                  <div className="align-items-center d-flex justify-content-center">
                    <BeatLoader size={20} color="#fff" />
                  </div>
                ) : (
                  allData.map((item, index) => (
                    <div class="col-sm-6 col-md-3 col-lg-3 movies">
                      <Link state={{ id: item.id }} to="/movie-details">
                        <img
                          src={
                            item.thumbnail === null
                              ? NOIMG
                              : IMG + item.thumbnail
                          }
                          alt=""
                          class="w-100"
                        />
                      </Link>
                      <h4 className="movieName">{item.title}</h4>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieList;
