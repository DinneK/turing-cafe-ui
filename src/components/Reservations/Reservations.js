import React from "react";
import SingleReservation from "../SingleReservation/SingleReservation";
import "./Reservations.css";

const Reservations = ({ reservations }) => {
  const SingleReservations = reservations.map((reservation) => {
    return (
      <SingleReservation
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
      />
    );
  });

  return <div className="reservation-container">{SingleReservations}</div>;
};

export default Reservations;
