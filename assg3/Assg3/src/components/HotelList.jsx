import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HotelList = () => {
  const [hotelArr, setArr] = useState([]);
  useEffect(() => {
    const hotelData = localStorage.getItem("hoteldata");
    setArr(JSON.parse(hotelData));
  }, []);
 
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white">WELCOME </h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home </h5>
        </Link>
        <Link to="/UserHome">
          <h5 className="navbar-brand text-white">Dashboard </h5>
        </Link>
        <Link to="/BookTable">
          <h5 className="navbar-brand text-white">Book Table </h5>
        </Link>
        <Link to="/CancelReservation">
          <h5 className="navbar-brand text-white">Cancel Reservation</h5>
        </Link>
      </nav>
      <div className="text-center m-5"><h1>Hotel Details</h1></div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {hotelArr && hotelArr.length > 0
            ? hotelArr.map((hotelData, index) => {
                if (hotelData.status === 1) {
                  return (
                    <tr>
                      <td> {index + 1}</td>
                      <td>{hotelData.id}</td>
                      <td>{hotelData.name}</td>
                      <td>{hotelData.address}</td>
                      <td>{hotelData.rating}</td>
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
export default HotelList;
