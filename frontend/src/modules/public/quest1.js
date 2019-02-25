import React, { Component } from 'react';

export default class  Quest1 extends Component {
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
              <h2 className= 'c1 pb-4'>{'Are you looking for a place to sleep?'}</h2>
              <div className= 'row col no-gutter'>
              <form >
                {['Tonight', 'Long-term', 'I’m not sure', 'No'].map((anwser, i)=> {
                  return (              
                    <div className="radio" key= {i}>
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