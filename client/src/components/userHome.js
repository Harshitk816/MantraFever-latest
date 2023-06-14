import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from './images/leaves.jpg'
import Footer from "./BoilerPlate/Footer";




export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (

    <div >
      <div >
            
            <nav  class=" shadow bg-midnight">
                <div  class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div  class="flex items-center justify-between">
                        <div >
                            <a class="text-2xl no-underline font-bold text-white dark:text-white md:text-2xl hover:text-gray-300 dark:hover:text-gray-300" >
                              <Link  style={{color:'white', textDecoration: "none"}} to="/">MantraFever</Link></a>
                        </div>
                        
                        <div class="flex md:hidden">
                            <button type="button" class="text-white dark:text-gray-200 hover:text-white dark:hover:text-gray-400 focus:outline-none focus:text-white dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
        
                    <div class="items-center md:flex">
                        
        
                        <div style={{marginRight:"-100px"}} class="flex flex-col md:flex-row md:mx-6">
                            <a class="relative no-underline text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-300" >
                                <Link  style={{color:'white',textDecoration: "none"}} to ="/cart">

                               <span style={{paddingRight:"10px"}}>{userData.fname}</span> 
                                </Link>
                                
                                <button style={{backgroundColor:"#051542"}}  onClick={logOut} className="btn btn-primary transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 me-5 rounded hover:bg-mantrablue">
            Log Out
          </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
                </div>
      <div >
       
        <div style={{backgroundImage:`url(${background})`}} className="bg-white text-midnight p-5">
          <h4>Welcome</h4><h1>{userData.fname}</h1>
          <h4>Email</h4> <h1>{userData.email}</h1>
         
                        <a href="http://localhost:3000/" style={{textDecoration: "none", margin:'auto'}} class=" block w-40 px-4 py-3 text-md font-semibold text-white transition-colors duration-200 transform bg-midnight rounded-md hover:bg-mantrablue">Explore now</a>
                        
                   
          <br />
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
