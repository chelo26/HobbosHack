import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderFields, RenderSelect, renderError } from '../../../../generic/reduxFormFields/fields';
import CheckboxGroup from '../../../../generic/reduxFormFields/checkbox_group';
import validate from './client_on_boarding_validation';

const bootstrapParser = ({ input, label }) => (
    <label className="radio-container btn btn-outline-secondary btn-sm m-2" style={{ minWidth: "170px" }}>
        <input type="checkbox" {...input} />
        <span className="checkmark"> {label}</span>
    </label>
);

// Todo get icons in component to appear beside each checkbox
const bootstrapParserIcon = ({ input, label }) => (
    <label className="radio-container btn btn-outline-secondary btn-sm m-2" style={{ minWidth: "170px" }}>
        <input type="checkbox" {...input} />
        <span className="checkmark"> {label}</span>
    </label>
);

var foodIcon = <img src={require('../../../../../images/icons/food.svg')} style={{width: "30px"}} alt="Food" />

let optionsCareNeeds = [
    { label: 'Companionship', value: 'Companionship', image: foodIcon },
    { label: 'Housekeeping', value: 'Housekeeping', image: foodIcon },
    { label: 'Meal preparation', value: 'Meal preparation', image: foodIcon },
    { label: 'Medication reminders', value: 'Medication reminders', image: foodIcon },
    { label: 'Mobility', value: 'Mobility', image: foodIcon },
    { label: 'Personal care', value: 'Personal care', image: foodIcon },
    { label: 'Staying active', value: 'Staying active', image: foodIcon },
    { label: 'Transportation', value: 'Transportation', image: foodIcon },
];


let optionsCareServices = [
    { label: 'Palliative care', value: 'Palliative care' },
    { label: 'Dementia care', value: 'Dementia care' },
    { label: 'Respite care', value: 'Respite care' },
    { label: 'Post-discharge care', value: 'Post-discharge care' },
    { label: 'Disability care', value: 'Disability care' },
    { label: 'Cancer care', value: 'Cancer care' },
];


class CareNeeds extends Component {

    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    render(){
    
        const { handleSubmit, previousPage } = this.props;
        return (
            <form className="" onSubmit={handleSubmit}>
                <div className="row no-gutter justify-content-center">
                    <div className="col-md-8 no-gutter justify-content-center onboarding_form color0" >
                    <h2 className= "bold pb-4">Care needs</h2>

                        <div className="text-center pb-4">
                            <h2>Tell us a little more about your care needs.</h2>
                            <h2>This will help our care specilists to find the best match for you.</h2>
                        </div>

                        <div className="row no-gutter justify-content-around text-center">
                            <div className="col-11 col-md-6 no-gutter">
                                <h2 className="pb-4">Non-medical</h2>
                                <div className="form-group no-gutter col-md-12 text-center">
                                    <CheckboxGroup component={bootstrapParserIcon} options={optionsCareNeeds} name="recipient.careNeeds" />
                                </div>
                                <Field name="careNeeds" component={renderError} className="invalid-feedback" />
                            </div>
                            <div className="col-11 col-md-6 no-gutter">
                                <h2 className="pb-4">Medical</h2>
                                <div className="form-group col-md-12 no-gutter text-center">
                                    <CheckboxGroup component={bootstrapParser} options={optionsCareServices} name="recipient.careServices" />
                                </div>
                                <Field name="careServices" component={renderError} className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="row no-gutter justify-content-between pt-5">
                            <div className="col no-gutter text-left">
                                <button onClick={previousPage} type="button" className="align-middle btn btn-next white py-3">Back</button>
                            </div>
                            <div className="col no-gutter text-right">
                                <button onClick={handleSubmit} type="submit" className="align-middle btn btn-next white py-3">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

export default reduxForm({
    form: 'client-onboarding',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate: validate,
    //    asyncValidate: asyncValidate,
    //    asyncBlurFields: ['Email'],
})(CareNeeds)  