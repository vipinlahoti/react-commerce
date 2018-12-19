/**
 * Header
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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

  render() {
    const classes = this.props.classes;

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            <Link to="/">rCommerce</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
