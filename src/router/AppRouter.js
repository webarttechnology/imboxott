import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieList from "../pages/Movie/MovieList";
import MovieDetails from "../pages/Movie/MovieDetails";
import Introdution from "../pages/Introdution/Introdution";
import Login from "../pages/Auth/Login";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/movie-details" element={<MovieDetails />} />
          <Route path="/introduction" element={<Introdution />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
