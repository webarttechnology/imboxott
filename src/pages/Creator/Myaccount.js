import React, { useEffect, useState } from "react";
import inbanner from "../../assets/images/intro-banner.jpg";
import userImg from "../../assets/images/user.png";
import ProfileSection from "./ProfileSection";
import { useLocation, useNavigate } from "react-router";
import * as API from "../../API/Index.js";
import VideoUpload from "./VideoUpload.js";
import { MESSAGE } from "../../schemas/Validation.js";
import Serise from "./Serise.js";
import { BeatLoader } from "react-spinners";
import { type } from "@testing-library/user-event/dist/type/index.js";
const initialValues = {
  name: "",
  email: "",
  city: "",
  state: "",
  country: "",
  address: "",
  phone: "",
  user_name: "",
  profile_img: "",
  banner_img: "",
};
const Myaccount = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [isLoder, setIsLoder] = useState(false);
  const [getUserData, setGetUserData] = useState("");
  const [allCountryData, setAllCountryData] = useState([]);
  const [allStateData, setAllStateData] = useState([]);
  const [allCityData, setAllCityData] = useState([]);
  const [firstSerise, setFirstSerise] = useState(true);
  const [formData, setFormData] = useState(initialValues);
  const [allCartifi, setAllCartifi] = useState("");
  const [countryData, setCountryData] = useState("");
  const [stateData, setStateData] = useState("");
  const [cityData, setCityData] = useState("");
  const [profieData, setProfieData] = useState("");
  const [coverData, setCoverData] = useState("");

  const handalerChangespro = async (e) => {
    setProfieData(e.target.files[0]);
    setIsLoder(false);
  };
  const handalerChangescov = async (e) => {
    setCoverData(e.target.files[0]);
    setIsLoder(false);
  };

  const handalerChanges = async (e) => {
    setIsLoder(false);
    const { name, value } = e.target;
    const header = localStorage.getItem("_tokenCode");
    if (name === "country") {
      setCountryData(parseInt(e.target.value));
      const stateresponse = await API.allState(e.target.value, header);
      setAllStateData(stateresponse.data.data);
    }
    if (name === "state") {
      const reqObj = {
        catId: countryData,
        stateId: e.target.value,
      };
      console.log("reqObj", reqObj);
      setStateData(parseInt(e.target.value));
      const cityresponse = await API.allCity(reqObj, header);
      console.log("cityresponse", cityresponse);
      setAllCityData(cityresponse.data.data);
    }

    if (name === "city") {
      setCityData(parseInt(e.target.value));
    }

    setFormData({ ...formData, [name]: value });
  };

  const userDataGetById = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.getuserDataID(
        localStorage.getItem("__userId"),
        header
      );
      setFormData(response.data.data);
      setGetUserData(response.data.data);
      const cartResponse = await API.allFlimeCartfikt(header);
      console.log("cartResponse", cartResponse);
      setAllCartifi(cartResponse.data.data);
      const cresponse = await API.allCountry(header);
      setAllCountryData(cresponse.data.data);

      if (response.data.is_login === false) {
        localStorage.removeItem("_tokenCode");
        localStorage.removeItem("isLogin");
        if (localStorage.getItem("isLogin") === null) {
          navigate("/login");
        }
      }
    } catch (error) {}
  };

  const userdataUpdate = async () => {
    const header = localStorage.getItem("_tokenCode");
    setIsLoder(true);
    try {
      const formDataReq = new FormData();
      formDataReq.append("name", formData.name);
      formDataReq.append("user_name", formData.user_name);
      formDataReq.append("profile_img", profieData);
      formDataReq.append("banner_img", coverData);
      formDataReq.append(
        "city",
        typeof cityData === "number" ? cityData : formData.city
      );
      formDataReq.append("email", formData.email);
      formDataReq.append("role", formData.user_type);
      formDataReq.append(
        "state",
        typeof stateData === "number" ? stateData : formData.state
      );
      formDataReq.append(
        "country",
        typeof countryData === "number" ? countryData : formData.country
      );
      formDataReq.append("address", formData.address);
      formDataReq.append("phone", formData.age_limit);

      const response = await API.getuser_update(formDataReq, header);
      console.log("response", response);
      if (response.data.success === 1) {
        setIsLoder(false);
        userDataGetById();
        MESSAGE(response.data.msg, 1);
      }
    } catch {}
  };

  const logout = () => {
    localStorage.removeItem("_tokenCode");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("__userId");
    setIsLogin(localStorage.removeItem("isLogin"));
    if (localStorage.getItem("isLogin") === null) {
      navigate("/login");
    }
  };

  const pageshowhideSerise = () => {
    setFirstSerise(false);
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
            <div class="jj">
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
                          <i class="fa-solid fa-circle-play"></i> Movie Upload
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="yseries-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#yseries-pane"
                          type="button"
                          role="tab"
                          aria-controls="yseries-pane"
                          aria-selected="false"
                          onClick={pageshowhideSerise}
                        >
                          <i class="fa-solid fa-file-video"></i>
                          Series
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="award-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#award-pane"
                          type="button"
                          role="tab"
                          aria-controls="award-pane"
                          aria-selected="false"
                        >
                          <i class="fa-solid fa-award"></i>
                          Awards
                        </button>
                      </li>
                      <div className="logout">
                        <button
                          onClick={logout}
                          className="logouts btn btn-secondary2"
                        >
                          Logout
                        </button>
                      </div>
                    </ul>
                    <div
                      class="tab-content accordion col-sm-9"
                      id="myTabContent"
                    >
                      <div
                        class="tab-pane fade show active"
                        id="introduction-pane"
                        role="tabpanel"
                        aria-labelledby="introduction-tab"
                        tabindex="0"
                      >
                        <h4 class="mb-3">Edit Your profile</h4>
                        <div class="row">
                          <div class="mb-3 col-sm-6">
                            <label>Name </label>
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
                            <label>User Name </label>
                            <input
                              type="text"
                              placeholder="Enter Your user name"
                              class="form-control"
                              name="user_name"
                              value={formData.user_name}
                              onChange={handalerChanges}
                            />
                          </div>
                          <div className="mb-3 col-sm-6">
                            <label>Profile image </label>
                            <input
                              type="file"
                              multiple
                              placeholder="Enter Your user name"
                              class="form-control"
                              name="profile_img"
                              onChange={handalerChangespro}
                            />
                          </div>
                          <div className="mb-3 col-sm-6">
                            <label>Cover image</label>
                            <input
                              type="file"
                              multiple
                              placeholder="Enter Your user name"
                              class="form-control"
                              name="banner_img"
                              onChange={handalerChangescov}
                            />
                          </div>
                          <div class="mb-3 col-sm-6">
                            <label>Email </label>
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
                            <label>Phone No </label>
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="Phone No."
                            />
                          </div>
                          <div class="mb-3 col-sm-6">
                            <label>Adderss</label>
                            <input
                              type="text"
                              class="form-control"
                              value={formData.address}
                              onChange={handalerChanges}
                              name="address"
                              placeholder="Address"
                            />
                          </div>
                          <div class="mb-3 col-sm-4 col-md-6">
                            <label>
                              Country{" "}
                              {getUserData.country ? (
                                <span className="text-lights">
                                  {" "}
                                  {getUserData.country}
                                </span>
                              ) : (
                                ""
                              )}
                            </label>
                            <select
                              value={formData.country}
                              onChange={handalerChanges}
                              name="country"
                              class="form-control form-select"
                            >
                              <option>--- Select ---</option>
                              {allCountryData.map((item, index) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div class="mb-3 col-sm-4 col-md-6">
                            <label>
                              State{" "}
                              {getUserData.state ? (
                                <span className="text-lights">
                                  {" "}
                                  {getUserData.state}
                                </span>
                              ) : (
                                ""
                              )}
                            </label>

                            <select
                              onChange={handalerChanges}
                              value={formData.state}
                              name="state"
                              class="form-control form-select"
                            >
                              <option>--- Select ---</option>
                              {allStateData.map((item, index) => (
                                <option value={item.id}>{item.name}</option>
                              ))}
                            </select>
                          </div>
                          <div class="mb-3 col-sm-4 col-md-6">
                            <label>
                              City{" "}
                              {getUserData.city ? (
                                <span className="text-lights">
                                  {" "}
                                  {getUserData.city}
                                </span>
                              ) : (
                                ""
                              )}
                            </label>
                            <select
                              value={formData.city}
                              onChange={handalerChanges}
                              name="city"
                              class="form-control form-select"
                            >
                              <option>--- Select ---</option>
                              {allCityData.map((item, index) => (
                                <option value={item.id}>{item.name}</option>
                              ))}
                            </select>
                          </div>

                          <div class="mt-3 text-center col-12">
                            {isLoder ? (
                              <button
                                type="button"
                                class="btn btn btn-secondary2 mt-3"
                              >
                                <BeatLoader color="#fff" />
                              </button>
                            ) : (
                              <button
                                type="button"
                                class="btn btn btn-secondary2 mt-3"
                                onClick={userdataUpdate}
                              >
                                Update
                              </button>
                            )}
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
                        <VideoUpload allCartifi={allCartifi} />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="yseries-pane"
                        role="tabpanel"
                        aria-labelledby="series-tab"
                        tabindex="0"
                      >
                        <Serise
                          firstSerise={firstSerise}
                          getUserData={getUserData}
                        />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="award-pane"
                        role="tabpanel"
                        aria-labelledby="award-tab"
                        tabindex="0"
                      >
                        my award
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
