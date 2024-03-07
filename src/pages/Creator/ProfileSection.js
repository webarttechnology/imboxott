import React from "react";
import { Link } from "react-router-dom";

const ProfileSection = ({ userImg, inbanner, formData }) => {
  return (
    <>
      <section class="innerBanner">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-11">
              <div class="innerBanner_img_wrap">
                <img src={inbanner} alt="" class="w-100" />
              </div>
              <div class="users relative">
                <center>
                  <span class="main_User">
                    <img src={userImg} alt="" class="w-100" />
                    <span class="mail">
                      <i class="bi bi-envelope"></i>
                    </span>
                  </span>
                  <div class="clearfix"></div>
                  <span class="joined">Joined Jan 21</span>
                  <h3 class="user_heading">{formData.name}</h3>
                  <p class="user_text">
                    Filmmaker by Profession, and storyteller by passion. Here to
                    inspire the next grneration dreamers{" "}
                  </p>
                  <span>
                    <a href="#" class="btn btn-secondary2">
                      Follow
                    </a>
                  </span>
                  <span>
                    <Link
                      to="/creator/my-account"
                      class="btn btn-outline-light"
                    >
                      Feed
                    </Link>
                  </span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSection;
