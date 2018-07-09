import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Index from '../contianers/Index';
import Account from './MyAccount/MyAccount';
import RegisterationForm from '../contianers/Auth/RegisterationForm';
import $ from 'jquery';
import { Router , Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../helpers';
import {BASE_URL} from "../constants/Config";
import {history} from '../helpers'

/**
 * To show alerts
 */
export default class MyApp extends Component {
    render() {
        const url = BASE_URL.routeBaseUrl;
        return <Provider store={store}>
            <Router history={history}>
                <div>
                    <Route exact path='/' component={Index}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/register' component={RegisterationForm}/>
                </div>
            </Router>
        </Provider>;
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<MyApp />, document.getElementById('app'));
}



