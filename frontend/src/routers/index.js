import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from '../history';

import PublicPortal from '../modules/public';

export default class RouteComponent extends Component {
  render() {
    let pathnameArr = (history.location.pathname).split('/');
    // console.log(pathnameArr[1]);
    let portalPath = pathnameArr ? pathnameArr[1] : '';
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' component={PublicPortal} />       
        </Switch>
      </Router>
    );
  }
}
