import React from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white">WELCOME </h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home </h5>
        </Link>
        <Link to="/HotelList">
          <h5 className="navbar-brand text-white">Hotels </h5>
        </Link>
        <Link to="/BookTable">
          <h5 className="navbar-brand text-white">Book Table </h5>
        </Link>
        <Link to="/CancelReservation">
          <h5 className="navbar-brand text-white">Cancel Reservation </h5>
        </Link>
      </nav>
      <div className="d-flex flex-row bd-highlight bg-secondary bg-gradient p-5 mx-auto ">
        <div className="col align-self-center m-5">
          <h1 align="center">Welcome To User Home!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
