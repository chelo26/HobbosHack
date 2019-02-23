import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { jsonApiHeader } from './../../modules/utils/utilActions.js';

class HelloSignEmbed extends Component {

  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateCarerClientContract = this.updateCarerClientContract.bind(this);
    this.handleUpdateContract = this.handleUpdateContract.bind(this);
  }


  componentDidMount() {
  
    console.log('process.env.REACT_APP_HELLOSIGN_MODE', process.env.REACT_APP_HELLOSIGN_MODE)
    const script = document.createElement('script');
    script.src = 'https://s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.LATEST.min.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    var updateContracts = {
      user: this.props,
      updateCarerClientAgreementContract: this.updateCarerClientContract,
      handleUpdateContract: this.handleUpdateContract,
    };
    var settings = {
      uxVersion: 2,
      inContainer: true,
      skipDomainVerification: process.env.REACT_APP_HELLOSIGN_MODE, //Must be false in prod
      container: document.getElementById('HelloSignEmbed'),
      messageListener: function(eventData) {
        if (eventData.event === window.HelloSign.EVENT_SIGNED) {
          // do something for document getting signed
          if (!updateContracts.user.CarerClientAgreementContract) {
            // updateContracts.updateCarerContract();
            updateContracts.handleUpdateContract()
          } else {
            updateContracts.updateCarerClientAgreementContract();
          }
        } else if (eventData.event === window.HelloSign.EVENT_CANCELED) {
          // do something else for document closing before getting cancelled
        } else if (eventData.event === window.HelloSign.EVENT_ERROR) {
          // do something for an error situation
        } else if (eventData.event === window.HelloSign.EVENT_SENT) {
          // not used in this example
          // only used for embedded requesting
        }
      },
    };

    settings.url = this.props.URL;

    script.onload = () => {
      window.HelloSign.init(this.props.clientId);
      window.HelloSign.open(settings);
    };
  }

  handleUpdateContract(){
    this.props.handleUpdateContract()
  }

  updateCarerClientContract() {
    const requestData = {
      id: this.props.contractID,
      carerSigned: this.props.carerSigned,
    };
    fetch(process.env.REACT_APP_BACKEND_BASE_URL + '/contract/client-carer/update' /* id to fetch from database*/, {
      method: 'post',
      body: JSON.stringify(requestData, null, 2),
    }).then((response) => {
      if (response.status !== 200) {
        toast.error('Something went wrong, please try again', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      response.json().then((data) => {
        if (data.success) {
          toast.success('congratulations !! you just signed contract with us !!', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
    });
  }

  render() {
    // console.log("this.props", this.props)
    return (
      <div>
        <ToastContainer />
        <div id={'HelloSignEmbed'}></div>
      </div>
    );
  }
}

export default HelloSignEmbed;
