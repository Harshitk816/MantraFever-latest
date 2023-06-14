import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Pages/login_component";
import SignUp from "./components/Pages/signup_component";
import UserDetails from "./components/Pages/userDetails";
import ImageUpload from "./components/Pages/imageUpload.";
import DefaultHome from "./components/Pages/defaultHome";
import AboutUs from "./components/Pages/aboutUs";
import Pooja from "./components/Pages/pooja";
import Book from "./components/Pages/bookPandit";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/sign-in"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/" element={<DefaultHome />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/pooja" element={<Pooja />} />
          <Route path="/book" element={<Book/>} />
         
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
