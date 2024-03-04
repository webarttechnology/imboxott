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
    const url = c.URL + "/user/details/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });

    return res;
  } catch (e) {
    return e.response;
  }
};
