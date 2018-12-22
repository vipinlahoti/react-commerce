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
import { defaultAction } from './actions';
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
    handleSubmit: PropTypes.func,
  };

  handleSubmit = (event, values) => {
    event.preventDefault();
    const { value } = this.props;
    console.log('form value - ', value)
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

        <LoginFormEnhanced
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ loginPage }) => ({

});

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      defaultAction
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
  
