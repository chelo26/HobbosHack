import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class HeaderOB extends Component {
  render() {
    return (
      <nav id="HEADER" className="navbar navbar-expand-md navbar-light">
        <NavLink className="navbar-brand ob-logo" to="/"><img src={require('../../../../../images/designAssets/logos/svg/edyn_ranged_logo.svg')} style={{ height: '40px' }} alt="Edyn Care" /></NavLink>
        <div className=" ob-number " id="">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item right align-middle p-3">
              <div><h2 className="colorT8 mb-0"><a className="colorT8 mb-0" href={"tel:020 3970 9900"}>020 3970 9900</a></h2></div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderOB
