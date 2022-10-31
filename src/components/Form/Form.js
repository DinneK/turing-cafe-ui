import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitResy = (event) => {
    event.preventDefault();
    const newResy = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addResy(newResy);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="Date"
          name="date"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder=""
          name="number"
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        />
        <button onClick={(event) => this.submitResy(event)}>Submit Resy</button>
      </form>
    );
  }
}

export default Form;

// { id: 18939837
