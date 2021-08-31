import React, { Component } from "react";
import DefaultFrame from "../defaultFrame/DefaultFrame";

export default class Dog extends Component {
  render() {
    return <DefaultFrame title="Seus Doguinhos"></DefaultFrame>;
  }
}
// Permitir cadastrar
// Cadastrar nome, o responsável é quem está logado, raça, peso e idade.
// Associar outros dogs como um grau de parentesco

// Esta tela é a tela de dogs deste usuário