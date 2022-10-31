import React, { Component } from "react";
import Reservations from "../Reservations/Reservations";
import Form from "../Form/Form";
import { getReservations } from "../../apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // loading: false,
      reservations: [
        // { id: 1, name: "Dinne k", date: "12/1/23", time: "12:00pm", number: 5 },
      ],
    };
  }

  componentDidMount() {
    // this.setState({ loading: true });
    getReservations()
      .then((data) => {
        console.log("data", data);
        this.setState({
          loading: false,
          reservations: data,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: `Uh oh! That's a ${error}, please try again later!`,
        });
      });
  }

  addResy = (newResy) => {
    this.setState({ reservations: [...this.state.reservations, newResy] });
  };

  render() {
    return (
      <main className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Form addResy={this.addResy} />
        {/* {!this.state.reservations.length && <h2>No Reservations</h2>} */}
        {this.state.reservations.length && (
          <Reservations reservations={this.state.reservations} />
        )}
      </main>
    );
  }
}

export default App;
