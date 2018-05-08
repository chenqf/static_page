// @flow Created by 陈其丰 on 2018/5/7.

import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../tools/translate/list.json';
import 'style';
import './index.scss'

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {list:data.reverse()};
    }
    listenEvent(query){
        let audio = document.getElementById(query);
        audio.play();
    }
    render(){
        return (
            <ul className="word-list">
                {
                    this.state.list.map((i)=>{
                        return (
                            <li key={i.query} className="word-list__item" onClick={this.listenEvent.bind(this,i.query)}>
                                <audio src={i.mp3} id={i.query}/>
                                <span className="word-list__content">
                                    <p className="word-list__word">{i.query}</p>
                                    <p className="word-list__phonetic">[{i.phonetic}]</p>
                                </span>
                                <span className="word-list__explains">{
                                    i.explains.map((j)=>{
                                        return <p key={j}>{j}</p>
                                    })
                                }</span>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }
}

class Add extends React.Component{
    search(){
        let val = document.getElementById('search').value;
        if(val){
            let img = new Image();
            img.src = `http://localhost:8888/?q=${val.toLowerCase()}`
        }
    }
    render(){
        return (
            <div className="word-search">
                <input id="search" className="word-search__input"/>
                <button className="word-search__button" onClick={this.search}>查询</button>
            </div>
        )
    }
}



ReactDOM.render(
    <div>
        <Add/>
        <List/>
    </div>
    ,
    document.getElementById('root')
);