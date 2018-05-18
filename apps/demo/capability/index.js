// @flow Created by 陈其丰 on 2018/4/17.

import React from 'react';
import ReactDOM from 'react-dom';
import 'style'
import './index.scss'

class C extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            num:1,
            list:[]
        }
    }
    clickHandler(){
        console.log(this.state)
        this.setState(function (state,props) {
            return {
                num:state.num + 1
            }
        })
    }
    otherHandler(){
        let list = this.state.list;
        list.push(Date.now());
        this.setState({list})
    }

    render(){
        console.log('=-=============')
        return (
            <div>
                <button onClick={this.clickHandler.bind(this)}>&nbsp;+&nbsp;</button>
                <br/>
                {this.state.num}
                <br/>
                <button onClick={this.otherHandler.bind(this)}>other</button>
                {
                    this.state.list.map((i)=>{
                        return <p key={i}>{i}</p>
                    })
                }
                </div>
        )
    }

}

ReactDOM.render(
    <C name="cqf"/>
    ,
    document.getElementById('root')
);