import React, { useEffect, useState } from "react";
import "./Checkout.css";
import done from "./done.gif";
import minion from "./minion.gif"
import { Navigate } from "react-router-dom";

const Checkout = ({ checkProps }) => {
  console.log(checkProps);
  const [tableStatus, setTableStatus] = useState(false);
  setTimeout(() => {
    setTableStatus(true);
    <Navigate to="/"/>
  }, 3000);
  return (
    <div className="Shcontainer">
      <div>
        <img src={minion} alt=""  width={"100%"} height="400px"/>
      </div>
      <div className="Shmain">
        <div className="top">
          <h1>{checkProps.hotelName}</h1>
          <h3>{checkProps.hotelAdd}</h3>
        </div>
        <hr />
        <div className="middle">
          <div className="upper">
            <h2>Guest Details</h2>
          </div>
          <div className="lower">
            <div className="left">
              <h5>Guest Name:</h5>
              <h5>Phone no.:</h5>
            </div>
            <div className="right">
              <h5>{checkProps.name} </h5>
              <h5>{checkProps.mobile}</h5>
            </div>
          </div>
        </div>
        <hr />

        <div className="bottom">
          <div className="upper">
            <h2>Booking Summary</h2>
          </div>
          <div className="lower">
            <div className="left">
              <h5>Table Status -</h5>
              <h5>Date & Time</h5>
              <h5>Guests</h5>
              <h5>Name</h5>
              <h5>ID</h5>
            </div>
            <div className="right">
              <h5>
                <span className="tableStatus">
                  {tableStatus
                    ? "Your reservation is confirmed! Happy Dining"
                    : "Wait! While we are confirming your seat."}
                </span>
              </h5>
              <h5>
                {checkProps.date +
                  " " +
                  checkProps.month +
                  " | " +
                  checkProps.time}
              </h5>
              <h5>{checkProps.guests}</h5>
              <h5>{checkProps.name}</h5>
              <h5>39406619</h5>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Checkout;
