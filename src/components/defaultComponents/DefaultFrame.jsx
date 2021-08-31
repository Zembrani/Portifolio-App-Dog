import React, { Component } from "react";
import "./DefaultFrame.css";

export default class DefaultFrame extends Component {
  render() {
    return (
      <div className="defaultFrame">
        <h1>{this.props.title}</h1>
        <div className="line"></div>
        {this.props.children}
      </div>
    );
  }
}
