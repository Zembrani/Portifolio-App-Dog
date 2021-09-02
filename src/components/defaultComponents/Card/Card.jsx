import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="Card-wrapper">
        <div>
          <span className="photo">
            <img src={this.props.photo} alt="Perfil" className="avatar" />
          </span>
          <span className="item">{this.props.name}</span>
          <span className="Cardbuttons">
            <i className="fa fa-thin fa-eraser"></i>
            <i className="fa fa-thin fa-edit"></i>
          </span>
        </div>
        <div className="flex flex-wrap">
          <div className="item">{this.props.breed}</div>
          <div className="item">{this.props.weight} kg</div>
          <div className="item">{this.props.age} anos</div>
        </div>
      </div>
    );
  }
}
