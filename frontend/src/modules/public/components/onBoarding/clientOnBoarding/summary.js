import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Summary extends Component {
    
    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    render() {
        return (
            <div >
                <div className="row no-gutter justify-content-center"  >
                    <div className="col-md-8 no-gutter justify-content-center onboarding_form color0" >
                        <div className="col my-auto py-5">
                            <div className="text-center py-5">
                                <h2 className= "pb-4">Thanks. We will get back to you shortly.</h2>
                                <NavLink className="navbar-brand pl-3 mr-2" to="/"><img src={require('../../../../../images/designAssets/logos/svg/edyn_ranged_logo.svg')} style={{ height: "40px" }} alt="Edyn Care" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Summary;  
