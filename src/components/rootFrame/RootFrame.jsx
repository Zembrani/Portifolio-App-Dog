import React, { Component } from "react";

import "./RootFrame.css";
import Drawer from "./Drawer";
import Routes from "../routes/routes";

export default class RootFrame extends Component {
  render() {
    return (
      <div className="RootFrame">
        <Drawer />
        <Routes />
      </div>
    );
  }
}
