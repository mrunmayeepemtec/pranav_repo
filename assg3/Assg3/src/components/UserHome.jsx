import React from "react";
import { Link } from "react-router-dom";


const UserHome = () => {
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

      <div className="col-md-2 bg-success ">
        <ul className="nav flex-column ">
          <div className="nav-item mb-4 mt-4">
           <Link to="/HotelList"> <h5 className="nav-link text-white" aria-current="page" >
               Hotel List
            </h5></Link>
          </div>
          <div className="nav-item mb-4 ">
          <Link to="/HotelDetail"><h5 className="nav-link text-white" >
             Hotel Detail
            </h5></Link>
          </div>
          <div className="nav-item mb-4">
          <Link to="/BookTable"> <h5 className="nav-link text-white" >
              Book Table
            </h5></Link>
          </div>
          <div className="nav-item mb-4">
          <Link to="/BookingHistory"> <h5 className="nav-link text-white" >
              Booking History
            </h5></Link>
          </div>
          <div className="nav-item mb-4">
          <Link to="/CancelReservation"><h5 className="nav-link text-white" >
              Cancel Reservation
            </h5></Link>
          </div>
        </ul>
      </div>

      <div className="col-md-10 ">
        <div>
    
        </div>
      </div>
    </div>
  );
};

export default UserHome;
