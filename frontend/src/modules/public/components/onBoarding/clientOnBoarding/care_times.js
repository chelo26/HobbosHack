import React, { Component } from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import { ToastContainer, toast } from 'react-toastify';
import RoughTimes from "./careTimes/rough_times";
import validate from './client_on_boarding_validation';
import { renderError } from '../../../../generic/reduxFormFields/fields';
import { jsonApiHeader } from './../../../../utils/utilActions';


class Twenty4Hour extends Component {
    render() {
        return (
                <div className="row justify-content-center pt-5">
                    <div className="col-8 justify-content-center text-center pb-4">
                        <h2>You have selected 24 hour live in care
                    </h2>
                    </div>
                    <div className="col-8 justify-content-center text-center p-4">
                        <h2>Need to talk?</h2>
                        <h2>No problem. Give us a call. Speak to one of our helpful, highly-trained Care experts
                            based in our London office
                    </h2>
                    </div>
                </div>
        )
    }
}


class NoIdeaTimes extends Component {
    render() {
        return (
                <div className="row justify-content-center pt-5">
                    <div className="col-8 justify-content-center text-center pb-4">
                        <h2>It can be hard to know just how much help you need sometimes. We will create an example
                            schedule for you now, and then make sure we learn as much about your situation as possible
                            before tailoring it to you.
                        </h2>
                    </div>
                    <div className="col-8 justify-content-center text-center">
                        <h2>Need to talk?</h2>
                        <h2>No problem. Give us a call. Speak to one of our helpful, highly-trained Care experts
                            based in our London office
                        </h2>
                    </div>
                </div>
        )
    }
}

class CareTimes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "",
        };
    }

    componentDidMount(){
        document.getElementById('HEADER').scrollIntoView();
    }

    renderTimes(state){
        switch (state) {
            case "Live-in care":
                return (
                    <Twenty4Hour />
                )
            case "Select times":
                return (
                    <RoughTimes />
                )
            case "No Idea of times":
                return (
                    <NoIdeaTimes />
                )
            default:
                return (
                    <div></div>
                )
        }
    }

    handlePage(e){
        this.setState({
            page: e
        }) 
    }

    render(){

    const { handleSubmit, previousPage } = this.props;
    return (
        <form className="" onSubmit={(formData)=> handleSubmit(formData)}>
            <div className="row no-gutter justify-content-center">
            <div className="col-md-8 no-gutter justify-content-center onboarding_form color0" >
            <h2 className= "bold pb-4">Care times</h2>

                    <div className="row justify-content-around pb-5">
                        <h2>Please select the times for your care: </h2>
                    </div>

                            <div >
                            <div className= "row no-gutter align-content-between">
                            <div className= "col-11 col-md-4 no-gutter " align="center">
                                <div onClick={(e)=> this.handlePage("Live-in care")}  className="form-group col-md-10 text-center" align="center">
                                    <label className="radio-container col btn btn-outline-secondary btn-sm">
                                        <Field type="radio" component="input" name="recipient.careTime" value="LineInCare" />
                                        <Field name="recipient.careTime" component={renderError} className="invalid-feedback" />
                                        <span className="checkmark">Live-in care</span>
                                    </label>
                                </div>
                            </div>
                            <div className= "col-11 col-md-4 no-gutter " align="center">
                                <div onClick={(e)=> this.handlePage("Select times")}  className="form-group col-md-10 text-center" align="center">
                                    <label className="radio-container col btn btn-outline-secondary btn-sm">
                                        <Field type="radio" component="input" name="recipient.careTime" value= "ExactTimes" />
                                        <span className="checkmark">Select times</span>
                                    </label>
                                    <Field name="recipient.careTime" component={renderError} className="invalid-feedback" />
                                </div>
                            </div>
                            <div className= "col-11 col-md-4 no-gutter " align="center">
                                <div onClick={(e)=> this.handlePage("No Idea of times")}  className="form-group col-md-10 text-center">
                                    <label className="radio-container col btn btn-outline-secondary btn-sm">
                                        <Field type="radio" component="input" name="recipient.careTime" value="NoIdea" />
                                        <span className="checkmark">No Idea of times</span>
                                    </label>
                                </div>
                            </div>
                            </div>
                            </div>

                    {this.renderTimes(this.state.page)}

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
    await fetch(process.env.REACT_APP_BACKEND_BASE_URL + '/client', {
        method: "POST",
        body: JSON.stringify(values, null, 2),
      headers: jsonApiHeader('application/json'),
    }).then(function (response) {
        if (response.status === 200) {
            response.json().then(json => {
                dispatch(reset('client-onboarding'));
                return nextPage();
            });
        }else if(response.status === 409){
            toast.error("Requested Email is already registered with different client, pls try again with another email", {
                position: toast.POSITION.TOP_RIGHT
            });
            return nextPage();
        }
    }, function (error) {
        toast.error("Something went wrong, pls try again", {
            position: toast.POSITION.TOP_RIGHT
        })
        return nextPage();
    })
};

export default reduxForm({
    form: 'client-onboarding',      
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, 
    validate: validate,
    onSubmit
})(CareTimes)  
