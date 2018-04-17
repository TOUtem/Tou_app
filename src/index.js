import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { counter } from './index.redux';
import App from './App';

const store = createStore(counter)

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

render()

store.subscribe(render) // 状态改变之后render一下

