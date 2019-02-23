import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { reset, Field, reduxForm } from 'redux-form';
import { renderError } from '../../../../generic/reduxFormFields/fields';
import validate from './carer_on_boarding_validation';
import { ToastContainer, toast } from 'react-toastify';
import { jsonApiHeader } from './../../../../admin/actions/constants';

class Review extends Component {
  componentDidMount() {
    document.getElementById('HEADER').scrollIntoView();
  }

  render() {

    const { handleSubmit, previousPage } = this.props;
    return (
      <form className="" onSubmit={handleSubmit}>
        <div className="row no-gutter justify-content-center">
          <div className="col col-sm-9 no-gutter justify-content-center onboarding_form color0 m-2">
            <h2 className="pb-4 bold">Review</h2>

            <div className="row no-gutter">
              <div className="col-8 no-gutter pb-4 my-auto">
                <h3 className="">You confirm that all the information you have provide is truthful and accurate to your best knowledge</h3>
              </div>
              <div className="col no-gutter pb-4">
                <div className="form-group row no-gutter text-right">
                  <div className="col no-gutter">
                    <label className="radio-container">
                      <Field type="radio" component="input" name="truthful" value="Yes" />
                      <span className="text-center checkmark p-2 yes-no"> Yes</span>
                    </label>
                    <Field name="truthful" component={renderError} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutter">
              <div className="col-8 no-gutter pb-4 my-auto">
                <h3 className="">You have read and agree to our <a href="https://www.edyn.care/terms" target="_blank">Terms and Conditions</a> and <a href="https://www.edyn.care/privacy" target="_blank">Privacy</a> policy?</h3>
              </div>
              <div className="col no-gutter pb-4">
                <div className="form-group row no-gutter text-right">
                  <div className="col no-gutter">
                    <label className="radio-container">
                      <Field type="radio" component="input" name="readTerms" value="Yes" />
                      <span className="text-center checkmark p-2 yes-no"> Yes</span>
                    </label>
                    <Field name="readTerms" component={renderError} />
                  </div>
                </div>
              </div>
            </div>


            <div className="row no-gutter">
              <div className="col-8 no-gutter pb-4 my-auto">
                <h3 className="">You agree to us contacting you via the provided email address and phone number regarding care work with edyn.care</h3>

              </div>
              <div className="col no-gutter pb-4">
                <div className="form-group row no-gutter text-right">
                  <div className="col no-gutter">
                    <label className="radio-container">
                      <Field type="radio" component="input" name="contactConcent" value="Yes" />
                      <span className="text-center checkmark p-2 yes-no"> Yes</span>
                    </label>
                    {/* <label className="radio-container">
                                    <Field type="radio" component="input" name="contactConcent" value="No" />
                                    <span className="text-center checkmark p-2 yes-no">No </span>
                                </label> */}
                    <Field name="contactConcent" component={renderError} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutter justify-content-between pt-5">
              <div className="col no-gutter text-left">
                <button
                  onClick={previousPage}
                  type="button"
                  className="align-middle btn btn-next7 white py-3">Back</button>
              </div>
              <div className="col no-gutter text-right">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="align-middle btn btn-next7 white py-3">Submit</button>
              </div>
            </div>

          </div>
        </div>
      </form>
    );
  }
}

const onSubmit = async (values, dispatch, { nextPage }) => {

  let languages = [];
  if (values.languagesOther) {
    values.languagesOther.map((obj) => {
      if (obj.value != undefined && obj.value != null) {
        languages.push(obj.value);
      }
    });
    values['languagesOther'] = languages;
  }
  // console.log('onSubmit', values);
  await fetch(process.env.REACT_APP_BACKEND_BASE_URL + '/carer', {
    method: 'POST',
    body: JSON.stringify(values, null, 2),
    // headers: jsonApiHeader('application/json'),
  }).then(function (response) {
    if (response.status === 200) {
      response.json().then((json) => {
        dispatch(reset('carer-onboarding'));
        return nextPage();
      });
    } else if (response.status === 409) {
      toast.error('Requested Email is already registered with different carer, pls try again with another email', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return nextPage();
    }
  }, function (error) {
    toast.error('Something went wrong, pls try again', {
      position: toast.POSITION.TOP_RIGHT,
    });
    return nextPage();
  });
};

export default reduxForm({
  form: 'carer-onboarding', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: validate,
  onSubmit,
})(Review);
