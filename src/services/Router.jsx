import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          exact
          path="/projetos"
          component={ Projects }
        />
      </Switch>
    );
  }
}
