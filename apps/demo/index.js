import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:[50,20,30,40,90,80,12,15,29],
            bgColor:'grey',
            currentColor:'red',
            height:40,
            margin:5,
        };
    }
    render(){
        return (
            <div>
                {
                    this.state.list.map((i)=>{
                        return (
                                <div style={{margin:this.state.margin,height:this.state.height,background:this.state.bgColor}}>
                                    <div style={{height:'100%',width:`${i}%`,background:this.state.currentColor}}/>
                                </div>
                            )
                    })
                }
            </div>
        )
    }
}



ReactDOM.render(
    <Test/>
    ,
    document.getElementById('root')
);




