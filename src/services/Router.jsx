import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Projects } from '../pages';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projetos" component={Projects} />
    </Switch>
  );
}
