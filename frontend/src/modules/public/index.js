import React, { Component } from 'react';
import axios from 'axios';
import request from 'request';

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
          page: 0,
          current: {}
        };
    }

    componentDidMount(){
        var options = { method: 'POST',
        url: 'https://89640ff0.ngrok.io/web/0',
        headers: 
        { 'Postman-Token': '59be8552-d993-4c10-8890-e9058f09e2c9',
            'cache-control': 'no-cache' },
         };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            console.log(body);
            // this.nextPage(1)
            this.setState({
                current: JSON.parse(body)
            })
        });
    }

    nextPage(e) {
        this.setState({ page: this.state.page + e});
    }


    handleSubmit(formData){
        console.log('formData', formData)
        const postData= {
            // formData: 
            answer: formData,
            question: this.state.page,
            resp: formData,
        }
        console.log('postData', postData)
        // var config = {
        //     headers: {'Access-Control-Allow-Origin': '*'}
        // };
        // console.log('postData', postData)
        // axios.post('https://89640ff0.ngrok.io/web/0', {
        //     postData
        // },
        // config
        // )
        // .then((resp)=> {
        //     this.nextPage(1)
        // })
        // .catch((err)=> {
        //     this.nextPage(1)
        // })
        var numberToSend= this.state.current.children[formData]

        if (this.state.page=== 2) {
            postData['answer']= 'single_choice'
            numberToSend= 3
        }

        var options = { method: 'POST',
        url: `https://89640ff0.ngrok.io/web/${numberToSend}`,
        headers: 
        { 'Postman-Token': '59be8552-d993-4c10-8890-e9058f09e2c9',
            'cache-control': 'no-cache' },
        body: JSON.stringify(postData) };

        request(options, (error, response, body) => {
            if (error) {
                this.nextPage(1)
            }
            console.log(body);
            this.setState({
                current: JSON.parse(body)
            })
            this.nextPage(1)
        });

    }

    conditionalRender(page){
        switch(page) {
            case 0:
                return <Intro nextPage= {(e)=> this.nextPage(e)} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 1:
                return <Quest1 handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 2:
                return <Quest2 title= {'Where are you?'} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 3:
                return <Quest3 title= {'How old are you?'} subtitle= {'We’re looking for the place that suits you best.'} options= {['under 16', '16 to 25', '25 to 35', 'over 35']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 4:
                return <Quest3 title= {'Are you a ...'} subtitle= {'We want to help you feel comfortable in your environment..'} options= {['woman', 'man', 'other', 'lgbtq+', 'straight']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 5:
                return <Quest3 title= {'Which ones apply to you?'} subtitle= {'We want to make sure our staff knows how to help you.'} options= {['I’m pregnant', 'I have anxiety', 'I ran away from a dangerous situation', 'I struggle with mental health', 'I have depression']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 6:
                return <Quest3 title= {'Do you have a criminal record?'} subtitle= {'We want to make sure our staff knows how to help you.'} options= {['Yes', 'No']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 7:
                return <Pinulimate 
                handleClick= {()=> this.nextPage(1)}
                    title= {'Where would you like to stay tonight?'} subtitle= {'We think you’ll like these...'} options= {['under 16', '16 to 25', '25 to 35', 'over 35']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
            case 8:
                return <Final handleClick= {()=> this.nextPage(1)} title= {'Where would you like to stay tonight?'} subtitle= {'We think you’ll like these...'} options= {['under 16', '16 to 25', '25 to 35', 'over 35']} handleSubmit= {(e)=> this.handleSubmit(e)}/>
        }
    }

    render() {
        return (
            <div className= 'hey-ellie'>
                <div className= 'row wizard py-3'>
                    <div className= 'col-10 row m-auto'>
                        <div style= {{minWidth: '36px'}}>
                            <p className= {`c2 ${(this.state.page> 1) && 'active'}`} style= {{minWidth: '36px'}}>Back</p>
                        </div>
                        <div className= {`dot ${(this.state.page=== 0) && 'active'}`}></div>
                        <div className= {`dot ${(this.state.page=== 1) && 'active'}`}></div>
                        <div className= {`dot ${(this.state.page=== 2) && 'active'}`}></div>
                        <div className= {`dot ${(this.state.page=== 3) && 'active'}`}></div>
                        <div className= {`dot ${(this.state.page=== 4) && 'active'}`}></div>
                        <div className= {`dot ${(this.state.page=== 5) && 'active'}`}></div>
                        <div className= {`dot ${(this.state.page=== 6) && 'active'}`}></div>
                        <div className= {`dot ${(this.state.page=== 7) && 'active'}`}></div>
                        {(this.state.page=== 8) ? <img src= {require('./images/icons/home-c1.svg')}></img> : <img src= {require('./images/icons/home.svg')}></img>}
                        <div style= {{minWidth: '36px'}}>
                            <p className= {`c2 ${(this.state.page> 1) && 'active'}`} style= {{minWidth: '36px'}}>Skip</p>
                        </div>
                    </div>
                </div>
                {this.conditionalRender(this.state.page)}
                {(  (this.state.page> 2) &&  (this.state.page< 7))&& <Responses number= {6- this.state.page}/>}
            </div>
        )
    }
}