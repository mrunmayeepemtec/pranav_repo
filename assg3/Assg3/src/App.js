import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import AddHotel from "./components/AddHotel";
import UpdateHotel from "./components/UpdateHotel";
import HotelList from "./components/HotelList";
import HotelDetail from "./components/HotelDetail";
import Bookings from "./components/Bookings";
import CancelReservation from "./components/CancelReservation";
import BookTable from "./components/BookTable";
import CanceledBookings from "./components/CanceledBookings";
import BookingHistory from "./components/BookingHistory";
import Users from "./components/Users";
import Registration from "./components/Registration";
import AdminHome from "./components/AdminHome";
import Home from "./components/Home";
import UserHome from "./components/UserHome";

function App() {
  const hotelData=[
    {
      Id:1,
      Name:"Hotel V star",
      Address:"Pune",
      Rating:4,
    },
    {
      Id:2,
      Name:"tag",
      Address:"maumbai",
      Rating:5,
    },
    {
      Id:3,
      Name:"lemon spice",
      Address:"benglore",
      Rating:3,
    },
    {
      Id:4,
      Name:"grand",
      Address:"A.nagar",
      Rating:3,
    },
  ]
  const bookingData=[
    {
      UId:1,
      Id:1,
      Name:"shivam",
      No_Of_Table:4,
    },
    {
      UId:2,
      Id:1,
      Name:"pranav",
      No_Of_Table:5,
    },
    {
      UId:3,
      Id:1,
      Name:"abc",
      No_Of_Table:2,
    },
    {
      UId:1,
      Id:2,
      Name:"xyz",
      No_Of_Table:4,
    },
  ]
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AdminHome" element={<AdminHome />}></Route>
        <Route path="/UserHome" element={<UserHome />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/AddHotel" element={<AddHotel hotelData={hotelData}/>}></Route>
        <Route path="/UpdateHotel" element={<UpdateHotel />}></Route>
        <Route path="/HotelList" element={<HotelList hotelData={hotelData}/>}></Route>
        <Route path="/HotelDetail" element={<HotelDetail />}></Route>
        <Route path="/BookTable" element={<BookTable bookingData={bookingData} />}></Route>
        <Route path="/BookingHistory" element={<BookingHistory />}></Route>
        <Route path="/Bookings" element={<Bookings />}></Route>
        <Route path="/CanceledBookings" element={<CanceledBookings />}></Route>
        <Route path="/CancelReservation" element={<CancelReservation />}></Route>
        <Route path="/Users" element={<Users />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
