import React from "react";
import { useState } from "react";
import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import {users} from "./UserRegistration";

function Home() {
  const username = localStorage.getItem("UserName");
  const userpassword = localStorage.getItem("Userpassword");

  const [uname, setUName] = useState("");
  const [upassword, setupassword] = useState("");
  const navigate = useNavigate();

  const onChangeUName = (e) => {
    setUName(e.target.value);
  };
  const onChangeupassword = (e) => {
    setupassword(e.target.value);
  };

  const onSubmit = () => {
 
    if (username === uname && userpassword === upassword) {
      window.alert("Login Successfully..!");
      navigate("/UserHome");
    } else {
      window.alert("Login Failed..!");
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <h5 className="navbar-brand">WELCOME |</h5>
        <Link to="/">
          <h5 className="navbar-brand text-white">Home</h5>
        </Link>
        <Link to="/AdminLogin">
          <h5 className="navbar-brand text-white">Admin</h5>
        </Link>
      </nav>

      <form className="row g-3 mt-4 align-center">
        <div className="col-md-4 m-4 ">
          <div className=" col d-flex justify-content-center m-2">
            <div className="border border-success p-5">
              <h3>Login </h3>
              <label className="m-1 row">User name : </label>
              <input
                type="text"
                value={uname}
                onChange={onChangeUName}
                className="m-1 row form-control"
                placeholder="Enter username"
                required
              ></input>
              <label className="m-1 row">Password :</label>
              <input
                type="text"
                value={upassword}
                onChange={onChangeupassword}
                className="m-1 row form-control"
                placeholder="Enter Password  "
                required
              ></input>
              <div className="text-center">
                <button
                  className="row mt-2 btn btn-success row "
                  onClick={onSubmit}
                  type="submit"
                >
                  Login
                </button>
              </div>

              <h6>
                Don't have account ?{" "}
                <Link to="/UserRegistration"> Sign Up</Link>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-7.justify-content-sm-center" >
          {/* <h1 className="text-center m-5" > */}
          <img src="img2.jpg" class="img-fluid" alt="Responsive image"></img>
          {/* ???Reserve your right to think, for even to think wrongly is better than not to think at all.??? */}
          {/* </h1> */}
        </div>
      </form>
    </div>
  );
}

export default Home;
