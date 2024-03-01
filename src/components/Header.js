import React from "react";
import { logos } from "../AppUtilities";
import { Link, NavLink } from "react-router-dom";

const Header = ({ setIsuser }) => {
  return (
    <>
      <header>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-11 d-flex justify-content-between align-items-center">
              <span class="logo">
                <a href="#">
                  <img src={logos} alt="" class="img-fluid" />
                </a>
              </span>
              <nav>
                <div class="hamburger" id="hamburger-1">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/movie-list"> Movies </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Introduction">Series</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dd">My List</NavLink>
                  </li>
                </ul>
              </nav>
              <ul class="infos">
                <li>
                  <a href="#">
                    <i class="bi bi-search"></i>
                  </a>
                </li>
                <li>
                  <Link to="/creator/sign-up" className="btn btn-secondary2">
                    Become a creator
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <i class="bi bi-person-fill"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
