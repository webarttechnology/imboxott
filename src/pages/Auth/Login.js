import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MESSAGE, loginSchema } from "../../schemas/Validation.js";
import * as API from "../../API/Index.js";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
const initialValues = {
  email: "",
  password: "",
};
const Login = ({ setCartItem, setIsLogin }) => {
  const navigate = useNavigate();
  const [isLoader, setIsloader] = useState(false);
  const { values, errors, handleBlur, setValues, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        loginSubmit(values);
      },
    });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setIsloader(false);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const loginSubmit = async (value) => {
    console.log("values", values);
    setIsloader(true);
    try {
      const response = await API.user_login(value);
      console.log("response", response);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg, 1);
        setIsloader(false);
        navigate("/");
        setCartItem(response.data.data.cart);
        const headerObj = {
          Authorization: `Bearer ${response.data.token_code}`,
        };
        localStorage.setItem("_tokenCode", JSON.stringify(headerObj));
        localStorage.setItem("isLogin", true);
        setIsLogin(localStorage.getItem("isLogin"));
        localStorage.setItem("__userId", response.data.data.id);
      } else {
        setIsloader(false);
        MESSAGE(response.data.msg);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="align-items-center justify-content-center row">
            <div className="col-md-5">
              <div className="login">
                <h2 className="loginHeading">Login</h2>
                <div class="ms_register_form">
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        class="form-control"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span class="form_icon">
                        <i class="fa_icon form-envelope" aria-hidden="true"></i>
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
                    {isLoader ? (
                      <button class="btn btn-secondary2">
                        <BeatLoader color="#fff" />
                      </button>
                    ) : (
                      <button class="btn btn-secondary2" onClick={loginSubmit}>
                        login now
                      </button>
                    )}
                  </form>
                  <div class="popup_forgot">
                    <Link to="/forgot-password">Forgot Password ?</Link>
                  </div>
                  <p>
                    Don't Have An Account?{" "}
                    <Link to="/sign-up" class="ms_modal1 hideCurrentModel">
                      register here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
