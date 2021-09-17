import React, { Component } from "react";

import Modal from "../Modal/Modal";
import ModalRemove from "../Modal/ModalRemove/ModalRemove";
import defaultAvatar from "../../../images/default.jpg";
import "./Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      showRemove: false,
    };
  }

  render() {
    return (
      <div className="Card-wrapper">
        <div>
          <span className="photo">
            <img
              src={this.props.photo || defaultAvatar}
              alt="Perfil"
              className="avatar"
            />
          </span>
          <span className="item">{this.props.name}</span>
          <span className="Cardbuttons">
            <button
              className="fa fa-thin fa-eraser"
              onClick={() => this.setState({ showRemove: true })}
            ></button>
            <button
              className="fa fa-thin fa-edit"
              onClick={() => this.setState({ showEdit: true })}
            ></button>
          </span>
        </div>
        <div className="flex flex-wrap">
          <div className="item">{this.props.breed}</div>
          <div className="item">{this.props.weight} kg</div>
          <div className="item">{this.props.age} anos</div>
        </div>
        <Modal
          show={this.state.showEdit}
          onClose={() => this.setState({ showEdit: false })}
          title={this.props.name}
          dog={this.props.dog}
          callback={this.props.callbackEdit}
        />
        <ModalRemove
          show={this.state.showRemove}
          onClose={() => this.setState({ showRemove: false })}
          id={this.props.id}
          callback={this.props.callbackRemove}
        />
      </div>
    );
  }
}
