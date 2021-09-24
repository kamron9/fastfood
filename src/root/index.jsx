import React from "react";
import Sidebar from "../components/Sidebar";
import { Container } from "./style";
import { sidebarData } from "../utils/sidebar";
import Notfound from "../components/Notfound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Root = () => {
  return (
    <Container>
      <Router>
        <Switch>
          {sidebarData.map(({ id, path }) => (
            <Route key={id} path={path} component={Sidebar} />
          ))}
        </Switch>

        <Switch>
          {sidebarData.map(({ id, path, Component }) => (
            <Route exact key={id} path={path} component={Component} />
          ))}
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </Container>
  );
};
export default Root;
