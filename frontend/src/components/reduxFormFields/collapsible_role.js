import React, { Component } from 'react';

class CollapsibleRole extends Component {
    render() {
        const { title } = this.props; // id, children, button, buttonAction, content
        return (   
                <div className="col-md-12 no-gutter collapse-role collapse-border rounded  my-1 text-left text-middle">
                    <div className="p-2" data-toggle="collapse" data-target={"#section"+this.props.id}>
                        <div className=" no-gutter w-100  text-left" >
                            <h2 className="my-auto">{title}</h2>
                        </div>
                    </div>
                    <div id={"section"+this.props.id} className="collapse collapse-role w-100 ">                   
                        <div className="p-3">
                            <p className=" mw-50">{this.props.children}</p> 
                        </div>
                    </div>
                </div>
        )
    }
}

export default CollapsibleRole
