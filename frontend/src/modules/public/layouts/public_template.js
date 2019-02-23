import React, { Component } from 'react';

class LandingPage extends Component {

    render() {

        return (
            <div>
               {this.props.pageContent}
            </div>
        )
    }
}
export default LandingPage