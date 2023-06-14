import React, { Component, useState } from "react";
import Header from "../BoilerPlate/Header";
import Footer from "../BoilerPlate/Footer";
import background from '../images/leaves.jpg'
import mandir from "../images/mandir.gif";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }

  return (
    <div>
      <Header/>
    
  <div style={{overflow:'hidden',backgroundImage:`url(${background})`}} className="bg-mantrasmoke overflow-hidden">
    
    
    <div class="p-10 mt-3 mb-2">

<div class="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-midnight lg:max-w-4xl">
<div class="hidden bg-cover lg:block lg:w-1/2" style={{"background-image":`url(${mandir})`}}></div>

<div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
<h2 class="text-2xl drop-shadow-lg shadow-black font-semibold text-center text-midnight "> MantraFever</h2>

<p class="text-xl drop-shadow-lg shadow-black text-center text-midnight ">Welcome back!</p>



<div class="flex items-center justify-between mt-4">
    <span class="w-1/5 border-b dark:border-mantrablue lg:w-1/4"></span>

    < span  class="text-xs drop-shadow-lg shadow-black text-center text-mantrablue uppercase  hover:underline">Login with email</span>

    <span class="w-1/5 border-b dark:border-mantrablue lg:w-1/4"></span>
</div>
<form onSubmit={handleSubmit}>
<div class="mt-4">
    
    <div className="mb-3 block mb-2 text-sm font-medium text-mantrablue ">
            <label className="drop-shadow-lg shadow-black">Email address</label>
            <input
            className=" form-control block w-full px-4 py-2 text-midnight bg-white border border-mantragray rounded-md  dark:text-mantragray dark:border-mantragray focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
</div>

<div className="mt-4">
            <label 
            class="block mb-2 text-sm drop-shadow-lg shadow-black font-medium text-mantrablue "
            >Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <div className="mt-3 mb-2">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input mx-2 mb-1"
                id="customCheck1"
              />
              <label className="drop-shadow-lg shadow-black custom-control-label" htmlFor="customCheck1">
                 Remember me
              </label>
            </div>
          </div>


<div className="d-grid mt-8">
            <button
            class=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-midnight rounded hover:bg-mantrablue focus:outline-none focus:bg-mantrablue" 
             type="submit" >
              Login
            </button>
          </div>
</form>
<div class="flex items-center justify-between mt-4">
    <span class="w-1/5 border-b dark:border-mantrablue md:w-1/4"></span>

    <a href="/sign-up" class="no-underline text-xs drop-shadow-lg shadow-black text-mantrablue uppercase  hover:no-underline">or sign up</a>
    
    <span class="w-1/5 border-b dark:border-mantrablue md:w-1/4"></span>
</div>
</div>
</div>

</div>
</div>
<Footer/>
    </div>
  );
}
