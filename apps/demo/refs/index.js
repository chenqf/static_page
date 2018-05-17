// @flow Created by 陈其丰 on 2018/5/16.


import React from 'react';
import ReactDOM from 'react-dom';

import 'style'
import './index.scss'



class T extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            a:1,b:2
        }
        this.myRef = React.createRef();
    }
    test1(){
        console.log(123);
    }
    render(){
        return <div ref={this.myRef}><span>nihaoshijie</span></div>;
    }
}


class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a:1,
            b:2,
            c:3
        };
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.xxx1 = null;
        this.xxx2 = null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
        console.log(this.props,this.state)
        return false;
    }
    testHandler1(){
       this.setState({
           a:2
       })
    }
    testHandler2(){
        console.log(this.myRef2.current);
    }
    testHandler3(){
        console.log(this.xxx1);
        console.log(this.xxx2);
    }
    render(){
        return (
            <div ref={this.myRef1}>
                {/*<span id="test2"  ref={(el)=>{this.xxx1 = el}}>test2</span>*/}
                <br/>
                {this.state.a}
                {this.props.name}
                <button onClick={this.testHandler1.bind(this)}>test1</button><br/>
                <button onClick={this.testHandler2.bind(this)}>test2</button><br/>
                <button onClick={this.testHandler3.bind(this)}>test3</button><br/>
                hello world<br/>
                {/*<T ref={(el)=>{this.xxx2 = el}} c="c"/>*/}
            </div>
        )
    }
}





ReactDOM.render(
    <MyComponent name="cqf"/>,
    document.getElementById('root')
)