import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Summary extends Component {
    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    render() {
        return (
            <div >
            <div className="row no-gutter justify-content-center" >
              <div className="col col-sm-9 no-gutter justify-content-center onboarding_form color0 m-2" >
                <div className="col no-gutter my-auto py-5">
                  <div className="text-center py-5">
                    <h2 className= "pb-4">Thanks for completing our carer application. We will get back to you within 24 hours.</h2>
                    <NavLink className="navbar-brand pl-3 mr-2" to="/"><img src={require('../../../../../images/designAssets/logos/svg/edyn_ranged_logo.svg')} style={{ height: '45px' }} alt="Edyn Care" /></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

