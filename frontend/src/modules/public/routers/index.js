import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';


import HomePage from '../components/homepage';
import NotFound from '../components/not_found';


function fireTracking() {
  ReactGA.pageview(window.location.hash);
  console.log('window.location.hash', window.location.hash)
}

export default class PublicPortalWrap extends Component {
  render() {
    let location = window.location;
    
    return (
      <Switch onUpdate={fireTracking}>
        <Route exact path='/' component={HomePage} />
        
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}


