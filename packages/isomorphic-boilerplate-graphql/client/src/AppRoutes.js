import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './containers/Profile/Profile';
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
