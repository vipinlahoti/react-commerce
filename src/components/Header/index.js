/**
 * Header
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    '& a': {
      color: theme.palette.primary.contrastText,
    }
  }
});

class Header extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  appBarLinks() {
    if (this.props.authenticated) {
      return [
        <Button key="home" component={Link} color="inherit" to="/home">Home</Button>,
        <Button key="signout" component={Link} color="inherit" to="/signout">Sign out</Button>
      ];
    }
    return [
      <Button key="signin" component={Link} color="inherit" to="/signin">Sign in</Button>,
      <Button key="signup" component={Link} color="inherit" to="/signup">Sign up</Button>
    ];
  }

  render() {
    const classes = this.props.classes;

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            <Link to="/">rCommerce</Link>
          </Typography>
          {this.appBarLinks()}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  authenticated: loginReducer.authenticated
});

// export default withStyles(styles)(Header);

export default withStyles(styles)(connect(mapStateToProps)(Header));
