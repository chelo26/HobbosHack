import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="row no-gutter justify-content-center color2" style= {{paddingTop: "80px", paddingBottom: "60px"}}>
            <div className="col-10 no-gutter"> 

            <div className= "row no-gutter align-items-center">
                <div className="col no-gutter m-auto footer">
                    <div className="row no-gutter pb-5" style={{ bottomMargin: "1000px" }}>
                        <div className="col-md-3 no-gutter "><NavLink className="navbar-brand" to="/"><img src={require('../images/designAssets/logos/svg/edyn_ranged_logo_white.svg')} style={{ height: 45 }} alt="Edyn Care" /></NavLink>
                        </div>
                        
                        <div className="col-md-5 no-gutter">
                            <p className="sitemap" style={{paddingBottom: "20px"}}><font className="colorT0 lightT" >Sitemap</font></p>
                            <div className="row no-gutter">
                                <div className="col no-gutter ">
                                    <h3><NavLink to="/"><font>Home</font></NavLink></h3>
                                    <h3><NavLink to="/our-story"><font>Our story</font></NavLink></h3>
                                    <h3><NavLink to="/our-approach"><font>Our approach</font></NavLink></h3>
                                    <h3><NavLink to="/our-carers"><font>Our carers</font></NavLink></h3>
                                    <h3><NavLink to="/careers"><font>Careers</font></NavLink></h3>
                                </div>
                                <div className="col no-gutter ">
                                    <h3><NavLink to="/"><font>Care guide</font></NavLink></h3>
                                    <h3><NavLink to="/"><font>Help</font></NavLink></h3>
                                    <h3><NavLink to="/"><font>My Edyn</font></NavLink></h3>
                                    <h3><NavLink to="/"><font>Press</font></NavLink></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 no-gutter ">
                        <p className="sitemap" style={{paddingBottom: "20px"}}><font className="colorT0 lightT" >Contact us</font></p>
                            <div className="row no-gutter ">
                                <div className="col no-gutter ">
                                    <p ><font className="colorT6 lightT size16T" >0800 123 456</font></p>
                                    <h3>oliver@edyn.care</h3>
                                    <br/>
                                    
                                        <NavLink target="_blank" rel="noopener noreferrer" to="https://twitter.com/edyncare">
                                        <img alt='Twitter' src={require('../images/socials/green/twitter.png')} className="image-size-social" style= {{paddingRight: "10px"}}/>
                                        </NavLink>
                                    <h3>Twitter</h3>
                                    <h3><NavLink target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/edyncare/"><img alt='Facebook' src={require('../images/socials/green/facebook.png')} className="image-size-social" style= {{paddingRight: "20px"}}/></NavLink>Facebook</h3>
                                    <h3><NavLink target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/edyn.care/"><img alt='Instagram' src={require('../images/socials/green/instagram.png')} className="image-size-social" style= {{paddingRight: "12px"}}/></NavLink>Instagram</h3>
                                </div>  
                            </div>
                        </div>

                    <div className="col-md-2 no-gutter ">
                        <p className="sitemap" style={{paddingBottom: "20px"}}><font className="colorT0 lightT" >Find us</font></p>
                            <div className="row no-gutter ">
                                <div className="col no-gutter ">
                                    <h3>Edyn Care</h3>
                                    <h3>309 </h3>
                                    <h3>Battersea Park Road</h3>
                                    <h3>SW11 4BF</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutter color2 footer">
                        <div className="col-md-3 no-gutter "></div>
                        <div className="col-md-5 no-gutter ">
                            <div className="row no-gutter ">
                                <div className="col no-gutter ">
                                    <h3>Terms and condition</h3>
                                </div>
                            <div className="col no-gutter">
                                <h3>Privacy</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>

        );
    }
}
export default Footer