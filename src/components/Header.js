import React from 'react';
import { logos } from '../AppUtilities';


const Header = () => {
  return (
    <>
      <header>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-11 d-flex justify-content-between align-items-center">
                    <span class="logo"><a href="#"><img src={logos} alt="" class="img-fluid"/></a></span>
                    <nav>
                        <div class="hamburger" id="hamburger-1">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                        <ul>
                            <li class="active"><a href="#">Home </a></li>
                            <li><a href="#">Movies </a></li>
                            <li><a href="#">Series</a></li>
                            <li><a href="#">My List</a></li>
                        </ul>
                    </nav>
                    <ul class="infos">
                        <li><a href="#"><i class="bi bi-search"></i></a></li>
                        <li><a href="#"><i class="bi bi-bell"></i></a></li>
                        <li><a href="#"><i class="bi bi-person-fill"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  );
}

export default Header;
