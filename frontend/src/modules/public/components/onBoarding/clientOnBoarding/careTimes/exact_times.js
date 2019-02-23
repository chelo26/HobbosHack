import React, { Component } from 'react';
import { reduxForm, FieldArray} from 'redux-form';

const renderDay = ({fields}) => {
    return (
        <div>
            <form onSubmit={(event) => fields.push(event.value)}>
                <input value= "" type= "text" ></input>
                <input type="submit" ></input>
            </form>
            {fields.map((day, index) => 
                <div>
                    <h4>day: {day}</h4>
                    <h4>index: {index}</h4>                    
                </div>)
            }
        </div>
    )
}


class ExactTimes extends Component {
    render() {
        return(
            <form className="p-4" >
            <div className= "row justify-content-center p-4">
                <div className= "col-8 justify-content-center text-center p-4">
                    <h2>Select a time/ times
                    </h2>
                </div>
            </div>
            <div className= "row justify-content-center p-4">
                <FieldArray name="days" component={renderDay}/>
            </div>

            <div className= "row justify-content-center p-4">
                <div className= "col-8 justify-content-center text-center p-4">
                    <h2>Need to talk?</h2>
                    <h2>No problem. Give us a call. Speak to one of our helpful, highly-trained Care experts
                        based in our London office
                    </h2>
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
//    validate: validate,
//    asyncValidate: asyncValidate,
//    asyncBlurFields: ['Email'],
})(ExactTimes)  