import React from "react";
import inbanner from "../../assets/images/intro-banner.jpg";
import userImg from "../../assets/images/user.png";
const Introductions = () => {
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
                  <h3 class="user_heading">Robinson Walker</h3>
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
                    <a href="#" class="btn btn-outline-light">
                      Mention
                    </a>
                  </span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-11">
              <hr class="mt-5 mb-5" />
              <div class="tab_main">
                <ul
                  class="nav nav-tabs d-none d-lg-flex"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="introduction-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#introduction-pane"
                      type="button"
                      role="tab"
                      aria-controls="introduction-pane"
                      aria-selected="true"
                    >
                      Introduction
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="series-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#series-pane"
                      type="button"
                      role="tab"
                      aria-controls="series-pane"
                      aria-selected="false"
                    >
                      Series
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="movies-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#movies-pane"
                      type="button"
                      role="tab"
                      aria-controls="movies-pane"
                      aria-selected="false"
                    >
                      My movies
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="awards"
                      data-bs-toggle="tab"
                      data-bs-target="#awards-pane"
                      type="button"
                      role="tab"
                      aria-controls="awards-pane"
                      aria-selected="false"
                    >
                      Awards
                    </button>
                  </li>
                </ul>
                <div class="tab-content accordion" id="myTabContent">
                  <div
                    class="tab-pane fade show active accordion-item"
                    id="introduction-pane"
                    role="tabpanel"
                    aria-labelledby="introduction-tab"
                    tabindex="0"
                  >
                    <h2 class="accordion-header d-lg-none" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Introduction
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show  d-lg-block"
                      aria-labelledby="headingOne"
                      data-bs-parent="#myTabContent"
                    >
                      <div class="accordion-body">
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/1.png" alt="" />
                          </span>
                          Greetings, Entertainment Enthusiasts!
                        </h4>
                        <p class="tab_text">
                          Welcome to Robinson Walker's OTT Wonderland – where
                          storytelling meets innovation, and every frame is a
                          canvas of creativity!
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/2.png" alt="" />
                          </span>
                          About :
                        </h4>
                        <p class="tab_text">
                          I'm Robinson Walker, your guide through the realms of
                          immersive content. With a passion for pushing
                          boundaries and a penchant for storytelling, I've
                          embarked on a journey to redefine the way we
                          experience entertainment.
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/3.png" alt="" />
                          </span>{" "}
                          The OTT Adventure :
                        </h4>
                        <p class="tab_text">
                          In this digital universe, I craft compelling
                          narratives that transcend boundaries. From gripping
                          dramas to laugh-out-loud comedies, my content is
                          designed to be your escape into worlds unexplored.
                          Join me as we navigate through a kaleidoscope of
                          emotions, ideas, and experiences.
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/4.png" alt="" />
                          </span>{" "}
                          What to Expect :
                        </h4>
                        <p class="tab_text">
                          In this digital universe, I craft compelling
                          narratives that transcend boundaries. From gripping
                          dramas to laugh-out- loud comedies, my content is
                          designed to be your escape into worlds unexplored.
                          Join me as we navigate through a kaleidoscope of
                          emotions, ideas, and experiences.
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/5.png" alt="" />
                          </span>{" "}
                          Join the Community :
                        </h4>
                        <p class="tab_text">
                          This isn't just about content; it's about building a
                          community of like-minded individuals who appreciate
                          the art of storytelling. Connect with me on Instagram,
                          Facebook, Twitter for behind-the-scenes glimpses,
                          exclusive content, and discussions about the latest
                          and greatest in the world of entertainment.
                        </p>
                        <center>
                          <span>
                            <a href="#" class="btn btn-outline-light mt-5">
                              Load More
                            </a>
                          </span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade accordion-item"
                    id="series-pane"
                    role="tabpanel"
                    aria-labelledby="series-tab"
                    tabindex="0"
                  >
                    <h2 class="accordion-header d-lg-none" id="headingTwo">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Series
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse d-lg-block"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#myTabContent"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                        </div>
                        <center>
                          <span>
                            <a href="#" class="btn btn-outline-light mt-5">
                              Load More
                            </a>
                          </span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade accordion-item"
                    id="movies-pane"
                    role="tabpanel"
                    aria-labelledby="movies-tab"
                    tabindex="0"
                  >
                    <h2 class="accordion-header d-lg-none" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        My movies
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse d-lg-block"
                      aria-labelledby="headingThree"
                      data-bs-parent="#myTabContent"
                    >
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <video width="100%" controls class="videos">
                              <source src="mov_bbb.mp4" type="video/mp4" />
                              <source src="mov_bbb.ogg" type="video/ogg" />
                            </video>
                            <h4 class="video_title">Puppy Dog Pals</h4>
                            <p class="video_text">6 Episodes</p>
                          </div>
                        </div>
                        <center>
                          <span>
                            <a href="#" class="btn btn-outline-light mt-5">
                              Load More
                            </a>
                          </span>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade accordion-item"
                    id="awards-pane"
                    role="tabpanel"
                    aria-labelledby="awards"
                    tabindex="0"
                  >
                    <h2 class="accordion-header d-lg-none" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Awards
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse d-lg-block"
                      aria-labelledby="headingFour"
                      data-bs-parent="#myTabContent"
                    >
                      <div class="accordion-body">
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/6.png" alt="" />
                          </span>
                          Celebrating Excellence in Digital Storytelling!{" "}
                        </h4>
                        <p class="tab_text">
                          Greetings, fellow content connoisseurs! Step into the
                          virtual realm of Robinson Walker, where each frame is
                          a testament to the artistry of storytelling.
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/7.png" alt="" />
                          </span>{" "}
                          Award-Winning Virtuosity :
                        </h4>
                        <p class="tab_text">
                          I am Robinson Walker, and I am thrilled to welcome you
                          to a world where innovation meets narrative, where
                          storytelling isn't just a craft but an
                          accolade-winning adventure. With [number] prestigious
                          awards under our belt, the journey has been nothing
                          short of extraordinary.
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/8.png" alt="" />
                          </span>{" "}
                          Awards Galore :
                        </h4>
                        <p class="tab_text">
                          Robinson Walker has been honored with [list of
                          awards], recognizing excellence in Framing, Editing.
                          From the pulsating beats of gripping dramas to the
                          laughter-inducing crescendos of comedies, each
                          accolade is a nod to the dedication poured into
                          creating memorable, boundary-pushing content.
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/9.png" alt="" />
                          </span>{" "}
                          Trailblazing the Digital Frontier :
                        </h4>
                        <p class="tab_text">
                          Our commitment goes beyond the screen – it's a promise
                          to redefine digital storytelling. With [specific award
                          names] proudly displayed on our virtual mantle, we
                          stand as a testament to the power of imagination, the
                          impact of innovation, and the ability of digital
                          content to leave an indelible mark.
                        </p>
                        <h4 class="tab_heading">
                          <span>
                            <img src="images/icons/10.png" alt="" />
                          </span>{" "}
                          Join the Celebration :
                        </h4>
                        <p class="tab_text">
                          As we celebrate these milestones, I invite you to be a
                          part of our community. Subscribe, engage, and embark
                          on a cinematic adventure that has not only been
                          recognized by industry experts but has also captivated
                          audiences around the globe.
                        </p>
                        <center>
                          <span>
                            <a href="#" class="btn btn-outline-light mt-5">
                              Load More
                            </a>
                          </span>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introductions;
