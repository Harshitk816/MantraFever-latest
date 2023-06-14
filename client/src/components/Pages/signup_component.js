import React, { Component, useState } from "react";

import Header from "../BoilerPlate/Header";
import Footer from "../BoilerPlate/Footer";
import cloud from '../images/cloud.gif';
import background from '../images/leaves.jpg'

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const backgroundStyle = {
    backgroundImage:  `url(${background})`,
backgroundSize: "cover",
height: "100vh"
  }

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("User Exists");
          }
        });
    }
  };

  return (
    <div>
      <Header/>
    
    <div style={{overflow:'hidden',backgroundImage:`url(${background})`}}  className="signup bg-mantrasmoke">
      <div class="p-10 mt-3 mb-2r">
      <div class="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-midnight lg:max-w-4xl">
      <div class="hidden bg-cover lg:block lg:w-1/2" style={{"background-image":`url(${cloud})`}}></div> 
      <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <form onSubmit={handleSubmit}>
        <h2 class="text-2xl font-semibold text-center text-midnight "> <p className='drop-shadow-lg shadow-black'>MantraFever</p></h2>

<p class="text-xl text-center text-mantrablue drop-shadow-lg shadow-black">Please Sign Up!</p>
<div class="flex items-center justify-between mt-4">
    <span class="w-1/5 border-b dark:border-mantragray lg:w-1/4"></span>

    < span  class="drop-shadow-lg shadow-black text-xs text-center text-mantrablue uppercase  hover:underline">Register with email</span>

    <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
</div>
          {/* <div className="p-3">
            Register As :
            <input 
            className="ml-3"
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              className="ml-3"
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div> */}
          {userType == "Admin" ? (
            <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue">
              <label className="drop-shadow-lg shadow-black" >Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue">
            <label className="drop-shadow-lg shadow-black">First name</label>
            <input
              type="text"
              className="form-control form-control block w-full px-4 py-2 text-mantrablue bg-white border border-mantragray rounded-md  dark:text-mantragray dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue">
            <label className="drop-shadow-lg shadow-black">Last name</label>
            <input
              type="text"
              className="form-control form-control block w-full px-4 py-2 text-mantrablue bg-white border border-mantragray rounded-md  dark:text-mantrablue dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue">
            <label className="drop-shadow-lg shadow-black">Email address</label>
            <input
              type="email"
              className="form-control form-control block w-full px-4 py-2 text-mantrablue bg-white border border-mantragray rounded-md  dark:text-mantrablue dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue">
            <label className="drop-shadow-lg shadow-black">Password</label>
            <input
              type="password"
              className="form-control form-control block w-full px-4 py-2 text-mantrablue bg-white border border-mantragray rounded-md  dark:text-mantrablue dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-midnight rounded hover:bg-mantrablue focus:outline-none focus:bg-mantrablue">
              Sign Up
            </button>
          </div>
          <p className="drop-shadow-lg shadow-black forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
      </div>
  );
}
