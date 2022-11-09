import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookingList = () => {
  const [bookArr, setArr] = useState([]);
  useEffect(() => {
    const bookingData = localStorage.getItem("bookingData");
    setArr(JSON.parse(bookingData));
  }, []);
 
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white">The Hotel Piece</h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/AdminHome">
          <h5 className="navbar-brand text-white">Dashboard</h5>
        </Link>
        <Link to="/HotelMaster">
          <h5 className="navbar-brand text-white">Hotel Master</h5>
        </Link>
        <Link to="/EditHotel">
          <h5 className="navbar-brand text-white">Edit Hotel Master </h5>
        </Link>
        <Link to="/CanceledBookingList">
          <h5 className="navbar-brand text-white">Canceled Bookings</h5>
        </Link>
        <Link to="/UsersList">
          <h5 className="navbar-brand text-white">Users</h5>
        </Link>
      </nav>
      <div className="text-center m-5">
        <h1>Bookings</h1>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Hotel Id</th>
            <th>Booking Id</th>
            <th>No Of Tables</th>
          </tr>
        </thead>
        <tbody>
          {bookArr && bookArr.length > 0
            ? bookArr.map((bookingData, index) => {
                if (bookingData.status === 1) {
                  return (
                    <tr>
                      <td>{bookingData.UId}</td>
                      <td>{bookingData.HId}</td>
                      <td>{bookingData.BId}</td>
                      <td>{bookingData.No_of_Table}</td>
                    </tr>
                  );
                }
              })
            : "no data"}
        </tbody>
      </table>
    </div>
  );
};
export default BookingList;
