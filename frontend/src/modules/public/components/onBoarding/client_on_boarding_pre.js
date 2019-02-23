import React, { Component } from 'react';


import HeaderOB from './clientOnBoarding/header_ob';
import ClientOnBoardingPreMessage from './clientOnBoarding/client_on_boarding_pre';


class ClientOnBoardingPre extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }



    render() {
        const { page } = this.state
        
        return (
            <div>
                <div className="color5 bg-full" />
                <HeaderOB />

                <div className="tab-content m-1">
                   <div className="tab-pane active mb-5" id="step1">
                       <ClientOnBoardingPreMessage/>
                    </div>

                  
                    
                </div>
              
                
            </div>
        )
    }
}



export default ClientOnBoardingPre
