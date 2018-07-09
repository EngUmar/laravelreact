import React, { Component } from 'react';
import Header from '../../components/Layouts/Header';

export default class index extends Component {

    render() {

        return (
           <div className="myApp">
                <Header />
                <div className="myAccount">
                    <div>Welcome to LARAVEL + REACT Test SPA</div>
                </div>
           </div>
        )
    }
};
