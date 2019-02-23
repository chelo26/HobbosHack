import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CheckboxGroup from '../../reduxFormFields/checkbox_group';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span style={{
        width: "100%",
        marginTop: ".25rem",
        marginLeft: ".25rem",
        fontSize: "80%",
        color: "#dc3545"
    }}>{error}</span> : false;


class RoughTimes extends Component {
    render() {
        const bootstrapParser = ({ input, label }) => (
            <label className="radio-container btn btn-outline-secondary btn-sm m-2" style={{ width: "70px" }}>
                <input type="checkbox" {...input} />
                <span className="checkmark"> {label}</span>
            </label>
        )

        const othTimeAMALL = [
            { label: "AM", value: "Mon- AM" },
            { label: "AM", value: "Tue- AM" },
            { label: "AM", value: "Wed- AM" },
            { label: "AM", value: "Thu- AM" },
            { label: "AM", value: "Fri- AM" },
            { label: "AM", value: "Sat- AM" },
            { label: "AM", value: "Sun- AM" }
        ]

        const othTimePMALL = [
            { label: "PM", value: "Mon- PM" },
            { label: "PM", value: "Tue- PM" },
            { label: "PM", value: "Wed- PM" },
            { label: "PM", value: "Thu- PM" },
            { label: "PM", value: "Fri- PM" },
            { label: "PM", value: "Sat- PM" },
            { label: "PM", value: "Sun- PM" }
        ]

        const othTimeNightALL = [
            { label: "Night", value: "Mon- Night" },
            { label: "Night", value: "Tue- Night" },
            { label: "Night", value: "Wed- Night" },
            { label: "Night", value: "Thu- Night" },
            { label: "Night", value: "Fri- Night" },
            { label: "Night", value: "Sat- Night" },
            { label: "Night", value: "Sun- Night" }
        ]

        const othTimeAM = othTimeAMALL.map((level, i) =>
            <td key={i}>
                <div>
                    <CheckboxGroup component={bootstrapParser} options={[level]} name="recipient.careTimes" />
                    <Field name="careTimes" component={renderError} className="invalid-feedback" />
                </div>
            </td>);

        const othTimePM = othTimePMALL.map((pm, j) =>
            <td key={j}>
                <div>
                    <CheckboxGroup component={bootstrapParser} options={[pm]} name="recipient.careTimes" />
                    <Field name="careTimes" component={renderError} className="invalid-feedback" />
                </div>
            </td>);

        const othTimeNight = othTimeNightALL.map((night, k) =>
            <td key={k}>
                <div>
                    <CheckboxGroup component={bootstrapParser} options={[night]} name="recipient.careTimes" />
                    <Field name="careTimes" component={renderError} className="invalid-feedback" />
                </div>
            </td>);

        return (
            <div className="pt-5">
                <div className="row justify-content-center">
                    <h2>Click the times below to select</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="form-group">
                        <div className="col-6 col-sm-10 col-md-12 mx-auto">
                            <div className="booking-time" >
                                <table >
                                    <tbody>
                                        <tr>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
                                        </tr>
                                        <tr>
                                            {othTimeAM}
                                        </tr>
                                        <tr>
                                            {othTimePM}
                                        </tr>
                                        <tr>
                                            {othTimeNight}
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="row justify-content-center">
                    <h3 className= "pb-4">AM: 6am-12pm, PM: 12pm-10pm, Night: 10pm-6am </h3>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default reduxForm({
    form: 'client-onboarding',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(RoughTimes)  