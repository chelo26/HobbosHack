import React, { Component } from 'react';
import Axios from 'axios';
import Intro from './intro';
import Quest1 from './quest1';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
        };
    }

    componentDidMount(){
        Axios.post({
            url: '/user/12345',
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone'
            }
        })
        .then((resp)=> {
            this.setState({
                page: 2// resp.page
            })
        })
        .catch((err)=> {
            this.setState({
                page: 0// resp.page
            })
        })
    }

    nextPage(e) {
        this.setState({ page: this.state.page + e});
    }


    handleSubmit(formData){
        Axios.post({
            url: '/user/12345',
            formData
        })
        .then((resp)=> {
            this.setState({
                page: 2// resp.page
            })
        })
        .catch((err)=> {
            this.setState({
                page: 0// resp.page
            })
        })
    }

    conditionalRender(page){
        switch(page) {
            case 0:
                return <Intro nextPage= {(e)=> this.nextPage(e)}/>
            case 1:
                return <Quest1 />
            case 2:
                return <div>Page 2</div>
            default:
                return <div>No page</div>
        }
    }

    render() {
        return (
            <div className= 'hey-ellie'>
                <div className= 'row wizard py-3'>
                    <div className= 'col-10 row m-auto'>
                        <div className= 'dot active'></div>
                        <div className= 'dot active'></div>
                        <div className= 'dot'></div>
                        <div className= 'dot'></div>
                        <div className= 'dot'></div>
                        <div className= 'dot'></div>
                        <div className= 'dot'></div>
                        <img src= {require('./images/icons/home.svg')}></img>
                        {/* <p className= 'c2'>Skip ></p> */}
                    </div>
                </div>
                {this.conditionalRender(this.state.page)}
            </div>
        )
    }
}