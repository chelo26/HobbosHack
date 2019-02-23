import React, { Component } from 'react';



class Collapsible extends Component {
    render() {
        return (                
                <div className="col-md-12">
                    <button role="button" className="btn btn-primary w-100" data-toggle="collapse" data-target="#demo2" aria-expanded="true">
                    {this.props.title}
                    </button>
                    <div id="demo2" className="height collapse " aria-expanded="true">
                        <div className="list-group w-100 p-3" >{this.props.children}</div>
                    </div>
                </div>
        )
    }
}



export default Collapsible
