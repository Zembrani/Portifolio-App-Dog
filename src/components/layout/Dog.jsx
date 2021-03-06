import React, { Component } from "react";
import DefaultFrame from "../defaultComponents/DefaultFrame";
import List from "../defaultComponents/List/List";
import kako from "../../images/kako.jpg";
import vivi from "../../images/vivi.jpg";

export default class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [] };
  }

  componentDidMount() {
    this.initialValue();
  }

  initialValue = () => {
    const initialValues = [
      {
        id: 1,
        photo: kako,
        name: "Kako",
        breed: "Vira-lata",
        weight: "10",
        age: "5",
      },
      {
        id: 2,
        photo: vivi,
        name: "Vitória",
        breed: "Vira-lata",
        weight: "13",
        age: "13",
      },
      {
        id: 3,
        photo: kako,
        name: "Amarelo",
        breed: "Vira-lata",
        weight: "10",
        age: "5",
      },
    ];
    this.setState({ dogs: initialValues });
  };

  updateValue = (newValue) => {
    const values = this.state.dogs;
    const newValues = values.map((value) => {
      if (value.id === newValue.id) {
        return newValue;
      }
      return value;
    });
    this.setState({ dogs: newValues });
  };

  addValue = (newValue) => {
    const values = this.state.dogs;
    values.push(newValue);
    this.setState({ dogs: values });
  };

  removeValue = (toRemove) => {
    const values = this.state.dogs;
    const newValues = values.filter((value) => value.id !== toRemove);
    this.setState({ dogs: newValues });
  };

  render() {
    const myDogsListFrame = (
      <List
        values={this.state.dogs}
        callbackAdd={this.addValue}
        callbackEdit={this.updateValue}
        callbackRemove={this.removeValue}
      ></List>
    );
    return (
      <DefaultFrame title="Seus Doguinhos">{myDogsListFrame}</DefaultFrame>
    );
  }
}
// Permitir cadastrar
// Cadastrar nome, o responsável é quem está logado, raça, peso e idade.
// Associar outros dogs como um grau de parentesco

// Esta tela é a tela de dogs deste usuário
