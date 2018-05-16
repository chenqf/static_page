// @flow Created by 陈其丰 on 2018/4/17.

import React from 'react';
import ReactDOM from 'react-dom';
import 'style'
import './index.scss'

class C extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num:1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState((preState,props)=>{
                console.log(props)
                return {
                    num:preState.num + 1
                }
            })
        },1000)
    }
    componentWillUnmount(){

    }
    render(){
        return <div>{this.state.num}</div>
    }

}

ReactDOM.render(
    <C name="cqf"/>
    ,
    document.getElementById('root')
);