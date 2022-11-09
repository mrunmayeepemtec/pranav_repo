import React, { useState } from "react";
import { Link } from "react-router-dom";

const HotelMaster = (props) => {
  const [Id, setId] = useState();
  const [Name, setName] = useState();
  const [Address, setAddress] = useState();
  const [Rating, setRating] = useState();

  const  addHotel=()=> {
    const object = {
        id : Id , 
        name : Name ,
        address : Address,
        rating : Rating ,
        status : 1
    }
    const hotelData = JSON.parse(localStorage.getItem("hoteldata") || " []")
    hotelData.push(object)
    localStorage.setItem("hoteldata",JSON.stringify(hotelData))
    window.alert("Hotel Data Added successfully");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white"></h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/AdminHome">
          <h5 className="navbar-brand text-white">Dashboard</h5>
        </Link>
        <Link to="/EditHotel">
          <h5 className="navbar-brand text-white">Edit Hotel Master </h5>
        </Link>
        <Link to="/BookingList">
          <h5 className="navbar-brand text-white">Bookings</h5>
        </Link>
        <Link to="/CanceledBookingList">
          <h5 className="navbar-brand text-white">Canceled Bookings</h5>
        </Link>
        <Link to="/UsersList">
          <h5 className="navbar-brand text-white">Users</h5>
        </Link>
      </nav>
      <div className="text-center m-5"><h1>Add Hotel</h1></div>
      <div className="inputBody m-5">
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>Hotel ID </b>
            </label>
          </span>
          <input
            id="id"
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            placeholder="Enter Hotel Id"
            aria-label="With input"
          ></input>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>Hotel Name </b>
            </label>
          </span>
          <input
            id="id"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
            aria-label="With input"
          ></input>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>Hotel Address</b>
            </label>
          </span>
          <input
            id="name"
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            placeholder="Address"
            aria-label="With input"
          ></input>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>Rating</b>
            </label>
          </span>
          <input
            id="rating"
            onChange={(e) => setRating(e.target.value)}
            className="form-control"
            placeholder="Rating"
            aria-label="With input"
          ></input>
        </div>
        <div className="successButton mt-3">
          <button onClick={addHotel} type="button" className="btn btn-success">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelMaster;
