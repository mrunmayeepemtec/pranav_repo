import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import AdminRegistration from "./components/AdminRegistration";
import BookingList from "./components/BookingList";
import BookTable from "./components/BookTable";
import CanceledBookingList from "./components/CanceledBookingList";
import CancelReservation from "./components/CancelReservation";
import Home from "./components/Home";
import HotelList from "./components/HotelList";
import HotelMaster from "./components/HotelMaster";
import EditHotel from "./components/EditHotel";
import UserHome from "./components/UserHome";
import UserRegistration from "./components/UserRegistration";
import UsersList from "./components/UsersList";

function App() {
 
  const usersData=[
    {
      Id:1,
      Name:"Pranav",
      Address:"Pune",
      MobileNo:9775464789,
      Password:123
    },
    
    {
      Id:3,
      Name:"Abc",
      Address:"Pune",
      MobileNo:9999994789,
      Password:456
    },
    {
      Id:4,
      Name:"XYZ",
      Address:"satara",
      MobileNo:9999998999,
      Password:567
    },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AdminHome" element={<AdminHome />}></Route>
        <Route path="/UserHome" element={<UserHome />}></Route>
        <Route path="/UserRegistration" element={<UserRegistration />}></Route>
        <Route path="/AdminRegistration" element={<AdminRegistration />}></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        <Route path="/HotelMaster" element={<HotelMaster />}></Route>
        <Route path="/EditHotel" element={<EditHotel />}></Route>
        <Route path="/HotelList" element={<HotelList />}></Route>
        <Route path="/BookTable" element={<BookTable  />}></Route>
        <Route path="/BookingList" element={<BookingList />}></Route>
        <Route path="/CanceledBookingList" element={<CanceledBookingList />}></Route>
        <Route path="/UsersList" element={<UsersList usersData={usersData}/>}></Route>
        <Route path="/CancelReservation" element={<CancelReservation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
