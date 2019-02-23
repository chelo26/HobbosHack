import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../components/auth/auth';

export default class Header extends Component {
  render() {
    const auth = new Auth();
    const { isAuthenticated, userHasAccess, login, logout } = auth;

    return (
      <nav className="navbar navbar-expand-md navbar-light" style= {{height: "102px"}}>        
        <NavLink className="navbar-brand pl-3 mr-2" to="/"><img src={require('../images/designAssets/logos/svg/edyn_ranged_logo.svg')} style={{ height: "55px" }} alt="Edyn Care" /></NavLink>        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="headerNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item colorT1">
              <NavLink className="nav-link" to="/our-approach">Our approach</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/our-carers">Our carers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/our-story">Our story</NavLink>
            </li>
            {
              isAuthenticated() && userHasAccess(['carer']) && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/carer/profile">My Profile</NavLink>
                </li>
              )
            } 
            <li className="nav-item">
              {
                !isAuthenticated() && (
                  <label className="nav-link login" onClick={login}>Login</label>
                )
              }
              {
                isAuthenticated() && (
                  <label className="nav-link login" onClick={logout}> Logout</label>
                )
              }
            </li>

          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item right align-middle p-4">
              <div><font className="colorT2 lightT" style= {{fontSize: "14px" }}>Call us:</font> <font className="colorT8 lightT" style= {{fontSize: "18px" }}>020 894 4444</font></div>
            </li>
            <li className="nav-item right align-middle my-auto pl-1 pr-3">
              <NavLink className="align-middle btn btn-edyn1 white py-3 " to="/find-care-at-home">Get started</NavLink>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}
