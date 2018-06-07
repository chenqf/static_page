// @flow Created by 陈其丰 on 2018/6/7.


class EventObserver{
    constructor(){
        this._events = new Map();
    }
    emit(key,...args){
        let handlers = this._events.get(key) || [];
        handlers.forEach((handler)=>{
            handler.apply(this,args);
        })
    }
    addEventLister(key,fn){
        let handlers = this._events.get(key) || [];
        handlers.push(fn);
        this._events.set(key,handlers);
    }
    removeEventLister(key,fn){
        if(!fn){
            this._events.delete(key);
        }else{
            let handlers = this._events.get(key) || [];
            handlers.splice(handlers.indexOf(fn),1);
            handlers.length === 0 && this._events.delete(key);
        }
    }
}