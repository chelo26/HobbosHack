import React, { Component, Children } from 'react';

class MiddleSection extends Component {
    constructor(props) {
        super(props);

        //Convert to user name and user id


    }

    render() {
        const { caps, children, style, style2, bgcolor, title, subheader, h3styling, bottomMask } = this.props;

        return (
            <div>
                <div className="m-auto  middle-template-div " >
                    <div className="middle-template d-flex flex-column" style={style}>
                        
                        <div className="flip-svg">
                            <svg viewBox="0 0 40 2">
                                <path style={bgcolor} d="M0 0 Q 20 3, 40 0, L 40 2.5, L 0 2.5" />
                            </svg>
                        </div>
                        
                        <div className=" middle-area" style={style2}>
                            <p className="middle-caps">{caps}</p>
                            <h1>{title}</h1>
                            {(subheader) && <h3 style= {h3styling}>{subheader}</h3>}
                            {children}
                          
                        </div>

                        <div className="bottom0">
                            <svg viewBox="0 0 40 2">
                                <path style={bgcolor} d="M0 0 Q 20 3, 40 0, L 40 2.5, L 0 2.5" />
                            </svg>
                        </div>
                        {(bottomMask) && <div className= "phone-mask"></div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default MiddleSection;

