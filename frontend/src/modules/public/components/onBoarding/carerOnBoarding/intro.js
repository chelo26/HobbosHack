import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { reduxForm, reset, Field} from 'redux-form';
import { RenderFields } from '../../../../generic/reduxFormFields/fields';
import validate from './carer_on_boarding_validation'

class Intro extends Component {

    componentDidMount(){
        this.props.dispatch(reset('client-onboarding'))
        document.getElementById('HEADER').scrollIntoView();
    }

    render() {

        const { handleSubmit, previousPage} = this.props;
        return(
            <form className="" onSubmit={handleSubmit}>
                <div className="row no-gutter justify-content-center" >
                    <div className= "col-11 col-md-8 no-gutter text-center">
                        <h2 className= "bold h32 ">Welcome to the edyn.care carer application</h2>
                    </div>
                </div>

    <div className="row no-gutter justify-content-center" >
                    <div className= "col-11 col-md-8 no-gutter text-center">
                        <h2 className= "pb-1 p-3">This application form will take no longer than a couple of minutes to complete. 
                        <br/><br/>
                            Please ensure you fill out all sections truthfully and accurately. 
                            You will need to present proof of your skills and qualifications.
                        </h2>
                    </div>
                </div>



                <div className="row no-gutter justify-content-center">
                    <div className="col col-sm-9 no-gutter justify-content-center onboarding_form color0 m-2" >

                        <div className="col-12 text-center no-gutter m-auto pb-5">
                            <h2 className="pb-4">Enter your email address to begin
                            </h2>
                            <div className="col no-gutter w-100 text-left boxed">
                                <Field name="Email" type="text" className="form-control" component={RenderFields} placeholder="Email" />
                            </div>
                        </div>

                        <div className="row no-gutter justify-content-between">
                            <div className="col no-gutter text-left">
                                <NavLink className="align-middle btn btn-next7 white py-3 ob-nav-btn" to="/become-a-carer">Back</NavLink>
                            </div>
                            <div className="col no-gutter text-right">
                                <button onClick={handleSubmit} type="submit" className="align-middle btn btn-next7 white py-3 ob-nav-btn">Continue</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row no-gutter justify-content-center  pt-4" >
                    <div className= "col-11 col-md-8 no-gutter text-center">
                        <h2 className= "pb-1 p-3">We believe that better treated carers leads to better care. That is why we treat our carers fairly.</h2>
                    </div>
                </div>

    <div className="row no-gutter justify-content-center our_benefits_full_cover">
      <div className="our_benifits_max" style= {{padding: '0'}}>
        <div className="col-md-12 no-gutter text-center">
          <h2 className="our_service_h2_ww text-center">
            Our Benefits
          </h2>
        </div>
        <div className="wandsworth-srvc-section-one col-md-12 no-gutter">
          <div className="row no-gutter p-2">
            <div className="col-md-6 col-sm-12 no-gutter">                   
              <div className="d-flex align-items-center ww_service_box">
                <div className="centerh p-2 ww_service_img">
                  <img
                       src={require("../../../../../images/designAssets/textures/png/hp_flower.png")}
                       className="centerh"
                       alt="Edyn Care"
                       />
                </div>
                <div className="p-2 ww_text_serive_bx">
                  <h6>A fair deal
                  </h6>
                  <p className="service_ww_mx_p_1">
                    We keep our costs down, so we can give you the rewards you deserve. 
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center ww_service_box">
                <div className="centerh p-2 ww_service_img">
                  <img
                       src={require("../../../../../images/designAssets/textures/png/hp_flower.png")}
                       className="centerh"
                       alt="Edyn Care"
                       />
                </div>
                <div className="p-2 ww_text_serive_bx">
                  <h6>Flexible to your needs
                  </h6>
                  <p className="service_ww_mx_p_2">
                    We help you work when you want and manage your own schedule. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 no-gutter">                  
              <div className="d-flex align-items-center ww_service_box">
                <div className="centerh p-2 ww_service_img">
                  <img
                       src={require("../../../../../images/designAssets/textures/png/hp_flower.png")}
                       className="centerh"
                       alt="Edyn Care"
                       />
                </div>
                <div className="p-2 ww_text_serive_bx">
                  <h6>In-house training
                  </h6>
                  <p className="service_ww_mx_p_3">
                    Our in-house trainer ensures that you are continuing to develop your skills. 
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center ww_service_box">
                <div className="centerh p-2 ww_service_img">
                  <img
                       src={require("../../../../../images/designAssets/textures/png/hp_flower.png")}
                       className="centerh"
                       alt="Edyn Care"
                       />
                </div>
                <div className="p-2 ww_text_serive_bx">
                  <h6>Get paid quickly
                  </h6>
                  <p className="service_ww_mx_p_4">
                    Get paid straight into your bank account every 14 days and monitor your hours worked online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


            </form>
        )
    }
}

Intro = reduxForm({
    form: 'carer-onboarding',    
    destroyOnUnmount: false,       
    forceUnregisterOnUnmount: true, 
    validate: validate,
})(Intro)  

export default Intro
