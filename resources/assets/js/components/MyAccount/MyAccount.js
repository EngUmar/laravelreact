import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { authHeader } from '../../helpers';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "../Layouts/Header";

class MyAccount extends Component {

  render() {
    return (
        <div>
          <Header />
          <div className="myAccount">
            <div>In my account</div>
          </div>
        </div>
    )
  }
};


function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
}

export default withRouter(connect(mapStateToProps)(MyAccount));
