import React, { Component } from 'react';

class Hero extends Component {
    constructor(props) {
        super(props);
        //Convert to user name and user id
    }

    render() {
        const { bgcolor, title, children, subheader, style } = this.props;

        return (
            <div>
                <div className="m-auto hero-template-div boxed" >
                    <div className="hero-template d-flex flex-column" style={style}>
                        <img
                            className="corner-img"
                            src={require("../../../../images/designAssets/ourapproach/how-we-use-tech-rings.png")}
                            alt="Edyn Care"
                            style= {{left: '80%', top: '-85%'}}/>
                        <img
                            className="corner-img"
                            src={require("../../../../images/designAssets/ourapproach/how-we-use-tech-rings.png")}
                            alt="Edyn Care"
                            style= {{right: '85%', top: '25%'}}/>

                        <div className="hero-area-text text-center">
                            <h1>{title}</h1>
                            {(subheader || children) && 
                            <div>
                                <h3>{subheader}</h3>
                                {children}
                            </div>
                            }

                    {this.props.button && 
                        <div className="row no-gutter justify-content-center p-4">
                            <button onClick= {this.props.scrollToJobs} type="button" className="be_carer_appy_today" title=" Apply Today">
                                View our positions
                            </button>
                        </div> 
                    }
                        </div>
                        <div className="mt-5 hero-svg align">
                            <svg viewBox="0 0 40 2">
                                <path style={bgcolor} d="M0 0 Q 20 3, 40 0, L 40 2.5, L 0 2.5" />
                            </svg>
                        </div>
                    </div>
                     <div className={`d-flex flex-column`}>
                        <p className= {(!this.props.button) ? `find-out-more` : `find-out-more button-space`} >FIND OUT MORE</p>
                    </div>
                </div>
                <div className= 'floating-v' style= {{background: 'white'}}>
                    <a href="javascript:void(0)" className="hero-scroll" />
                </div>
            </div>
        );
    }
}

export default Hero;

