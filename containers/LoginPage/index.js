/*
 *
 * LoginPage
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { loginRequest } from '/containers/App/actions';
import { LoginForm } from '/components';

import { LOGIN_FORM } from './constants';
import validate from './validate';

// Redix Form
const LoginFormEnhanced = reduxForm({
  form: LOGIN_FORM,
  validate
})(LoginForm);

export class LoginPage extends Component {

  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };

  handleLogin = value => {
    // console.log(value)
    this.props.loginRequest(value, this.props.history);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>LoginPage</title>
          <meta
            name="description"
            content="Description of LoginPage"
          />
        </Helmet>

        <LoginFormEnhanced onSubmit={this.handleLogin}/>

        {this.errorMessage()}
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  loading: loginReducer.loading,
  authenticated: loginReducer.authenticated,
  errorMessage: loginReducer.error
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      loginRequest
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
