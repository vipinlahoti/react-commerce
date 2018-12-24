/*
 *
 * LoginPage
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { loginRequest } from 'containers/App/actions';
import { LOGIN_FORM } from './constants';
import { LoginForm } from 'components';
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
    this.props.loginRequest(value);
  };

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
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  loading: loginReducer.loading,
  authenticated: loginReducer.authenticated
});

// const mapDispatchToProps = dispatch => 
//   bindActionCreators(
//     {
//       loginRequest
//     },
//     dispatch
//   )

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginPage);

export default connect(mapStateToProps, { loginRequest })(LoginPage);
