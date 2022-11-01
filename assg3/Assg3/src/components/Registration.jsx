import React from "react";
import { Link } from "react-router-dom";


function Registration() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white" >
          The Hotel Piece |
        </h5>
        <Link to="/"><h5 className="navbar-brand text-white" >
         Home
        </h5></Link>
      </nav>

      <div className=" col  m-2">
        <div className="border border-success p-3">
          <h3 align="center"> Registration </h3>
          <label className="m-1 row">Id : </label>
          <input
            type="number"
            className="m-1 row form-control"
            placeholder="Enter user-ID"
            required
          ></input>
          <label className="m-1 row"> Username : </label>
          <input
            type="text"
            className="m-1 row form-control"
            placeholder="Enter User name"
            required
          ></input>
          <label className="m-1 row">Mail Id :</label>
          <input
            type="mail"
            className="m-1 row form-control"
            placeholder="Enter Mail Id  "
            required
          ></input>
          <label className="m-1 row">Mobile No : </label>
          <input
            type="number"
            className="m-1 row form-control"
            placeholder="Enter Mobile No"
            required
          ></input>
          <label className="m-1 row">Address : </label>
          <input
            type="text"
            className="m-1 row form-control"
            placeholder="Enter Address"
            required
          ></input>
          <label className="m-1 row">Password :</label>
          <input
            type="text"
            className="m-1 row form-control"
            placeholder="Enter Password  "
            required
          ></input>
          <div className="text-center">
            <button className="row mt-2 btn btn-success row " type="submit">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
