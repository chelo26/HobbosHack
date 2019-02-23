import React, { Component } from 'react';

class WizardHeader extends Component {
  render() {
    return (
      <div className="row no-gutter text-center justify-content-center">
        <div className=" text-center col-12 col-lg-7 no-gutter justify-content-center ">
          <div className="ObPageTitle">
            <h2 className= "bold">Carer Application</h2>
          </div>
          <div className="containerProgress col-12 no-gutter">
            <ul className="progressbar row no-gutter">
              <li className={
                this.props.page === 1 ? "active" : 
                this.props.page > 1 ? "completed" : "disabled"
              }>
                <p  className="d-none d-lg-inline" data-toggle="tab">Contact</p>
                <p  className="tab-title" data-toggle="tab">Details</p>
              </li>
              <li className={
                this.props.page === 3 ? "active" : 
                this.props.page > 3 ? "completed" : "disabled"}>
                <p  className="d-none d-lg-inline" data-toggle="tab">Care</p>
                <p  className="tab-title" data-toggle="tab">Experience</p>
              </li>
              <li className={
                this.props.page === 4 ? "active" : 
                this.props.page > 4 ? "completed" : "disabled"}>
                <p className="tab-title mb-0 pb-0" data-toggle="tab">Background</p>
                <p className="d-none d-lg-inline" data-toggle="tab">Checks</p>
              </li>
              <li className={
                this.props.page === 5 ? "active" : 
                this.props.page > 4 ? "completed" : "disabled"}>
                <p  className="d-none d-lg-inline" data-toggle="tab">Your</p>
                <p  className="tab-title" data-toggle="tab">Interest</p>
              </li>
              {/* <li className={
                  this.props.page === 6 ? "active" : 
                  this.props.page > 5 ? "completed" : "disabled"}>
                  <p  className="d-none d-lg-inline" data-toggle="tab"></p>
                  <p  className="" data-toggle="tab">Review</p>
                  </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardHeader;
