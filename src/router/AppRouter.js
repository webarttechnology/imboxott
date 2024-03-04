import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieList from "../pages/Movie/MovieList";
import MovieDetails from "../pages/Movie/MovieDetails";
import Introdution from "../pages/Introdution/Introdution";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forgotpass from "../pages/Auth/Forgotpass";
import Creater from "../pages/Auth/Creater";
import Introductions from "../pages/Creator/Introduction";
import Myaccount from "../pages/Creator/Myaccount";
const AppRouter = () => {
  const [isUser, setIsuser] = useState(0);

  return (
    <>
      <Router>
        <Header setIsuser={setIsuser} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/movie-details" element={<MovieDetails />} />
          <Route path="/introduction" element={<Introdution />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup isUser={isUser} />} />
          <Route
            path="/creator/sign-up"
            element={<Creater isUser={isUser} />}
          />
          <Route path="/creator/my-account" element={<Introductions />} />
          <Route path="/forgot-password" element={<Forgotpass />} />
          <Route path="/profile" element={<Myaccount />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
