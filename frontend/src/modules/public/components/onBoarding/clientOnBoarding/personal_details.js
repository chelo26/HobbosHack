import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { RenderFields, RenderSelect, renderError } from '../../../../generic/reduxFormFields/fields';
import { UPPER_FIRST, NUMBERS_ONLY, normalizeZipCode } from '../../../../generic/reduxFormFields/normalization';
import validate from './client_on_boarding_validation';
import asyncValidate from './async_validation';

var PersonalDetails = (props) => {

    const { handleSubmit, hasCareForClientValue, previousPage } = props

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="row no-gutter justify-content-center">
                <div className="col-md-8 no-gutter justify-content-center onboarding_form color0" >

                <h2 className="py-4 bold">Your details</h2>
                    {hasCareForClientValue === "0" &&
                        <div className="form-group col no-gutter">
                            <Field name="relClientRecipient" component={RenderSelect} className="form-control client" label="relClientRecipient">
                                <option value="" default>Relationship to care recipient</option>
                                <option value="Parent">Parent</option>
                                <option value="Child">Child</option>
                                <option value="Other">Other</option>
                            </Field>
                        </div>

                    }
                    <div className="form-group col no-gutter">
                        <Field name="name.firstName" type="text" className="form-control client" component={RenderFields} label="First name" placeholder="First name"  normalize= {UPPER_FIRST} />
                    </div>

                    <div className="form-group col no-gutter">
                        <Field name="name.surname" type="text" className="form-control client" component={RenderFields} placeholder="Surname"  normalize= {UPPER_FIRST} />
                    </div>

                    <div className="form-group col no-gutter">
                        <Field name="Email" type="text" className="form-control client" component={RenderFields} placeholder="Email" />
                    </div>

                    <div className="form-group col no-gutter">
                        <Field name="phoneContact" type="text" className="form-control client" component={RenderFields} placeholder= "Contact number" />
                    </div>

                    {
                        hasCareForClientValue === "1" &&
                    
                            <div>

                        <div className="form-group col no-gutter">
                            <Field type="text" name="postCode" className="form-control client" component={RenderFields} placeholder="Post code" normalize= {normalizeZipCode}/>
                        </div>

                        <div className="form-group row no-gutter justify-content-between py-2">
                            <label className="radio-container col">
                                <Field type="radio" component="input" name="gender" value="Male" />
                                <span className="text-center checkmark p-2"> Male</span>
                            </label>
                            <label className="radio-container col ">
                                <Field type="radio" component="input" name="gender" value="Female" />
                                <span className="text-center checkmark p-2 ">Female</span>
                            </label>
                            <Field name="gender" component={renderError} />
                        </div>

                        <div className="form-group row no-gutter">
                            <div className="col-auto no-gutter">
                                <h3 className="question">Date of birth:</h3>
                            </div>
                                <div className="col no-gutter">
                                <Field type="date" className="form-control client" component={RenderFields} name="dateOfBirth" label= "Date of birth" />
                            </div>
                        </div>

                            </div>

                    }


                    {
                        hasCareForClientValue === "0" &&

                    <div >
                        <h2 className="py-4 bold">Care recipient's details</h2>

                        <div className="form-group col no-gutter">
                            <Field name="recipient.name.firstName" type="text" className="form-control client" component={RenderFields} placeholder="First name" />
                        </div>

                        <div className="form-group col no-gutter">
                            <Field name="recipient.name.surname" type="text" className="form-control client" component={RenderFields} placeholder="Surname" />
                        </div>

                        <div className="form-group row no-gutter justify-content-between py-2">
                            <label className="radio-container col">
                                <Field type="radio" component="input" name="recipient.gender" value="Male" />
                                <span className="text-center checkmark p-2"> Male</span>
                            </label>
                            <label className="radio-container col ">
                                <Field type="radio" component="input" name="recipient.gender" value="Female" />
                                <span className="text-center checkmark p-2 ">Female</span>
                            </label>
                            <Field name="recipient.gender" component={renderError} />
                        </div>

                        <div className="form-group row no-gutter">
                            <div className="col-auto no-gutter">
                                <h3 className="question">Date of birth:</h3>
                            </div>
                                <div className="col no-gutter">
                                <Field type="date" className="form-control client" component={RenderFields} name="recipient.dateOfBirth" placeholder= "Date of birth" />
                            </div>
                        </div>

                        <div className="form-group col no-gutter">
                            <Field type="text" name="recipient.postCode" className="form-control client" component={RenderFields} placeholder="Post code" normalize= {normalizeZipCode} />
                        </div>
                        
                    </div>
                    }

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

PersonalDetails = reduxForm({
    form: 'client-onboarding',             
    destroyOnUnmount: false,       
    forceUnregisterOnUnmount: true, 
    validate: validate,
})(PersonalDetails) 


const selector = formValueSelector('client-onboarding') 
PersonalDetails  = connect(
  state => {
    const hasCareForClientValue = selector(state, 'careForClient')
    return {
        hasCareForClientValue,
    }
  }
)(PersonalDetails)

export default PersonalDetails