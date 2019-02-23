import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class HeaderOB extends Component {
  render() {
    return (
      <nav id="HEADER" className="navbar navbar-expand-md navbar-light">
        <NavLink className="navbar-brand" to="/"><img src={require('../../../../../images/designAssets/logos/svg/edyn_ranged_logo.svg')} style={{ height: '40px' }} alt="Edyn Care" /></NavLink>
        <div className="ml-auto " id="">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item right align-middle p-4">
              <div><a className="colorT8" href="tel:020 3970 9900">020 3970 9900</a></div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderOB
