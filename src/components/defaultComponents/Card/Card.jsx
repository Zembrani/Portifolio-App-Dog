import React, { Component, useState } from "react";

import Modal from "../Modal/Modal";
import "./Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div className="Card-wrapper">
        <div>
          <span className="photo">
            <img src={this.props.photo} alt="Perfil" className="avatar" />
          </span>
          <span className="item">{this.props.name}</span>
          <span className="Cardbuttons">
            <button
              className="fa fa-thin fa-eraser"
              onClick={() => this.setState({ show: true })}
            ></button>
            <button
              className="fa fa-thin fa-edit"
              onClick={() => this.setState({ show: true })}
            ></button>
          </span>
        </div>
        <div className="flex flex-wrap">
          <div className="item">{this.props.breed}</div>
          <div className="item">{this.props.weight} kg</div>
          <div className="item">{this.props.age} anos</div>
        </div>
        <Modal
          show={this.state.show}
          onClose={() => this.setState({ show: false })}
          title={this.props.name}
          breed={this.props.breed}
          age={this.props.age}
        ></Modal>
      </div>
    );
  }
}
