import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import reducers from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import './index.css'
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                {/* <AuthRoute></AuthRoute> */}
                {/* <Route path='/boss' component={Boss}></Route> */}
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root')
)

