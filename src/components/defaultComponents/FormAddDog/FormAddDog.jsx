import React, { Component, setState } from "react";

export default class FormAddDog extends Component {
  constructor(props) {
    super(props);
    this.state = props.dog;
  }

  handleSubmit = (event) => {
    // console.log(event.target);
  };

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  render() {
    // const { dog } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Raça:
          <input
            type="text"
            name="breed"
            value={this.state.breed}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
