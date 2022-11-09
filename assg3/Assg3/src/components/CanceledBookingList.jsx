import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CanceledBookingList = () => {
  const [cancelArr, setArr] = useState([]);
  useEffect(() => {
    const cbookingData = localStorage.getItem("cbookingData");
    setArr(JSON.parse(cbookingData));
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
        <Link to="/BookingList">
          <h5 className="navbar-brand text-white">Bookings</h5>
        </Link>
        <Link to="/UsersList">
          <h5 className="navbar-brand text-white">Users</h5>
        </Link>
      </nav>
      <div className="text-center m-5">
        <h1>Canceled Bookings</h1>
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
          {cancelArr && cancelArr.length > 0
            ? cancelArr.map((cbookingData, index) => {
                if (cbookingData.status === 1) {
                  return (
                    <tr>
                      <td>{cbookingData.UId}</td>
                      <td>{cbookingData.HId}</td>
                      <td>{cbookingData.BId}</td>
                      <td>{cbookingData.No_of_Table}</td>
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
export default CanceledBookingList;
