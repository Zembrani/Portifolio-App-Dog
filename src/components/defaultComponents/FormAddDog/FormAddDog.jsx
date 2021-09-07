import React, { Component } from "react";

export default class FormAddDog extends Component {
  render() {
    return (
      <div>
        <div>{this.props.breed}</div>
        <div>{this.props.age}</div>
      </div>
    );
  }
}
