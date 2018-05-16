// @flow Created by 陈其丰 on 2018/4/17.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'style'
import './index.scss'

class C extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[
                {
                    title:'array',
                    dec:'真数组，null，undefined'
                },
                {
                    title:'bool',
                    dec:'真布尔，null，undefined'
                },
                {
                    title:'func',
                    dec:'真函数(包括构造函数Number/String...)，null，undefined'
                },
                {
                    title:'number',
                    dec:'真数字(NaN,Infinity)，null，undefined'
                },
                {
                    title:'object',
                    dec:'真对象(包括new获取的对象/正则对象)，null，undefined'
                },
                {
                    title:'string',
                    dec:'真字符串，null，undefined'
                },
                {
                    title:'symbol',
                    dec:'真标志，null，undefined'
                }
            ]
        }
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        return (
            <div className="box">
                <p className="title">验证prop-types</p>
                {
                    this.state.list.map((i,index)=>{
                        return (
                            <p className="item" key={index}>
                                <span>PropTypes.{i.title}：</span>
                                <span>{i.dec}</span>
                            </p>
                        )
                    })
                }
                {this.props.test}
            </div>
        )
    }
}


var CC = function () {

}


let t1 = [1,2,3];
let t2 = {a:1,b:2};
let t3 = /\s/;
let t4 = Symbol();
C.propTypes = {
    testArray: PropTypes.array,
    testBool: PropTypes.bool,
    testFunc: PropTypes.func,
    testNumber: PropTypes.number,
    testObject: PropTypes.object,
    testString: PropTypes.string,
    testSymbol: PropTypes.symbol,
    testNode: PropTypes.node,
    testIns: PropTypes.instanceOf(CC),
    testOneOf: PropTypes.oneOf([1, 2, 3, 'dd', t1, t2, t3, t4]),
    testOneOfType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(CC),
        PropTypes.oneOf([1, 2, 3, 'dd', t1, t2, t3, t4])
    ]).isRequired,
    testArrayOf: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(CC),
        PropTypes.oneOf([1, 2, 3, 'dd', t1, t2, t3, t4])
    ])),
    testObjectOf: PropTypes.objectOf(PropTypes.number),
    testObjectShape: PropTypes.shape({key1: PropTypes.number}),
    testAny: PropTypes.any,
    testCustom: function (props, propName, componentName) {
        console.log('---------------1')
        console.log(props, propName, componentName)
    },
    testCustomArrayOf: PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
        console.log('---------------2')
        console.log(propValue, key, componentName, location, propFullName)
    }),
    testCustomObjectOf: PropTypes.objectOf(function (propValue, key, componentName, location, propFullName) {
        console.log('---------------3')
        console.log(propValue, key, componentName, location, propFullName)
    }),
    children:PropTypes.element,
    test:PropTypes.any.isRequired
};

C.defaultProps = {

};




ReactDOM.render(
    <C
        testArray={undefined}
        testBool={undefined}
        testFunc={undefined}
        testNumber={-0}
        testObject={/\s/}
        testString={'1'}
        testSymbol={null}
        testNode={null}
        testElement={null}
        testIns={null}
        testOneOf={null}
        testOneOfType={t1}
        testArrayOf={null}
        testObjectOf={null}
        testObjectShape={{key1:234}}
        testAny={null}
        testCustom="123"
        testCustomArrayOf={[1,2,3,4]}
        testCustomObjectOf={{a:1,b:2,c:3}}
    >
        <div>1</div>
    </C>
    ,
    document.getElementById('root')
);
