import React, { useEffect, useState } from "react";
import inbanner from "../../assets/images/intro-banner.jpg";
import userImg from "../../assets/images/user.png";
import ProfileSection from "./ProfileSection";
import { useLocation, useNavigate } from "react-router";
import * as API from "../../API/Index.js";
import VideoUpload from "./VideoUpload.js";
import { MESSAGE } from "../../schemas/Validation.js";
const initialValues = {
  name: "",
  email: "",
  city: "",
  state: "",
  country: "",
  address: "",
  phone: "",
};
const Myaccount = () => {
  const location = useLocation();
  const [getUserData, setGetUserData] = useState("");
  const [allCountryData, setAllCountryData] = useState([]);
  const [allStateData, setAllStateData] = useState([]);
  const [allCityData, setAllCityData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValues);
  const [errorName, setErrorName] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorState, setErrorState] = useState("");
  const [errorCountry, setErrorCountry] = useState("");
  const [countryData, setCountryData] = useState("");
  const [stateData, setStateData] = useState("");
  const [cityData, setCityData] = useState("");

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    const header = localStorage.getItem("_tokenCode");
    if (name === "country") {
      setCountryData(parseInt(e.target.value));
      const stateresponse = await API.allState(e.target.value, header);
      setAllStateData(stateresponse.data.data);
    }
    if (name === "state") {
      setStateData(parseInt(e.target.value));
      const cityresponse = await API.allCity(e.target.value, header);
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
      const cresponse = await API.allCountry(header);
      console.log("cresponse", cresponse);
      setAllCountryData(cresponse.data.data);

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

  const userdataUpdate = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        name: formData.name,
        city: typeof cityData === "number" ? cityData : "",
        state: typeof stateData === "number" ? stateData : "",
        country: typeof countryData === "number" ? countryData : "",
        address: formData.address,
        phone: formData.phone,
        id: localStorage.getItem("__userId"),
      };
      console.log("reqObj", reqObj);
      const response = await API.getuser_update(reqObj, header);
      console.log("response", response);
      if (response.data.data.success === 1) {
        userDataGetById();
        MESSAGE(response.data.data.msg, 1);
      }
    } catch {}
    if (formData.name === "") {
      setErrorName("This field is required");
    } else if (formData.city === "") {
      setErrorCity("This field is required");
    } else if (formData.state === "") {
      setErrorState("This field is required");
    } else if (formData.country === "") {
      setErrorCountry("This field is required");
    }
    if (
      !formData.name ||
      !formData.city ||
      !formData.state ||
      !formData.country
    ) {
    } else {
      try {
        const reqObj = {
          name: formData.name,
          city: typeof cityData === "number" ? cityData : "",
          state: typeof stateData === "number" ? stateData : "",
          country: typeof countryData === "number" ? countryData : "",
          address: formData.address,
          phone: formData.phone,
          id: localStorage.getItem("__userId"),
        };
        console.log("reqObj", reqObj);
        const response = await API.getuser_update(reqObj, header);
        console.log("response", response);
        if (response.data.data.success === 1) {
          userDataGetById();
          MESSAGE(response.data.data.msg, 1);
        }
      } catch (error) {}
    }
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
                        <h3 class="mb-3">Edit Your profile</h3>
                        <div class="row">
                          {/* <div class="mb-3 col-sm-12">
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
                          </div> */}
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
                            <button
                              type="button"
                              class="btn btn btn-secondary2 mt-3"
                              onClick={userdataUpdate}
                            >
                              Update
                            </button>
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
                        <VideoUpload />
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
