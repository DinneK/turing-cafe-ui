const getReservations = () => {
  return fetch(`http://localhost:3001/api/v1/reservations`).then((response) => {
    console.log({ response });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  });
};

export { getReservations };
