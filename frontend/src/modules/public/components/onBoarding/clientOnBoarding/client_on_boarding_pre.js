import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class ClientOnBoardingPreMessage extends Component {
    constructor() {
        super();

        //Convert to user name and user id


    }




    render() {
        return (
            <div>
                <div className="row no-gutter justify-content-center"  >
                    <div className="col-md-8 no-gutter justify-content-center onboarding_form_client color0" >
                        <div className="col no-gutter my-auto">
                            <div className="text-center ">
                            <img src={require('../../../../../images/designAssets/logos/svg/edyn_logomark.svg')} className="mb-5" style={{ height: '100px' }} alt="Edyn Care" />
                                <h1 className="mb-5">Your care journey is about to begin</h1>

                                <div className="form-group col no-gutter text-center ">
 If you’re ready to start your care journey please fill in the following pages about your requirements and one of our care specialists will get back to you within 24 hours. If you’re not quite ready and would like some advice please call us now on <a className="colorT8" href="tel:020 3970 9900">020 3970 9900</a> or email us at <a className="colorT8" href="mailto:hello@edyn.care?subject=Care advice">hello@edyn.care</a> instead.
</div>
                                <NavLink to="/find-your-carer-now"><button type="button" className="wandsworth-get-startedDark  my-5" title="Get started">Get started now</button></NavLink>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ClientOnBoardingPreMessage;

