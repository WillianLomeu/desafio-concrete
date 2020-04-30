import {createStore, compose, applyMiddleware } from 'redux';

function reducer() {
    return{
        name:'',
        auth:false,
    };
}

const store = createStore(reducer);


export default store;