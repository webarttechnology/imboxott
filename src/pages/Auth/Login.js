import React from "react";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="align-items-center justify-content-center row">
            <div className="col-md-5">
              <div className="login">
                <h2 className="loginHeading">Login</h2>
                <br />
                <label>Email : </label>
                <input className="form-control" placeholder="Email id" />
                <label>Password : </label>
                <input className="form-control" placeholder="Password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
