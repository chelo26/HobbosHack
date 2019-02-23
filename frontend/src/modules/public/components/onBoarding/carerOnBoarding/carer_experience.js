import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import CheckboxGroup from '../../../../generic/reduxFormFields/checkbox_group';
import { renderError } from '../../../../generic/reduxFormFields/fields';
import validate from './carer_on_boarding_validation';


class CarerExperience extends Component {

  componentDidMount() {
    document.getElementById('HEADER').scrollIntoView();
  }

  render() {

    const { handleSubmit, previousPage } = this.props;

    const bootstrapParser = ({ input, label }) => (
      <label key={label} className="radio-container col-md-auto btn btn-outline-secondary btn-sm m-2">
        <input type="checkbox" {...input} />
        <span className="checkmark"> {label}</span>
      </label>
    );

    const proYearsOfExperience = ["0-6 months", "1-3 years", "3-5 years", "Above 5 years", "None"];
    const yearsOfExperience = proYearsOfExperience.map((exp, i) =>
        <div key={i} className= "col-12 col-md-auto no-gutter boxed">
          <label className="radio-container col-12 col-md-auto btn btn-outline-secondary btn-sm m-2">
            <Field type="radio" component="input" name="yearsOfExp" value={exp} />
            <span className="checkmark">{exp}</span>
          </label>
        </div>
    );


    const proDesiredWorkload = ['Occasional, 12-15 hours', 'Part time, 15-25 hours', 'Full time, 25-40 hours'];
    const desiredWorkload = proDesiredWorkload.map((workLoad, i) =>

        <div key={i} className= "col-12 col-md-auto no-gutter boxed">
          <label className="radio-container col-12 col-md-auto btn btn-outline-secondary btn-sm m-2">
            <Field type="radio" component="input" name="desiredWorkload" value={workLoad} />
            <span className="checkmark">{workLoad}</span>
          </label>
        </div>
);

    const carerQualifications = [
      { label: 'Agency induction training', value: 'Agency induction training' },
      { label: 'Care certificate', value: 'Care certificate' },
      { label: 'NVQ/QCF Level 2', value: 'NVQ/QCF Level 2' },
      { label: 'NVQ/QCF Level 3', value: 'NVQ/QCF Level 3' },
      { label: 'NVQ/QCF Level 4 or 5', value: 'NVQ/QCF Level 4 or 5' },
      { label: 'RGN/Nursing qualification', value: 'RGN/Nursing qualification' },
      { label: 'Relavant university degree', value: 'Relavant university degree' },
      { label: 'None', value: 'None' },
    ];

    const proTypeOfWork = [
      { label: 'Day time shifts', value: 'Day time shifts' },
      { label: '1/2 day shifts', value: '1/2 day shifts' },
      { label: 'Sleeping night shifts', value: 'Sleeping night shifts' },
      { label: 'Awake night shifts', value: 'Awake night shifts' },
      { label: 'Short term live-in care', value: 'Short term live-in care' },
      { label: 'Weekend live-in care', value: 'Weekend live-in care' },
      { label: 'Live-in care', value: 'Live-in care' },
    ];

    const procareExperience = [
      { label: 'Alzheimer\'s', value: 'Alzheimer\'s' },
      { label: 'Autism and learning disabilities', value: 'Autism and learning disabilities' },
      { label: 'Cancer', value: 'Cancer' },
      { label: 'Daytime care', value: 'Daytime care' },
      { label: 'Dementia', value: 'Dementia' },
      { label: 'Disability', value: 'Disability' },
      { label: 'Live-in', value: 'Live-in' },
      { label: 'Mobility', value: 'Mobility' },
      { label: 'Night time', value: 'Night time' },
      { label: 'Palliative', value: 'Palliative' },
      { label: 'Respite', value: 'Respite' },
      { label: 'None', value: 'None' },
    ];

    const proCareServices = [
      { label: 'Companionship', value: 'Companionship' },
      { label: 'Housekeeping', value: 'Housekeeping' },
      { label: 'Meal preparation', value: 'Meal preparation' },
      { label: 'Medication reminders', value: 'Medication reminders' },
      { label: 'Mobility', value: 'Mobility' },
      { label: 'Male personal care', value: 'Male personal care' },
      { label: 'Female personal care', value: 'Female personal care' },
      { label: 'Staying active', value: 'Staying active' },
      { label: 'Transportation', value: 'Transportation' },
    ];

    return (
      <form className="" onSubmit={handleSubmit}>
        <div className="row no-gutter justify-content-center">
          <div className="col col-sm-9 no-gutter justify-content-center onboarding_form color0" >
            <h2 className= "pb-4 bold">Your care experience</h2>

            <div className="col no-gutter pb-4">
              <h3 className="">How many years of experience do you have?</h3>
              <div className="form-group">
                <div className= "row no-gutter">
                  {yearsOfExperience}
                </div>
              </div>
              <Field name="yearsOfExp" component={renderError} />
            </div>

            <div className="col no-gutter pb-4">
              <h3 className="">Do you have relevant care qualifications?</h3>
              <div className="form-group">
                <div className= "row no-gutter">
                  <CheckboxGroup component={bootstrapParser} options={carerQualifications} name="careQualification" />
                </div>
              </div>
              <Field name="careQualification" component={renderError} />
            </div>

            <div className="col no-gutter pb-4">
              <h3 className="">Desired workload? Hours per week</h3>
              <div className="form-group">
                <div className= "row no-gutter ">
                  {desiredWorkload}
                </div>
              </div>
              <Field name="desiredWorkload" component={renderError} />
            </div>

            <div className="col no-gutter pb-4">
              <h3 className="">What type of carer work are you looking for?</h3>
              <div className="form-group">
                <div className= "row no-gutter">
                  <CheckboxGroup component={bootstrapParser} options={proTypeOfWork} name="typeOfWork" />
                </div>
              </div>
              <Field name="typeOfWork" component={renderError} className="invalid-feedback" />
            </div>

            <div className="col no-gutter pb-4">
              <h3 className="">I have experience with:</h3>
              <div className="form-group">
                <div className= "row no-gutter">
                  <CheckboxGroup component={bootstrapParser} options={procareExperience} name="careExperience" />
                </div>
              </div>
              <Field name="careExperience" component={renderError} className="invalid-feedback" />
            </div>

            <div className="col no-gutter pb-4">
              <h3 className="">I am happy and confident to perform folllowing tasks:</h3>
              <div className="form-group">
                <div className= "row no-gutter">
                  <CheckboxGroup component={bootstrapParser} options={proCareServices} name="careServices" />
                </div></div>
              <Field name="careServices" component={renderError} className="invalid-feedback" />
            </div>

                    <div className="col no-gutter pb-4">
                    <h3 className="pb-2">I am unhappy or unconfident to perform folllowing tasks:</h3>
                    <div className="form-group">
                    <div className= "row no-gutter">
                        <Field name="uncomfortableDoing" className="form-control select_onboarding" rows="5" component="textarea" placeholder="Enter answer below...." />
                        <Field name="uncomfortableDoing" component={renderError} />
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
        </form >
    );
}
}


export default reduxForm({
    form: 'carer-onboarding',               
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true,
    validate: validate
})(CarerExperience)  
