import { MESSAGE, passwordSchema } from "../../schemas/Validation.js";
import * as API from "../../API/Index.js";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";
const initialValues = {
  password: "",
  confirmPassword: "",
};
const NewPasswordSet = ({ email }) => {
  console.log("email", email);
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: passwordSchema,
      onSubmit: (values) => {
        loginSubmit(values);
      },
    });

  const loginSubmit = async (values) => {
    const data = Object.assign({ email: email });
    Reflect.deleteProperty(values, "confirmPassword");
    let newPassdata = {
      ...values,
      ...data,
    };
    console.log("newPassdata", newPassdata);
    console.log("values", values);
    try {
      const response = await API.forgotPass_new(newPassdata);
      console.log("response", response);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg, 1);
        navigate("/login");
      }
    } catch (error) {}
  };

  return (
    <>
      <h2 className="mb-5 loginHeading">Set New Password</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group mrt-5">
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
            <i class=" fa_icon form-lock" aria-hidden="true"></i>
          </span>
          {touched.confirmPassword && errors.confirmPassword ? (
            <>
              <p className="errorMess">{errors.confirmPassword}</p>
            </>
          ) : null}
        </div>
        <button class="btn btn-secondary2">Submit</button>
      </form>
    </>
  );
};

export default NewPasswordSet;
