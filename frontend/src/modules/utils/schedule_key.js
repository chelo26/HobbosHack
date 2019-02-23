import React, { Component } from 'react';


 class ScheduleKeyCarer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carer: {},
            isLoading: true,
        };
    }

    render() {


        return (
            <div className="key">
                <h1>Key:</h1>
                <div className="d-flex flex-wrap">
                    <div className="key-item d-flex">
                        <div className="key-title">
                            Your availability
                        </div>
                        <div className="key-color color7"/>
                    </div>
                    <div className="key-item d-flex">
                        <div className="key-title">
                            Future visits
                        </div>
                        <div className="key-color color6"/>
                    </div>  
                    <div className="key-item d-flex">
                        <div className="key-title">
                            In-progress
                        </div>
                        <div className="key-color color4"/>
                    </div>
                    <div className="key-item d-flex">
                        <div className="key-title">
                           Completed
                        </div>
                        <div className="key-color color5"/>
                    </div>
                    
                    <div className="key-item d-flex">
                        <div className="key-title">
                            Late
                        </div>
                        <div className="key-color color8"/>
                    </div>

                </div>
            </div>
        )
    }
}


 class ScheduleKeyClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carer: {},
            isLoading: true,
        };
    }

    render() {


        return (
            <div className="key">
                <h1>Key:</h1>
                <div className="d-flex flex-wrap">
                   
                    <div className="key-item d-flex">
                        <div className="key-title">
                            Future Visits
                        </div>
                        <div className="key-color color6"/>
                    </div>
                    <div className="key-item d-flex">
                        <div className="key-title">
                            No carer assigned
                        </div>
                        <div className="key-color color6 visit-red-border"/>
                    </div>
                    <div className="key-item d-flex">
                        <div className="key-title">
                           In progress
                        </div>
                        <div className="key-color color4 "/>
                    </div>
                    <div className="key-item d-flex">
                        <div className="key-title">
                           Completed visits
                        </div>
                        <div className="key-color color5 "/>
                    </div>
                    

                </div>
            </div>
        )
    }
}
//admin day view
class ScheduleKeyDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carer: {},
            isLoading: true,
        };
    }

    render() {


        return (
            <div className="key">
                <h1>Key:</h1>
                <div className="d-flex flex-wrap">
                   
                    <div className="key-item d-flex">
                        <div className="key-title">
                            Future visits
                        </div>
                        <div className="key-color color6"/>
                    </div>  
                    <div className="key-item d-flex">
                        <div className="key-title">
                            No carer
                        </div>
                        <div className="key-color color6 visit-red-border" />
                    </div>  
                    <div className="key-item d-flex">
                        <div className="key-title">
                            In-progress
                        </div>
                        <div className="key-color color4"/>
                    </div>
                    <div className="key-item d-flex">
                        <div className="key-title">
                           Completed
                        </div>
                        <div className="key-color color5"/>
                    </div>
                    
                    <div className="key-item d-flex">
                        <div className="key-title">
                            Late
                        </div>
                        <div className="key-color color8"/>
                    </div>

                </div>
            </div>
        )
    }
}
//admin month view
 class ScheduleKeyMonth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {


        return (
            <div className="key">
                <h1>Key:</h1>
                <div className="d-flex flex-wrap">
                    <div className="key-item d-flex">
                        <div className="key-title ">
                            Today
                        </div>
                        <div className="key-color color4 no-radius"/>
                    </div>
                    <div className="key-item d-flex">
                        <div className="key-title">
                            Visits
                        </div>
                        <div className="key-color grey"/>
                    </div>
                    
                    {this.props.userType!== 'client' &&
                    <div className="key-item d-flex">
                        <div className="key-title">
                            No carer
                        </div>
                        <div className="key-color color8"/>
                    </div>
                    }

                </div>
            </div>
        )
    }
}
export {
    ScheduleKeyCarer,
    ScheduleKeyClient,
    ScheduleKeyMonth,
    ScheduleKeyDay
  }