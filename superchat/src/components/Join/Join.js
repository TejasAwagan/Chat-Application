import React, { useState } from "react";
import "../Join/Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;
const sendUser = () =>{
  user = document.getElementById("joinInput").value;
}

const Join = () => {
    const [name, Setname] = useState("");

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>Super Chat</h1>
        <input onChange={(e)=> Setname(e.target.value)} type="text" id="joinInput" placeholder="Enter Your Name" />
        <Link onClick={(e)=> !name ?e.preventDefault():null} to="/chat">
          <button className="joinbtn" onClick={sendUser}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export  {user} ;
export default Join;

