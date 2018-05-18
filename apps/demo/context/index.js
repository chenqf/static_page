// @flow Created by 陈其丰 on 2018/4/17.

import React,{createContext,Component} from 'react';
import ctx from './context';
import C1 from './c1';
import C2 from './c2';
import ReactDOM from 'react-dom';
import 'style'
import './index.scss'

const {Provider,Consumer} = ctx;

class App extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render(){
        console.log('render');
        return (
            <div>
                <C1/>
                <C2/>
            </div>
        )
    }
}



ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
);