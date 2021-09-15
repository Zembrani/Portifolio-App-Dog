import React, { Component } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";

import "./Drawer.css";

export default class Drawer extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  // este Menus vai sair e vai para a store no redux
  render() {
    const menus = [
      {
        id: 1,
        title: "Meus Dogs",
        url: "/dogs",
        icon: "fa-solid fa-paw",
      },
      {
        id: 2,
        title: "Encontre Dogs",
        url: "/find",
        icon: "fa-solid fa-compass",
      },
      {
        id: 3,
        title: "Adote seu Dog",
        url: "/adoption",
        icon: "fa-solid fa-heart",
      },
    ];

    const userSession = (
      <li>
        <i className="fa"></i>
        <span className="nav-text hello">Olá</span>
      </li>
    );

    const toggle = (
      <li>
        <i className="fa"></i>
        <span className="nav-text toggle">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor="#5bc0de"
            height={15}
          />
          <span className="nav-text">Change drawer</span>
        </span>
      </li>
    );

    const drawerContent = menus.map(({ id, url, title, icon }) => (
      <li key={id}>
        <Link to={url}>
          <i className={"fa " + icon + " fa-2x"}></i>
          <span className="nav-text">{title}</span>
        </Link>
      </li>
    ));

    // no futuro utilizar o toggle como uma forma de alterar o design da página, como modo dark.
    // utilizar um toggle que mude para mais de duas opções
    const showToggle = false;

    return (
      <nav className="main-menu">
        <ul>
          {userSession}
          {showToggle && toggle}
          {drawerContent}
        </ul>
      </nav>
    );
  }
}
