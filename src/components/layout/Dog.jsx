import React, { Component } from "react";
import DefaultFrame from "../defaultComponents/DefaultFrame";
import Card from "../defaultComponents/Card/Card";
import List from "../defaultComponents/List/List";
import kako from "../../images/kako.jpg";
import vivi from "../../images/vivi.jpg";

export default class Dog extends Component {
  render() {
    const myDogsList = [
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

    const myDogsListCard = myDogsList.map(
      ({ id, photo, name, breed, weight, age }) => (
        <Card
          id={id}
          photo={photo}
          name={name}
          breed={breed}
          weight={weight}
          age={age}
        />
      )
    );

    const myDogsListFrame = <List value={myDogsList}></List>;
    return (
      <DefaultFrame title="Seus Doguinhos">{myDogsListFrame}</DefaultFrame>
    );
  }
}
// Permitir cadastrar
// Cadastrar nome, o responsável é quem está logado, raça, peso e idade.
// Associar outros dogs como um grau de parentesco

// Esta tela é a tela de dogs deste usuário
