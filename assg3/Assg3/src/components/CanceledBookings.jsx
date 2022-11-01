import React from 'react';
import { Link } from "react-router-dom";


const CanceledBookings = () => {
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
      <Link to="/AdminHome">
          <button className="row mt-2 btn btn-success m-2" type="submit">
            Back
          </button>
        </Link>
    </div>
  )
}

export default CanceledBookings