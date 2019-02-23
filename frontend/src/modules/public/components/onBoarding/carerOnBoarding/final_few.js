import React, { Component } from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import validate from './carer_on_boarding_validation';
import CheckboxGroup from '../../../../generic/reduxFormFields/checkbox_group';
import { RenderFields, RenderSelect, renderError } from '../../../../generic/reduxFormFields/fields';
import { ToastContainer, toast } from 'react-toastify';


class FinalFew extends Component {

    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    render() {

        const bootstrapParser = ({ input, label }) => (
            <label className="radio-container col-md-auto btn btn-outline-secondary btn-sm m-2">
                <input type="checkbox" {...input} />
                <span className="checkmark"> {label}</span>
            </label>
        );

        const othCarerAcquisitionChannel = [
            { label: "Facebook", value: "Facebook" },
            { label: "Twitter", value: "Twitter" },
            { label: "Google", value: "Google" },
            { label: "Reed", value: "Reed" },
            { label: "Indeed", value: "Indeed" },
            { label: "CV Library", value: "CV Library" },
            { label: "Total jobs", value: "Total jobs" },
            { label: "Gum Tree", value: "Gum Tree" },
            { label: "Flyer", value: "Flyer" },
            { label: "Informational brochure", value: "Informational brochure" },
            { label: "Newspaper article", value: "Newspaper article" },
            { label: "Job centre", value: "Job centre" },
            { label: 'None listed', value: 'None listed' },];

        const optionsAreasOfInterest = [
            { label: 'Antiques', value: 'Antiques' },
            { label: 'Art', value: 'Art' },
            { label: 'Cooking', value: 'Cooking' },
            { label: 'Dancing', value: 'Dancing' },
            { label: 'Exercise', value: 'Exercise' },
            { label: 'Film', value: 'Film' },
            { label: 'Food', value: 'Food' },
            { label: 'Gardening', value: 'Gardening' },
            { label: 'Music', value: 'Music' },
            { label: 'Politics', value: 'Politics' },
            { label: 'Reading', value: 'Reading' },
            { label: 'Spirtuality', value: 'Spirtuality' },
            { label: 'Sport', value: 'Sport' },
            { label: 'Travelling', value: 'Travelling' },
        ];
        
        const { handleSubmit, previousPage } = this.props;
        return (
                < form className = "" > <div className="row no-gutter justify-content-center">
                    <div className="col col-sm-9 no-gutter justify-content-center onboarding_form color0">

                        <h2 className="pb-4 bold">Your Interests</h2>

                        <div className="col no-gutter pb-4">
                            <h3 className="">Are you interested in any of the following?</h3>
                            <div className="form-group">
                                <div className="row no-gutter">
                                    <CheckboxGroup
                                        component={bootstrapParser}
                                        options={optionsAreasOfInterest}
                                        name="interests.select"/>
                                </div>
                            </div>
                            <Field
                                name="interests.select"
                                component={renderError}
                                className="invalid-feedback"/>
                        </div>

                        <div className="col no-gutter pb-4">
                            <h3 className="">Other interests</h3>
                            <div className="form-group">
                                <div className="row no-gutter">
                                    <Field
                                        name="interests.other"
                                        className="form-control select_onboarding"
                                        rows="5"
                                        component="textarea"
                                        placeholder="Enter answer below...."/>
                                    <Field name="interests.other" component={renderError}/>
                                </div>
                            </div>
                        </div>

                        <div className="col no-gutter pb-4">
                            <h3 className="">How did you hear about edyn.care?</h3>
                            <div className="form-group">
                                <div className="row no-gutter">
                                    <CheckboxGroup
                                        component={bootstrapParser}
                                        options={othCarerAcquisitionChannel}
                                        name="aquisitionChannel"/>
                                </div>
                            </div>
                            <Field
                                name="aquisitionChannel"
                                component={renderError}
                                className="invalid-feedback"/>
                        </div>

                        <div className="col no-gutter pb-4">
                            <h3 className="pb-2">Tell us about yourself - what you like and what drives you?</h3>
                            <div className="form-group">
                                <div className="row no-gutter">
                                    <Field
                                        name="aboutYourself"
                                        className="form-control"
                                        rows="5"
                                        component="textarea"
                                        placeholder="Enter answer below...."/>
                                    <Field name="aboutYourself" component={renderError}/>
                                </div>
                            </div>
                        </div>

            <div className="row no-gutter justify-content-between pt-5">
              <div className="col no-gutter text-left">
                <button onClick={previousPage} type="button" className="align-middle btn btn-next7 white py-3">Back</button>
              </div>
              <div className="col no-gutter text-right">
                <button onClick={handleSubmit} type="submit" className="align-middle btn btn-next7 white py-3">Next</button>
              </div>
            </div>

                    </div>
                </div> 
            </form>
        )
    }
}

export default reduxForm({
    form: 'carer-onboarding',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate,
})(FinalFew)