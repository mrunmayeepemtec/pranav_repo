import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookTable = (props) => {
  const [UId, setUId] = useState();
  const [HId, setId] = useState();
  const [BId, setBId] = useState();
  const [No_Of_Table, setNTable] = useState();

  const  bookTable=()=> {
    const object = {
        UId : UId , 
        HId : HId ,
        BId : BId,
        No_of_Table : No_Of_Table ,
        status : 1
    }
    const bookingData = JSON.parse(localStorage.getItem("bookingData") || " []")
    bookingData.push(object)
    localStorage.setItem("bookingData",JSON.stringify(bookingData))
    window.alert("Booking Data Added successfully");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white"></h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/UserHome">
          <h5 className="navbar-brand text-white">Dashboard</h5>
        </Link>
        <Link to="/HotelList">
          <h5 className="navbar-brand text-white">Hotels</h5>
        </Link>
        <Link to="/CancelReservation">
          <h5 className="navbar-brand text-white">Cancel Reservation</h5>
        </Link>
      </nav>
      <div className="text-center m-5"><h1>Book Table</h1></div>
      <div className="inputBody m-5">
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>User ID </b>
            </label>
          </span>
          <input
            id="uid"
            onChange={(e) => setUId(e.target.value)}
            className="form-control"
            placeholder="Enter User UId"
            aria-label="With input"
          ></input>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>Hotel Id </b>
            </label>
          </span>
          <input
            id="hid"
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            placeholder="Enter HotelId"
            aria-label="With input"
          ></input>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>Book Id</b>
            </label>
          </span>
          <input
            id="bid"
            onChange={(e) => setBId(e.target.value)}
            className="form-control"
            placeholder="Book Id"
            aria-label="With input"
          ></input>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-text">
            <label>
              <b>No_Of_Table</b>
            </label>
          </span>
          <input
            id="count"
            onChange={(e) => setNTable(e.target.value)}
            className="form-control"
            placeholder="No of Table"
            aria-label="With input"
          ></input>
        </div>
        <div className="successButton mt-3">
          <button onClick={bookTable} type="button" className="btn btn-success">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
