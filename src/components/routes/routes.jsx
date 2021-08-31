import React from "react";
import { Route, Switch } from "react-router-dom";
// import NotFound from '../layout/NotFound'
import Dog from "../layout/Dog";
import Find from "../layout/Find";
import Adoption from "../layout/Adoption";

const Routes = (props) => (
  <Switch>
    <Route path="/dogs">
      <Dog></Dog>
    </Route>
    <Route path="/find">
      <Find></Find>
    </Route>
    <Route path="/adoption">
      <Adoption></Adoption>
    </Route>
  </Switch>
);

export default Routes;
