import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import CheckboxGroup from '../reduxFormFields/checkbox_group';
import validate from './carer_on_boarding_validation';
import { jsonApiHeader } from './../../../../utils/utilActions';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span style={{ width: "100%", marginTop: ".25rem", fontSize: "80%", color: "#FF9999" }}>{error}</span> : false;


class LetsGetYouKnowBetter extends Component {

    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    render(){
    const { handleSubmit, previousPage } = this.props;

    const bootstrapParser = ({ input, label }) => (
        <label className="radio-container col-md-auto btn btn-outline-secondary btn-sm m-2">
            <input type="checkbox" {...input} />
            <span className="checkmark"> {label}</span>
        </label>
    );

    let optionsAreasOfInterest = [
        { label: 'Antiques', value: 'Antiques' },
        { label: 'Art', value: 'Art' },
        { label: 'Cooking', value: 'Cooking' },
        { label: 'Dancing', value: 'Dancing' },
        { label: 'Exercise', value: 'Exercise' },
        { label: 'Film', value: 'Film' },
        { label: 'Food', value: 'Food' },
        { label: 'Music', value: 'Music' },
        { label: 'Politics', value: 'Politics' },
        { label: 'Reading', value: 'Reading' },
        { label: 'Spirtuality', value: 'Spirtuality' },
        { label: 'Sport', value: 'Sport' },
        { label: 'Travelling', value: 'Travelling' },
    ];

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="row no-gutter justify-content-center">
                <div className="col-md-8 no-gutter justify-content-center onboarding_form color0" >
                <h2 className= "pb-4"> Lets get to know you better</h2>
                <div className="col no-gutter pb-5">
                    <h3 className="pb-2">Are you interested in any of the following?</h3>
                    <div className="form-group">
                    <div className= "row no-gutter">
                        <CheckboxGroup component={bootstrapParser} options={optionsAreasOfInterest} name="AreasOfInterest" />
                    </div>
                    </div>
                    <Field name="careExperience" component={renderError} className="invalid-feedback" />
                </div>

                <div className="col no-gutter pb-5">
                    <h3 className="pb-2">Tell us about yourself - what you like, family and friend and what drives you?</h3>
                    <div className="form-group">
                    <div className= "row no-gutter">
                        <Field name="Tasks" className="form-control" rows="5" component="textarea" placeholder="Enter answer below...." />
                        <Field name="Tasks" component={renderError} />
                    </div>
                    </div>
                </div>

                <div className="row no-gutter justify-content-between pt-5">
                    <div className="col no-gutter text-left">
                        <button onClick={previousPage} type="button" className="align-middle btn btn-next white py-3">Back</button>
                    </div>
                    <div className="col no-gutter text-right">
                        <button onClick={handleSubmit} type="submit" className="align-middle btn btn-next white py-3">Submit</button>
                    </div>
                </div>

            </div>
        </div>
        </form>
    );
}
}

 const onSubmit = async (values, dispatch, { nextPage }) => {
     await fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer', {
       method: "POST",
       body: JSON.stringify(values, null, 2),
       headers: jsonApiHeader('application/json'),
     }).then(function (response) {
         if (response.status === 200) {
             response.json().then(json => {
                 dispatch(reset('carer-onboarding'));
                 return nextPage();
             });
         }

     }, function (error) {
        console.log(error)
     })
 };


export default reduxForm({
    form: 'carer-onboarding',                
    destroyOnUnmount: false,        
    forceUnregisterOnUnmount: true,  
    validate,
    onSubmit
})(LetsGetYouKnowBetter)  
