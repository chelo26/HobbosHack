import React, { Component } from 'react';
import HeaderOB from './header_ob';
import WizardCarerOnBoarding from './wizard_carer_on_boarding';
import axios from 'axios';

class InterviewSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carer: { Email: "", name: { surname: "", firstName: "" } },
            carerLoaded: false
        };

        const getCarer = async () => {
            const carerId = this.props.match.params.id;
            try {
                const response = await axios.get(process.env.REACT_APP_BACKEND_BASE_URL + '/carer/' + carerId);
                console.log('response', response)
                this.setState({ carer: response.data.data, carerLoaded: true });
                const script = document.createElement("script");
                script.src = "https://assets.calendly.com/assets/external/widget.js";
                script.async = true;
                document.body.appendChild(script);
            } catch (error) {
                console.error(error);
            }
        }
        getCarer();
        console.log(this.state)
    }


    render() {
        var style = {
            minWidth: '320px',
            height: '580px'
        };
        
        if(!this.state.carerLoaded){
            return <div><HeaderOB /><div className="spinner-edyn"></div></div>
        }

        return (
            <div>
                  
                <HeaderOB />
                <WizardCarerOnBoarding page={1}/>
                <div className="col-11 col-md-9  no-gutter mx-auto">
                    <div className="row no-gutter text-center mb-5">
                        <div className="col-md-12 no-gutter">
                            <div className="error-template justify-content-center">
                                <h2>In-person interview</h2>
                                <div className="calendly-inline-widget  " data-url={process.env.REACT_APP_CALENDLY_F2FINTERVIEW_EMBEDDED_URL + "?name=" + this.state.carer.name.firstName + " " + this.state.carer.name.surname + "&email=" + this.state.carer.Email} style={style}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InterviewSchedule;