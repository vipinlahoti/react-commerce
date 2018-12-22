/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    fullWidth
    margin="dense"
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '420px',
    margin: 'auto'
  },
  buttonMargin: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  }
});

class LoginForm extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
  }

  handleLoginForm = e => {
    e.preventDefault();

    // if (this.state.username.length === 0 || this.state.password.length === 0) {
    //   return;
    // }

    // this.props.handleFormSubmit({ ...this.state });
  };

  render() {
    const { handleSubmit, pristine, submitting, valid, classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            component={renderTextField}
            label="Email"
          />
          <Field
            name="password"
            type="password"
            component={renderTextField}
            label="Password"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            className={classes.buttonMargin}
            disabled={!valid || pristine || submitting}>
            Login
          </Button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(LoginForm);
