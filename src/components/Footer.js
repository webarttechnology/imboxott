import React from "react";
import { appOne } from "../AppUtilities";
import { appTwo } from "../AppUtilities";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3">
              <h4 class="footer_head">Contact Us</h4>
              <p class="footer_text">
                IN Office Address : Matrix Tower
                <br /> Block GP, Sector V, WB, Kol–700091
              </p>
              <p class="footer_text">
                Email : <a href="#">info@Shopsee.com</a>
              </p>
              <p class="footer_text">
                Toll-Free : <a href="#">+1 888-927-7332</a>
              </p>
              <p class="footer_text">
                USA Support : <a href="#"> +1 415 800 4429</a>
              </p>

              <span>
                <a href="#">
                  <img src={appOne} alt="" class="img-fluid mt-4" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={appTwo} alt="" class="img-fluid mt-4" />
                </a>
              </span>
            </div>
            <div class="col-sm-6 col-md-3">
              <h4 class="footer_head">Services</h4>
              <ul>
                <li class="footer_link">
                  <a href="#">Film Production</a>
                </li>
                <li class="footer_link">
                  <a href="#">Creative Direction</a>
                </li>
                <li class="footer_link">
                  <a href="#">Digital Content</a>
                </li>
                <li class="footer_link">
                  <a href="#">Visual Effects</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3">
              <h4 class="footer_head">Clients</h4>
              <ul>
                <li class="footer_link">
                  <a href="#">American Express</a>
                </li>
                <li class="footer_link">
                  <a href="#">Mercedes Benz</a>
                </li>
                <li class="footer_link">
                  <a href="#">The Martin Agency</a>
                </li>
                <li class="footer_link">
                  <a href="#">Razorfish</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3">
              <h4 class="footer_head">Connect With Us</h4>
              <span class="footer_social">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </span>
              <span class="footer_social">
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </span>
              <span class="footer_social">
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </span>
              <p class="footer_text mt-5">Company Name : IMBOXO</p>
              <p class="footer_text mt-2">
                Company Address : Zone Orlytech Batiment 5161 allee du
                commandant Mouchotte ORLY Paris ,91550 , France
              </p>
            </div>
            <div class="col-sm-12 mt-3 text-center">
              <hr />
              <p class="footer_text">
                Copyright 2024 © IMBOXO. Powered by{" "}
                <a href="#">WebArt Technology</a> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
