import React, { Component } from 'react';
import HeaderOB from './header_ob';
import axios from 'axios';

class CareConsultationSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: { Email: "", name: { surname: "", firstName: "" } },
            contractLoaded: false
        };

        const getClient = async () => {
            const clientId = props.match.params.id
            try {
                const response = await axios.get(process.env.REACT_APP_BACKEND_BASE_URL + '/client/' + clientId);
                this.setState({ client: response.data.data, contractLoaded: true });
                const script = document.createElement("script");
                script.src = "https://assets.calendly.com/assets/external/widget.js";
                script.async = true;
                document.body.appendChild(script);
            } catch (error) {
                console.error(error);
            }
        }
        getClient();
    }


    render() {
        var style = {
            minWidth: '320px',
            height: '580px'
        };

        if(!this.state.contractLoaded){
            return <div><HeaderOB /><div className="spinner-edyn"></div></div>
        }

        return (
            <div>
                <HeaderOB />
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-md-12 p-4">
                            <div className="error-template">
                                <h2>Care consulation</h2>
                                <div className="calendly-inline-widget p-4" data-url={process.env.REACT_APP_CALENDLY_CARE_EMBEDDED_URL + "?name=" + this.state.client.name.firstName + " " + this.state.client.name.surname + "&email=" + this.state.client.Email} style={style}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default CareConsultationSchedule;