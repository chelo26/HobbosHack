import React, { Component } from 'react';
import Axios from 'axios';
import Intro from './intro';
import Quest1 from './quest1';
import Quest2 from './quest2';
import Quest3 from './quest3';
import Responses from './responses';
import Pinulimate from './pinulimate';
import Final from './final';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 5,
        };
    }

    // componentDidMount(){
    //     Axios.post({
    //         url: '/user/12345',
    //         data: {
    //           firstName: 'Fred',
    //           lastName: 'Flintstone'
    //         }
    //     })
    //     .then((resp)=> {
    //         this.setState({
    //             page: 2// resp.page
    //         })
    //     })
    //     .catch((err)=> {
    //         this.setState({
    //             page: 0// resp.page
    //         })
    //     })
    // }

    nextPage(e) {
        this.setState({ page: this.state.page + e});
    }


    handleSubmit(formData){
        console.log('formData', formData)
        const postData= {
            question: this.state.page,
            resp: formData,
        }
        console.log('postData', postData)
        Axios.post({
            url: 'https://6da83e6d.ngrok.io:5000',
            postData
        })
        .then((resp)=> {
            this.nextPage(1)
        })
        .catch((err)=> {
            this.nextPage(1)
        })
    }

    conditionalRender(page){
        switch(page) {
            case 0:
                return <Intro nextPage= {(e)=> this.nextPage(e)}/>
            case 1:
                return <Quest1 handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 2:
                return <Quest2 title= {'Where are you?'} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 3:
                return <Quest3 title= {'How old are you?'} subtitle= {'We’re looking for the place that suits you best.'} options= {['under 16', '16 to 25', '25 to 35', 'over 35']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 4:
                return <Pinulimate title= {'Where would you like to stay tonight?'} subtitle= {'We think you’ll like these...'} options= {['under 16', '16 to 25', '25 to 35', 'over 35']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 5:
                return <Final title= {'Where would you like to stay tonight?'} subtitle= {'We think you’ll like these...'} options= {['under 16', '16 to 25', '25 to 35', 'over 35']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
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
                {((this.state.page> 2)&& this.state.page< 4)&& <Responses/>}
            </div>
        )
    }
}