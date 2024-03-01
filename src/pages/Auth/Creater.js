import { useFormik } from "formik";
import React, { useState } from "react";
import { MESSAGE, userSchemaCreator } from "../../schemas/Validation.js";
import * as API from "../../API/Index.js";
import { useNavigate } from "react-router";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const initialValues = {
  name: "",
  user_name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Creater = ({ setIsLogin, isUser }) => {
  const navigate = useNavigate();
  const [isLoader, setIsloader] = useState(false);
  const [isEmail, setIsEmail] = useState(0);
  const [otp, setOtp] = useState("");
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchemaCreator,
      onSubmit: (values) => {
        submitButton(values);
      },
    });

  //? USER create
  const submitButton = async (values) => {
    setIsloader(true);
    Reflect.deleteProperty(values, "confirmPassword");
    const reqObj = { ...values, role: "creator" };
    console.log("reqObj", reqObj);
    const response = await API.user_registration(reqObj);
    console.log("response", response);
    if (response.data.success === 1) {
      setIsEmail(1);
      setIsloader(false);
      const headerObj = {
        Authorization: `Bearer ${response.data.token_code}`,
      };
      localStorage.setItem("_tokenCode", JSON.stringify(headerObj));
      MESSAGE(response.data.msg, 1);
      localStorage.setItem("__userId", response.data.data.id);
    } else {
      MESSAGE(response.data.msg);
      setIsloader(false);
    }
  };

  const verifiOtp = async () => {
    setIsloader(true);
    try {
      const reqObj = {
        email: values.email,
        otp: otp,
      };
      const response = await API.otp_varification(reqObj);
      console.log("response", response);
      if (response.data.success === 1) {
        setIsloader(false);
        MESSAGE(response.data.msg, 1);
        navigate("/creator/my-account");
      } else {
        setIsloader(false);
        MESSAGE(response.data.msg);
      }
    } catch (error) {}
  };

  const resendOtp = async () => {
    try {
      const reqObj = {
        email: values.email,
      };
      const response = await API.resend_otp(reqObj);
      console.log("response", response);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg, 1);
        setIsEmail(1);
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="align-items-center justify-content-center row">
            <div className="col-md-5">
              <div className="login signup">
                <div class="ms_register_form">
                  {isEmail === 0 ? (
                    <>
                      <h2 className="loginHeading">Create an account</h2>
                      <form onSubmit={handleSubmit}>
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            class="form-control"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span class="form_icon">
                            <i class="fa_icon form-user" aria-hidden="true"></i>
                          </span>
                          {touched.name && errors.name ? (
                            <>
                              <p className="errorMess">{errors.name}</p>
                            </>
                          ) : null}
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Enter Your user name"
                            class="form-control"
                            name="user_name"
                            value={values.user_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span class="form_icon">
                            <i class="fa_icon form-user" aria-hidden="true"></i>
                          </span>
                          {touched.user_name && errors.user_name ? (
                            <>
                              <p className="errorMess">{errors.user_name}</p>
                            </>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Enter Your Email"
                            class="form-control"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autocomplete="off"
                          />
                          <span class="form_icon">
                            <i
                              class="fa_icon form-envelope"
                              aria-hidden="true"
                            ></i>
                          </span>
                          {touched.email && errors.email ? (
                            <>
                              <p className="errorMess">{errors.email}</p>
                            </>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            placeholder="Enter Password"
                            class="form-control"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autocomplete="off"
                          />
                          <span class="form_icon">
                            <i class="fa_icon form-lock" aria-hidden="true"></i>
                          </span>
                          {touched.password && errors.password ? (
                            <>
                              <p className="errorMess">{errors.password}</p>
                            </>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            class="form-control"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span class="form_icon">
                            <i
                              class=" fa_icon form-lock"
                              aria-hidden="true"
                            ></i>
                          </span>
                          {touched.confirmPassword && errors.confirmPassword ? (
                            <>
                              <p className="errorMess">
                                {errors.confirmPassword}
                              </p>
                            </>
                          ) : null}
                        </div>
                        {isLoader ? (
                          <button class="btn btn-secondary2">
                            <BeatLoader color="#fff" />
                          </button>
                        ) : (
                          <button class="btn btn-secondary2">
                            register now
                          </button>
                        )}
                      </form>
                      <p>
                        Already Have An Account?{" "}
                        <Link to="/login">login here</Link>
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="loginHeading">Email verification</h2>

                      <div className="otpInput">
                        <OTPInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span className="dassh">-</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                      {isLoader ? (
                        <button class="btn btn-secondary2">
                          <BeatLoader color="#fff" />
                        </button>
                      ) : (
                        <button class="btn btn-secondary2" onClick={verifiOtp}>
                          Verify OTP
                        </button>
                      )}

                      <p>
                        <span class="ms_modal resend" onClick={resendOtp}>
                          Resend OTP
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creater;
