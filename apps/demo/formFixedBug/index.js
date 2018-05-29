import React from 'react';
import ReactDOM from 'react-dom';
import 'style'
import './index.scss'


class C extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {
                    this.props.list.map((i)=>{
                        return <div>{i}</div>
                    })
                }
            </div>
        )
    }
}


ReactDOM.render(
    <div style={{paddingBottom:50}}>
        <C list={Array.from({length:100}).map((i,j)=>j)}/>
        <div style={{position:'fixed',height:50,bottom:0}}>
            <input style={{height:50}} type="text"/>
        </div>
    </div>,
    document.getElementById('root')
);


                {/*ReactDOM.render(*/}
                {/*<div>*/}
                    {/*<C list={Array.from({length:100}).map((i,j)=>j)}/>*/}
                    {/*<div style={{position:'fixed',bottom:0}}>*/}
                        {/*<input type="text"/>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*,*/}
                {/*document.getElementById('root')*/}
                {/*);*/}



