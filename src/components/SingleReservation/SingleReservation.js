import React from "react";
import "./SingleReservation.css";

const SingleReservation = ({ id, name, date, time, number }) => {
  return (
    <div className="singleResy">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number} people</p>
    </div>
  );
};

export default SingleReservation;
