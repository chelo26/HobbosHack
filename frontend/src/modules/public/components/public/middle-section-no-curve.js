import React, { Component, Children } from 'react';

class MiddleSectionNoCurve extends Component {
    constructor(props) {
        super(props);

        //Convert to user name and user id


    }




    render() {
        const { caps, children, style, bgcolor, title, subheader } = this.props;

        return (
            <div>
                <div className="m-auto  middle-template-div " >
                    <div className="middle-template no-min-height d-flex flex-column" style={style}>
                        
                       <div className="no-curve-spacing">

                       </div>
                        
                        <div className=" middle-area">
                            <p className="middle-caps">{caps}</p>
                            <h1>{title}</h1>
                            <h3>{subheader}</h3>
                            {children}
                          
                        </div>

  
                    </div>
                </div>
            </div>
        );
    }
}

export default MiddleSectionNoCurve;

