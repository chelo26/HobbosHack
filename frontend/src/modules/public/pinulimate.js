
import React, { Component } from 'react';

export default class  Pinulimate extends Component {
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
        <div className= 'questions'>
        <div className= 'row p-3'>
          <div className= 'col-auto no-gutter px-3'>
              <img className= 'logo' src= {require('./images/icons/logo.png')} />
          </div>
          <div className= 'col no-gutter'>
            <h2 className= 'c1'>{this.props.title}</h2>
            <h3 >{this.props.subtitle}</h3>
          </div>   
        </div>

        <div className= 'row col no-gutter results pb-4'>
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

          {[{
            name: 'Centerpoint Hostel', 
            img: require('./images/pics/c4ws-shelter.png'), 
            text: 'Nightstop places young people in a safe and warm home for the night, provided by a vetted and approved volunteer.'
            },
            {
              name: 'YMCA', 
              img: require('./images/pics/YMCA.png'), 
              text: 'The YMCA’s hostel offers food and a place to sleep for 16 to 25 year olds.'
              }
          ].map((hostel, i)=> {
              return (
                <div key= {i} className= 'row col no-gutter results pb-4'>
                    <div className= 'col-auto px-2 my-auto'> 
                      <img className= 'center' src= {hostel.img} />
                      <label className= 'results'>{hostel.name}</label>
                    </div>
                    <div className= 'col'> 
                      <h2 className= 'c1'>{hostel.name}</h2>
                      <h3 className= ''>{hostel.text}</h3>
                      <h3 className= 'c1'>Open for the next 2 hours</h3>
                      <h3 className= 'c1'>0.1 mile away</h3>
                    </div>
                </div>
              )
            })}

        </div>

      );
    }
  }