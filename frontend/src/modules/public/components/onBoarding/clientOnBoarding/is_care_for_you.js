import React, { Component } from 'react';
import { Field, reset, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

class IsCareForYou extends Component {

    componentDidMount(){
        this.props.dispatch(reset('client-onboarding'))
        document.getElementById('HEADER').scrollIntoView();
    }
    
        render() {

        const { handleSubmit} = this.props;
        return(
            <form className="" onSubmit={handleSubmit}>
                <div className="row no-gutter justify-content-center"  >
                    <div className="col-md-8 no-gutter justify-content-center onboarding_form color0" >
                        <div className="col no-gutter my-auto py-5">
                            <div className="text-center py-5">
                                <h2>Is the care for you?</h2>
                                
                                <div className="form-group col no-gutter text-center ">
                                    <label className="col-white radio-container btn-next col-md-2 my-4">
                                        <Field onClick={handleSubmit} type="radio" component="input" name="careForClient" value="1" />
                                        <span className="text-center checkmark py-3" style={{minWidth: "50px"}}>Yes</span>
                                    </label>
        
                                    <label className="col-white radio-container btn-next col-md-2 mt-4">
                                        <Field onClick={handleSubmit} type="radio" component="input" name="careForClient" value="0" />
                                        <span className="text-center checkmark py-3" style={{minWidth: "50px"}}>No</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

IsCareForYou = reduxForm({
    form: 'client-onboarding',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
//    enableReinitialize: true
//    validate: validate,
//    asyncValidate: asyncValidate,
//    asyncBlurFields: ['Email'],
})(IsCareForYou)  

// Decorate with connect to read form values
const selector = formValueSelector('client-onboarding') // <-- same as form name
IsCareForYou  = connect(
  state => {
    // can select values individually
    const hasCareForClientValue = selector(state, 'careForClient')
    return {
        hasCareForClientValue,
    }
  }
)(IsCareForYou)

export default IsCareForYou
