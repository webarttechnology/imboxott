import axios from "axios";
import * as c from "../API/constant";
// ? REGISTRATION API
export const user_registration = async (data) => {
  try {
    const url = c.SIGNUP;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const otp_varification = async (data) => {
  try {
    const url = c.URL + "/email/verify";
    console.log("url", url);
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const resend_otp = async (data) => {
  try {
    const url = c.URL + "/resend/otp";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const user_login = async (data) => {
  try {
    const url = c.LOGIN;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const user_forgotPass = async (data) => {
  try {
    const url = c.URL + "/user/forget/pass";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const forgotPass_new = async (data) => {
  try {
    const url = c.URL + "/user/forget/pass/change";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const getuserDataID = async (data, header) => {
  try {
    const url = c.URL + "/user/profile/details";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });

    return res;
  } catch (e) {
    return e.response;
  }
};

export const creatorVideoAdd = async (data, header) => {
  try {
    const url = c.URL + "/creator/video/add";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getuser_update = async (data, header) => {
  console.log("data", data);
  try {
    const url = c.URL + "/edit/profile";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const allCountry = async (header) => {
  try {
    const url = c.URL + "/all-country";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const allState = async (data, header) => {
  try {
    const url = c.URL + "/get-state/" + data;
    console.log("url", url);
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const allCity = async (data, header) => {
  try {
    const url = c.URL + "/get-city/" + data.catId + "/" + data.stateId;
    console.log("url", url);
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const allFlimeCartfikt = async (header) => {
  try {
    const url = c.URL + "/get-certificate";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const creatorSerise = async (data, header) => {
  try {
    const url = c.URL + "/create-series";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const episodeAdd = async (data, header) => {
  try {
    const url = c.URL + "/add-episodes";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getEpisode = async (data, header) => {
  try {
    const url = c.URL + "/get-episodes/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getSeason = async (header) => {
  try {
    const url = c.URL + "/get-season";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getMovie = async (header) => {
  try {
    const url = c.URL + "/guest/movie/list";
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getMovieDetils = async (data) => {
  try {
    const url = c.URL + "/movie/details/" + data;
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return e.response;
  }
};
