import React, { Component } from "react";
import DefaultFrame from "../defaultComponents/DefaultFrame";
import Card from "../defaultComponents/Card/Card";
import kako from "../../images/kako.jpg";
import vivi from "../../images/vivi.jpg";

export default class Dog extends Component {
  render() {
    const myDogsList = [
      {
        photo: kako,
        name: "Kako",
        breed: "Vira-lata",
        weight: "10",
        age: "5",
      },
      {
        photo: vivi,
        name: "Vitória",
        breed: "Vira-lata",
        weight: "13",
        age: "13",
      },
    ];

    const myDogsListFrame = myDogsList.map(
      ({ photo, name, breed, weight, age }) => (
        <Card
          photo={photo}
          name={name}
          breed={breed}
          weight={weight}
          age={age}
        />
      )
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
