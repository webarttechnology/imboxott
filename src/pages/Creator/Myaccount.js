import React, { useEffect, useState } from "react";
import inbanner from "../../assets/images/intro-banner.jpg";
import userImg from "../../assets/images/user.png";
import ProfileSection from "./ProfileSection";
import { useLocation, useNavigate } from "react-router";
import * as API from "../../API/Index.js";
const initialValues = {
  name: "",
  email: "",
  city: "",
  state: "",
  country: "",
  address: "",
  address1: "",
  phone: "",
};
const Myaccount = () => {
  const location = useLocation();
  const [getUserData, setGetUserData] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValues);
  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    const header = localStorage.getItem("_tokenCode");
    // if (name === "country") {
    //   setCountryData(parseInt(e.target.value));
    //   const stateresponse = await API.allState(e.target.value, header);
    //   setAllStateData(stateresponse.data.data);
    // }
    // if (name === "state") {
    //   setStateData(parseInt(e.target.value));
    //   const cityresponse = await API.allCity(e.target.value, header);
    //   setAllCityData(cityresponse.data.data);
    // }

    // if (name === "city") {
    //   setCityData(parseInt(e.target.value));
    // }

    setFormData({ ...formData, [name]: value });
  };
  const userDataGetById = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      // const cresponse = await API.allCountry(header);
      // setAllCountryData(cresponse.data.data);
      // const musicBoxresponse = await API.orderHistroy(
      //   localStorage.getItem("__userId"),
      //   header
      // );
      // setOrderData(musicBoxresponse.data.data);
      const response = await API.getuserDataID(
        localStorage.getItem("__userId"),
        header
      );
      console.log("response", response);
      setFormData(response.data.data);
      setGetUserData(response.data.data);
      if (response.data.is_login === false) {
        localStorage.removeItem("_tokenCode");
        localStorage.removeItem("isLogin");
        //setIsLogin(localStorage.removeItem("isLogin"));
        if (localStorage.getItem("isLogin") === null) {
          navigate("/login");
        }
      }
    } catch (error) {}
  };
  useEffect(() => {
    userDataGetById();
  }, []);
  return (
    <>
      <ProfileSection
        formData={formData}
        inbanner={inbanner}
        userImg={userImg}
      />
      <section>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-11">
              <div class="tab_main editProfile">
                <div class="row justify-content-center g-0">
                  <div class="col-sm-8 col-md-12 row">
                    <ul
                      class="nav nav-tabs flex-column col-sm-3 mt-4"
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
                          <i class="fa-solid fa-user"></i>&nbsp; Edit profile
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
                          <i class="fa-solid fa-circle-play"></i> Video Upload
                        </button>
                      </li>
                    </ul>
                    <div
                      class="tab-content accordion col-sm-7"
                      id="myTabContent"
                    >
                      <div
                        class="tab-pane fade show active"
                        id="introduction-pane"
                        role="tabpanel"
                        aria-labelledby="introduction-tab"
                        tabindex="0"
                      >
                        <h3 class="text-center">Edit Your profile</h3>
                        <div class="row">
                          <div class="mb-3 col-sm-12">
                            <div class="avatar-upload">
                              <div class="avatar-edit">
                                <input
                                  type="file"
                                  id="imageUpload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label for="imageUpload"></label>
                              </div>
                              <div class="avatar-preview">
                                <div id="imagePreview"></div>
                              </div>
                            </div>
                          </div>
                          <div class="mb-3 col-sm-6">
                            <input
                              type="text"
                              placeholder="Enter Your Name"
                              class="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handalerChanges}
                            />
                          </div>
                          <div className="mb-3 col-sm-6">
                            <input
                              type="text"
                              placeholder="Enter Your user name"
                              class="form-control"
                              name="user_name"
                              value={formData.user_name}
                              onChange={handalerChanges}
                            />
                          </div>
                          <div class="mb-3 col-sm-6">
                            <input
                              type="text"
                              placeholder="Enter Your Email"
                              class="form-control"
                              name="email"
                              readOnly
                              value={formData.email}
                              onChange={handalerChanges}
                              autocomplete="off"
                            />
                          </div>
                          <div class="mb-3 col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="Phone No."
                            />
                          </div>
                          <div class="mb-3 col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="Address"
                            />
                          </div>
                          <div class="mb-3 col-sm-4 col-md-6">
                            <select class="form-select" id="" aria-label="">
                              <option selected>Select Country</option>
                            </select>
                          </div>
                          <div class="mb-3 col-sm-4 col-md-6">
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="State"
                            />
                          </div>
                          <div class="mb-3 col-sm-4 col-md-6">
                            <select class="form-select" id="" aria-label="">
                              <option selected>Select City</option>
                            </select>
                          </div>

                          <div class="mt-3 text-center col-12">
                            <input
                              type="button"
                              value="Submit"
                              class="btn btn btn-secondary2"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="series-pane"
                        role="tabpanel"
                        aria-labelledby="series-tab"
                        tabindex="0"
                      >
                        <h3 class="mb-3">Video Uploads</h3>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="mb-3">
                              <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Video Title"
                              />
                            </div>
                            <div class="mb-3">
                              <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Sub Title"
                              />
                            </div>
                            <div class="mb-3">
                              <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Add Duration"
                              />
                            </div>
                            <div class="mb-3">
                              <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Cast"
                              />
                            </div>
                            <div class="d-flex flex-wrap flex-row mt-3 justify-content-between">
                              <label for="" class="w-100 mb-1">
                                Choose age limit
                              </label>
                              <div class="form-check col-md-4">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  id="radio1"
                                  name="optradio"
                                  value="option1"
                                />
                                Option 1
                                <label
                                  class="form-check-label"
                                  for="radio1"
                                ></label>
                              </div>
                              <div class="form-check col-md-4">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  id="radio2"
                                  name="optradio"
                                  value="option2"
                                />
                                Option 2
                                <label
                                  class="form-check-label"
                                  for="radio2"
                                ></label>
                              </div>
                              <div class="form-check col-md-4">
                                <input type="radio" class="form-check-input" />
                                Option 3<label class="form-check-label"></label>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="mb-5">
                              <textarea
                                class="form-control"
                                placeholder="Description comes here"
                                id=""
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <fieldset class="upload_dropZone text-center">
                              <legend class="visually-hidden">
                                Image uploader
                              </legend>

                              <i class="fa-solid fa-cloud-arrow-up"></i>

                              <p class="small my-2">
                                Drag &amp; Drop background image(s) inside
                                dashed region
                                <br />
                                <span>or</span>
                              </p>

                              <input
                                id="upload_image_background"
                                data-post-name="image_background"
                                data-post-url="https://someplace.com/image/uploads/backgrounds/"
                                class="position-absolute invisible"
                                type="file"
                                multiple
                                accept="image/jpeg, image/png, image/svg+xml"
                              />

                              <label
                                class="btn btn-secondary2 mb-3"
                                for="upload_image_background"
                              >
                                Choose file(s)
                              </label>

                              <div class="upload_gallery d-flex flex-wrap justify-content-center gap-2 mb-0"></div>
                            </fieldset>
                            <div class="text-end align-self-end">
                              <input
                                type="button"
                                value="Submit"
                                class="btn btn btn-secondary2 mt-3"
                              />
                            </div>
                          </div>
                        </div>
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

export default Myaccount;
