import React from "react";
import { Link } from "react-router-dom";


const UpdateHotel = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white" >
          WELCOME |
        </h5>
        <Link to="/"><h5 className="navbar-brand text-white" >
         Home
        </h5></Link>
      </nav>

      <div className=" col  m-2">
        <div className="border border-success p-3">
          <h3 align="center"> Update Hotel </h3>
          <label className="m-1 row">Id : </label>
          <input
            type="number"
            className="m-1 row form-control"
            placeholder="Enter user-ID"
            required
          ></input>
          <label className="m-1 row"> Name : </label>
          <input
            type="text"
            className="m-1 row form-control"
            placeholder="Enter User name"
            required
          ></input>
          <label className="m-1 row">Address : </label>
          <input
            type="text"
            className="m-1 row form-control"
            placeholder="Enter Address"
            required
          ></input>
          <label className="m-1 row">Rating:</label>
          <input
            type="text"
            className="m-1 row form-control"
            placeholder="Enter Password  "
            required
          ></input>
          <div className="text-center">
          <Link to="/AdminHome"> <button
              className="row mt-2 btn btn-success row m-3"
              type="submit">
              Submit
            </button></Link>
            <Link to="/AdminHome"> <button
              className="row mt-2 btn btn-success row m-3"
              type="submit">
              Back
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateHotel;
