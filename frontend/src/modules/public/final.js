
import React, { Component } from 'react';

export default class Final extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleChange(event, num) {
      if(num){
        this.setState({num: num});
      } else {
        this.setState({value: event.target.value});
      }
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
        <div className= 'questions'>

        <div className= 'row col no-gutter results p-4'>
              <div className= 'col-auto px-2 my-auto'> 
                <img className= 'center' src= {require('./images/pics/c4ws-shelter.png')} />
                <label className= 'results'>Nightstop</label>
              </div>
              <div className= 'col'> 
                <h2 className= 'c1'>Nightstop</h2>
                <h3 className= ''>Nightstop places young people in a safe and warm home for the night, provided by a vetted and approved volunteer.</h3>
                <h3 className= 'c1'>Open for the next 2 hours</h3>
                <h3 className= 'c1'>0.1 mile away</h3>
              </div>
          </div>

          <div className= 'row p-3'>
            <div className= 'col-auto no-gutter px-3'>
                <img className= 'logo' src= {require('./images/icons/logo.png')} />
            </div>
            <div className= 'col no-gutter'>
            
              <h2 className= 'c1'>These are your next steps:</h2>
              <div>
              <h3 >1- They will refer you to Depaul, unless another service is more appropriate. </h3>
              <h3 >2- Contact First Base. They will ask you where you’ve been living lately. </h3>
              <form >
                {['Text them', 'Call them', 'Have them call you'].map((anwser, i)=> {
                  return (              
                    <div className={`radio ${(this.state.value=== anwser)&& 'active1'}`}>
                      <label><input checked={this.state.value=== anwser} 
                          onChange={this.handleChange} value= {anwser} onClick= {(e)=> this.handleChange(e)} type="radio" name="optradio" />{anwser}</label>
                    </div>
                    )
                })}
                {(this.state.value=== 'Have them call you') && 
                  (<div>
                      <input placeholder= {'Enter your number'} onChange={(e)=> this.handleChange(e, 'num')} type="text" name="optradio2" />
                  </div>)}
              </form>
              {(this.state.value=== 'Have them call you') && 
                  (<div>
                      <div className= 'row col-12'>
                        <div className= 'col-auto' style= {{padding: '0px'}}>
                         <input  style= {{display: 'initial'}} type="checkbox" value=""/>
                        </div>
                        <div className= 'col no-gutter'>
                          <p style= {{fontSize: '12px'}}>Save and send my information so I don’t have te repeat myself.</p>
                        </div>
                      </div>
                  </div>)}
              </div>
              <div>
              <h3 >2- They will refer you to Depaul, unless another service is more appropriate. </h3>
              <p className= 'text-me pt-3 mb-0' style= {{fontSize: '12px'}}>Click <font className= 'c1'>here</font> to text me this info?</p>
              </div>
            </div>  
          </div>
          <a className= 'done text-right p-3' href="https://www.google.com">Done ></a> 
        </div>

      );
    }
  }