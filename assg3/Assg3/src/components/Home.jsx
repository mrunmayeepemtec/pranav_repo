import React from "react";
import { useState } from "react";
import { Form, Link, Navigate, useNavigate} from "react-router-dom";
import "../components/css/home.css";
import logo from '../components/images/img1.jpg'
function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand" >
          Welcome   |
        </h5>
        <Link to="/"><h5 className="navbar-brand text-white" >
         Home
        </h5></Link>
      </nav>
<div>
      <form className="row g-3 mt-4" >
        <div className="col-md-4 m-4 ">
          <div className="border border-success p-5">
            <h3> Login </h3>
            <label className="m-1 row"> Username : </label>
            <input
              type="text"
              className="m-1 row form-control"
              placeholder="Enter user-ID"
              required
            ></input>
            <label className="m-1 row">Password :</label>
            <input
              type="text"
              className="m-1 row form-control"
              placeholder="Enter Password  "
              required
            ></input>
            <div className="text-left">
            <Link to="/AdminHome"><button className="row mt-4 btn btn-success row " type="submit">
                Login
              </button></Link>
            </div>
            <h6 className="mt-3">Don't have account ? <Link to="/Registration">Sign Up</Link></h6>
          </div>
        </div>
        <div className="col-md-7" id="img"> </div>
      </form>
   </div>   
    </div>
  );
}

export default Home;
