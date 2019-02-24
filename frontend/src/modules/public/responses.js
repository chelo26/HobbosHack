import React, { Component } from 'react';

export default class Responses extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
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
          <div className= 'row p-3 responses'>
            <div className= 'py-2'>
            <h2>You might be able to sleep here...</h2>
            <h3>Your options will be more accurate if you finish answering the questions.</h3>
            </div>
            <div className= 'row caracel'> 
            < div className= 'col-auto px-2'> 
                <img className= 'center' src= {require('./images/pics/c4ws-shelter.png')} />
                <label>Nightstop</label>
              </div>
              <div className= 'col-auto px-2'> 
                <img className= 'center' src= {require('./images/pics/YMCA.png')} />
                <label>Centerpoint</label>
              </div>
              <div className= 'col-auto px-2'> 
                <img className= 'center' src= {require('./images/pics/c4ws-shelter.png')} />
                <label>YMCA</label>
              </div>
              <div className= 'col-auto px-2'> 
                <img className= 'center' src= {require('./images/pics/st-mungos.png')} />
                <label>St Mungos</label>
              </div>
              {/* <div className= 'col'> 
                <h2 className= 'c1 pb-2'>Nightstop</h2>
                <h3 className= 'pb-2'>Nightstop places young people in a safe and warm home for the night, provided by a vetted and approved volunteer.</h3>
                <h3 className= 'c1'>open for the next 2 hours</h3>
                <h3 className= 'c1'>0.1 mile away</h3>
              </div> */}
            </div>
          </div>
        </div>

      );
    }
  }