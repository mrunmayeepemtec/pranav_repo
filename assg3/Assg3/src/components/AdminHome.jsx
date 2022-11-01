import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white" >
          Welcome  |
        </h5>
        <Link to="/">
          <h5 className="navbar-brand text-white" >
            
          </h5>
        </Link>
      </nav>
      <div className="d-flex flex-row bd-highlight mb-3 ">
        <div className="col-md-2 bg-success d-flex justify-content-left p-2 bd-highlight ">
          <div className="nav flex-column ">
            <div className="nav-item mb-4 mt-4">
              <Link to="/AddHotel">
                <h5 className="nav-link text-white">
                  Add Hotel
                </h5>
              </Link>
            </div>
            <div className="nav-item mb-4 ">
              <Link to="/UpdateHotel">
                <h5 className="nav-link text-white" >
                  Update Hotel
                </h5>
              </Link>
            </div>
            <div className="nav-item mb-4">
              <Link to="/HotelList">
                <h5 className="nav-link text-white" >
                  Hotel List
                </h5>
              </Link>
            </div>
            <div className="nav-item mb-4">
              <Link to="/Bookings">
                <h5 className="nav-link text-white" >
                  Bookings
                </h5>
              </Link>
            </div>
            <div className="nav-item mb-4">
              <Link to="/CanceledBookings">
                <h5 className="nav-link text-white" >
                  Canceled Bookings
                </h5>
              </Link>
            </div>
            <div className="nav-item mb-4">
              <Link to="/Users">
                <h5 className="nav-link text-white" >
                  Users
                </h5>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-10 p-2 bd-highlight align-self-center ">
          <h1 align="center">Welcome To Admin Home!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
