import React, { Component } from "react";
import Reservations from "../Reservations/Reservations";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [
        // { id: 1, name: "Dinne k", date: "12/1/23", time: "12:00pm", number: 5 },
      ],
    };
  }

  render() {
    return (
      <main className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        {!this.state.reservations.length && <h2>No Reservations</h2>}
        <Reservations reservations={this.state.reservations} />
      </main>
    );
  }
}

export default App;
