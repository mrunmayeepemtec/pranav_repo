import React from "react";
import { Link} from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white">WELCOME |</h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/HotelMaster">
          <h5 className="navbar-brand text-white">ADD HOTEL</h5>
        </Link>
        <Link to="/EditHotel">
          <h5 className="navbar-brand text-white">Edit </h5>
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

      <div className="d-flex flex-row bd-highlight bg-info bg-gradient p-5 mx-auto ">
        <div className="col align-self-center ">
          <h1 align="center">Welcome To Admin Home!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
