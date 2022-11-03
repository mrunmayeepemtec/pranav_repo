import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CancelReservation = () => {
  const [bookArr, setArr] = useState([]);
  useEffect(() => {
    const bookingData = localStorage.getItem("bookingData");
    setArr(JSON.parse(bookingData));
  }, []);
  const navigate = useNavigate();
  const Cancel = (val2) => {
    const res = window.confirm("Are you sure To delete");
    if (res) {
      bookArr.map((data) => {
        if (data.BId === val2) {
          const object = {
            UId : data.UId , 
            HId : data.HId ,
            BId : data.BId,
            No_of_Table : data.No_of_Table ,
            status : 1
        }
        const cbookingData = JSON.parse(localStorage.getItem("cbookingData") || " []")
        cbookingData.push(object)
        localStorage.setItem("cbookingData",JSON.stringify(cbookingData))
          data.status = 0;
        }
        localStorage.setItem("bookingData", JSON.stringify(bookArr));
      });
    }
    navigate("/CancelReservation");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand text-white">The Hotel Piece</h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/UserHome">
          <h5 className="navbar-brand text-white">Dashboard</h5>
        </Link>
        <Link to="/HotelList">
          <h6 className="navbar-brand text-white">Hotels</h6>
        </Link>
        <Link to="/BookTable">
          <h5 className="navbar-brand text-white">Book Table</h5>
        </Link>
      </nav>
      <div className="text-center m-5">
        <h1>Cancel Reservation</h1>
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
                      <td>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => Cancel(bookingData.BId)}
                        >
                          Cancel
                        </button>
                      </td>
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
export default CancelReservation;
