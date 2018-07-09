import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { BASE_URL } from "../../constants/Config";
import { getNestedDest, getParentCategories } from '../../constants/Api';
import { handleResponse,handleResponse2 } from '../../helpers/CommonHelper';
import { history } from '../../helpers';
import RegisterationForm from '../../contianers/Auth/RegisterationForm';


const url = BASE_URL.routeBaseUrl;


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }

    componentDidMount = async () => {

    }

    render() {

        
        return (
            <header id="header">

                <nav className="navbar navbar-default navbar-fixed-top navbar-sticky-function navbar-arrow">
                    <div className="container">
                         <div className="nav-mini-wrapper pull-left">
                            <ul className="nav-mini">
                                <li className="sign-in-btn">
                                   Laravel + React Test App 
                                </li>
                            </ul>
                        </div>
                        <div className="nav-mini-wrapper pull-right">
                            <ul className="nav-mini">
                            <li className="sign-in-btn">
                                <Link to='/register'> Register </Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div id="slicknav-mobile" />
                </nav>
            </header>
        )
    }

};


export default Header;


