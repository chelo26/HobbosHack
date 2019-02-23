import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import HeaderOB from './carerOnBoarding/header_ob';
import WizardHeader from './clientOnBoarding/wizard_header';
import IsCareForYou from './clientOnBoarding/is_care_for_you';
import PersonalDetails from './clientOnBoarding/personal_details';
import CareNeeds from './clientOnBoarding/care_needs';
import Interests from './clientOnBoarding/interests';
import CareTimes from './clientOnBoarding/care_times';
import Summary from './clientOnBoarding/summary';

import { submitClientOnboarding } from '../../actions'

class ClientOnBoarding extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
            isError: false
        };
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        if (this.state.page=== 2) {
            window.location.reload()
        } else {
            this.setState({ 
                page: this.state.page - 1,
                isError: false
            });
        }
    }

    onSubmit(formData) {
        this.props.submitClientOnboarding(formData, (resp, error)=> {
            if (error) {
                this.setState({ 
                    isError: true ,
                    errMess: 'Form submission error. Contact james@edyn.care' 
                });
            }
            else if (!resp.success) {
                this.setState({ 
                    isError: true ,
                    errMess: resp.message
                });
            }
            else {
                this.setState({ 
                    isError: false
                },
                this.nextPage())
            }
        })
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        
        return (
            <div>
                <div className="color5 bg-full" />
                <HeaderOB />
                <WizardHeader page={this.state.page} />

                {
                (this.state.isError) && 
                    <div className="row no-gutter justify-content-center"  >
                        <div className="col-md-8 no-gutter justify-content-center error-message2" >
                            <div className="col no-gutter my-auto">
                                <div className="text-center">
                                <h2 className="py-4"><font className= 'bold'>Error:</font> {(this.state.errMess)? this.state.errMess: 'Form submission error. Contact james@edyn.care'}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="tab-content m-1">
                    {page === 1 && <div className="tab-pane active mb-5" id="step1">
                        <IsCareForYou onSubmit={this.nextPage}  />
                    </div>}

                    {page === 2 && <div className="tab-pane active mb-5" id="step2">
                        <PersonalDetails previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 3 && <div className="tab-pane active mb-5" id="step3">
                        <CareNeeds previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 4 && <div className="tab-pane active mb-5" id="step4">
                        <Interests previousPage={this.previousPage} onSubmit={this.nextPage} />
                    </div>}

                    {page === 5 && <div className="tab-pane active mb-5" id="step5">
                        <CareTimes previousPage={this.previousPage} onSubmit={(formData)=> this.onSubmit(formData)} nextPage={this.nextPage} />
                    </div>}

                    {page === 6 && <div className="tab-pane active mb-5" id="step6">
                        <Summary />
                    </div>}
                </div>
                
            </div>
        )
    }
}

ClientOnBoarding = reduxForm({
    form: 'client-onboarding',
    destroyOnMount: true,  
    forceUnregisterOnUnmount: true,  
    //validate: validate,
    //asyncValidate: asyncValidate,
    //asyncBlurFields: ['Email','postCode','recipient.postCode'],
})(ClientOnBoarding) 

export default connect(null, { submitClientOnboarding })(ClientOnBoarding);

