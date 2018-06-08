// @flow Created by 陈其丰 on 2018/6/7.

const fn = function () {};

class RouterHash{
    constructor(){
        this.routers = {};
        this.registerNotFound();
        this.registerError();
        this.registerIndex();
        window.addEventListener('load',this.load.bind(this),false);
        window.addEventListener('hashchange',this.load.bind(this),false)
    }
    registerNotFound(callback = fn){
        this.routers['404'] = callback;     
    }
    registerError(callback = fn){
        this.routers['error'] = callback;
    }
    registerIndex(callback = fn){
        this.routers['index'] = callback;
    }
    register(url,callback = fn){
        this.routers[url] = callback;
    }
    load(){
        let hash = location.hash,
            handler;
        if(!hash){
            handler = this.routers.index;
        }else{
            hash = hash.slice(1);
            handler = this.routers[hash] || this.routers['404'];
        }
        try{
            handler();
        }catch(e){
            console.error(e);
            this.routers['error']();
        }
    }
    back(num = 1){
        history.go(-num)
    }
    go(num = 1){
        history.go(num)
    }
}


class RouterState{
    constructor(){
        this.routers = {};
        this.listenPopState();
    }
    listenPopState(){
        window.addEventListener('popstate',(e)=>{
            let state = e.state || {},
                path = state.path || '',
                handler;
            if(path){
                handler = this.routers[path];
                handler && handler(state);
            }
        })
    }
    register(path,callback = fn){
        this.routers[path] = callback;
    }
    assign(path,state = {}){
        state.path = path;
        history.pushState(state,null,path);
        let handler = this.routers[path];
        handler && handler(state);
    }
    replace(path,state = {}){
        state.path = path;
        history.replaceState(state,null,path);
        let handler = this.routers[path];
        handler && handler(state);
    }
}

export {
    RouterHash,
    RouterState
};