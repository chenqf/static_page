// @flow Created by 陈其丰 on 2018/5/18.


import React,{Component} from 'react';
import ctx from './context';
const {Consumer} = ctx;

class C1 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Consumer>
                {
                    (ctx)=>{
                        return <p>11111111111{ctx.text}</p>
                    }
                }
            </Consumer>
        )
    }
}

export default C1;