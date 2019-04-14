import React, { Component } from 'react';

export default class Intro extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }
  
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }

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
                    <h2 className= 'c1'>Hey, I'm Ellie</h2>
                    <div>
                        <p>I’m a virtual friend and I’m here to help you find a safe place to stay. I’m not a real person and don’t store any of your information unless you agree. In fact, my sole existence is to give you the information you need.</p>
                        <p>Also remember, if this an emergency please call <font className= 'c1'>999</font>.</p>
                        <p className= 'c1 bold'>Can I ask you a few questions?</p>
                    </div>
                    <div className= 'row'>
                        {/* <button onClick= {()=> this.props.nextPage(1)}>Yes</button>
                        <button onClick= {()=> this.props.nextPage(-1)}>Not now</button> */}
                        <form >
                            {['Yes', 'Not now'].map((anwser, i)=> {
                            return (              
                                <div className="radio">
                                <label><input checked={this.state.selectedOption=== anwser} 
                                    onChange={this.handleChange} value= {anwser} onClick= {(e)=> this.handleFormSubmit(e)} type="radio" name="optradio" />{anwser}</label>
                                </div>
                                )
                            })}
                        </form>
                    </div>
                </div>  
            </div>
        </div>
      );
    }
  }