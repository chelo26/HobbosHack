import React, { Component } from 'react';

class WizardHeader extends Component {
    render() {
        return (
            <div className="row no-gutter text-center justify-content-center">
                <div className="text-center col-10 col-lg-7 no-gutter justify-content-center ">
                    <div className="ObPageTitle">
                        {/* <h2 className= "bold">Client Application</h2> */}
                    </div>
                    
                    <div className="containerProgress col-12 no-gutter pt-2 pb-4">
                        <ul className="progressbar row no-gutter">
                            <li className={
                                this.props.page === 1 || this.props.page === 2 ? "active" : 
                                    this.props.page > 1 ? "completed" : "disabled"
                                }>
                                    <h3 href="#step1" className="d-none d-lg-inline " data-toggle="tab">Personal</h3>
                                    <h3 href="#step1" className="" data-toggle="tab" style={{display: "inline"}}> Details</h3>
                            </li>
                            <li className={
                                this.props.page === 3 ? "active" : 
                                    this.props.page > 3 ? "completed" : "disabled"
                                }>
                                    <h3 href="#step2" className="d-none d-lg-inline " data-toggle="tab">Care</h3>
                                    <h3 href="#step2" className="" data-toggle="tab" style={{display: "inline"}}> Needs</h3>
                            </li>
                            <li className={
                                this.props.page === 4 ? "active" : 
                                    this.props.page > 4 ? "completed" : "disabled"
                                }>
                                    <h3 href="#step3" className="" data-toggle="tab">Interests</h3>
                            </li>
                            <li className={
                                this.props.page === 5 ? "active" : 
                                    this.props.page > 5 ? "completed" : "disabled"
                                }>
                                    <h3 href="#step4" className="d-none d-lg-inline " data-toggle="tab">Care</h3>
                                    <h3 href="#step4" className="" data-toggle="tab" style={{display: "inline"}}> Times</h3>
                            </li>
                        </ul>
                    </div>       
                </div>
            </div>
        );
    }
}

export default WizardHeader