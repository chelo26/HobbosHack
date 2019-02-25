import React, { Component } from 'react';

export default class  Quest2 extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleFormSubmit(event) {
      event.preventDefault()
      this.setState({
        value: event.target.value
      }, 
      this.props.handleSubmit(event.target.value)
      );
    }

    render() {
      return (
        <div>
        <div className= 'row p-3'>
          <div className= 'col-auto no-gutter px-3'>
              <img className= 'logo' src= {require('./images/icons/logo.png')} />
          </div>
          <div className= 'col no-gutter'>
              <h2 className= 'c1 pb-4'>{this.props.title}</h2>
              <div className= 'row col no-gutter'>
                <div className= 'col-6'>
                  <input placeholder= {'Enter your location'} onChange={this.handleChange} value= {this.state.anwser} type="text" name="optradio" />
                  </div>
                  </div>
                <div className= 'col-auto'>  
                  <button onClick= {()=> this.props.handleSubmit(1)}>Share current location</button>
                </div>
              </div>
          </div>   
        </div>



      );
    }
  }