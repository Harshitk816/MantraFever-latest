import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Header from "../BoilerPlate/Header.js";
import Footer from "../BoilerPlate/Footer.js";
import { Form } from "react-bootstrap";
import background from '../images/leaves.jpg'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Book(){

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [phoneNumber,setphoneNumber]=useState()
    const [poojaType,setpoojaType]=useState()
    const [date,setDate]=useState()
    const [address,setAddress]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/book',{name,email,phoneNumber,poojaType,date,address})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        alert("Submission Success")
    }
    return (
        <div>
            <Header/>
         
        <div style={{backgroundImage:`url(${background})`}} className="bg-white bg-outline-primary row g-3 border border-dark rounded-3">
        <h1 className=" text-6xl mb-5 mt-5 text-midnight  ">Book For <span class="text-indigo-600 dark:text-indigo-5 00">Pandit Ji.</span></h1>
            <form style={{textAlign:'start'}} onSubmit={handleSubmit}>
                <Row>
                    <Col style={{paddingLeft:'50px'}}>
                
                    <label className="col-form-label" htmlFor="name"><h1>Name</h1></label><br></br>
                    <input className=" rounded-lg p-3 w-full text-2xl" type="text" placeholder="Enter Name here" name="name" onChange={(e)=>setName(e.target.value)} required/>
                
                </Col>
                <Col style={{paddingRight:'50px'}}>
                
                    <label className="col-form-label" htmlFor="email"><h1>Email</h1></label><br></br>
                    <input className=" rounded-lg p-3 w-full text-2xl" type="email" placeholder="Enter email here" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
                
                </Col>
                </Row>
                <Row>
                    <Col style={{paddingLeft:'50px'}}>
                
                    <label className="col-form-label" htmlFor="phonenumber"><h1>Phone Number</h1></label><br></br>
                    <input className=" rounded-lg p-3 w-full text-2xl" type="text" placeholder="Enter phone number here" name="phonenumber" onChange={(e)=>setphoneNumber(e.target.value)} required/>
                
                </Col>
                <Col style={{paddingRight:'50px'}}>
               
                    <label className="col-form-label" htmlFor="poojatype"><h1>Pooja Type</h1></label><br></br>
                    <input className=" rounded-lg p-3 w-full text-2xl" type="text" placeholder="Enter pooja type here" name="poojatype" onChange={(e)=>setpoojaType(e.target.value)} required/>
                
                </Col>
                </Row>
                <Row>
                    <Col style={{paddingLeft:'50px'}}>
                
                    <label className="col-form-label" htmlFor="date"><h1>Date</h1></label><br></br>
                    <input className=" rounded-lg p-3 w-full text-2xl" type="date" placeholder="Enter date here" name="date" onChange={(e)=>setDate(e.target.value)} required/>
                
                </Col>
                <Col style={{paddingRight:'50px'}}>
                
                    <label className="col-form-label" htmlFor="address"><h1>Address</h1></label><br></br>
                    <input className=" rounded-lg p-3 w-full text-2xl" type="text" placeholder="Enter Address here" name="address" onChange={(e)=>setAddress(e.target.value)} required/>
               
                </Col>
                </Row>
                <button style={{ margin:'40px',  backgroundColor:"#051542",border:'none'}}  className=" btn btn-primary btn-large mb-3"  type='submit'> Book Now</button>  
                
            </form>
        </div>
        <Footer/>
        
        </div>
    )
}

export default Book;