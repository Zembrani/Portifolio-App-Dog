import React, { Component, setState } from "react";
import "./FormDog.css";

export default class FormAddDog extends Component {
  constructor(props) {
    super(props);
    this.state = props.dog || this.initialState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initialState() {
    return {
      name: null,
      age: null,
      breed: null,
      weight: null,
      photo: null,
      id: null,
    };
  }

  handleSubmit = (callback) => {
    callback(this.state);
  };

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  render() {
    return (
      <form className="formGroup">
        <div>
          <label htmlFor="name" value="Nome">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="breed" value="Raça">
            Raça
          </label>
          <input
            type="text"
            name="breed"
            id="breed"
            value={this.state.breed}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="age" value="Idade">
            Idade
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="weight" value="Peso">
            Peso
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={this.state.weight}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="photo" value="Foto" id="photo">
            Foto
          </label>
          <input type="file" name="photo" id="photo" />
        </div>
      </form>
    );
  }
}
