/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  appBar: {
    // background: theme.palette.primary.contrastText,
    height: '72px',
    boxShadow: '0 0 40px rgba(100, 122, 235, 0.7)'
  },
  toolBar: {
    height: '72px'
  },
  grow: {
    flexGrow: 1,
    '& a': {
      color: theme.palette.primary.contrastText,
    }
  },
  menuButton: {
    marginRight: theme.spacing.unit * 3,
  },
});

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const classes = this.props.classes;

    return (
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.grow}>
            <Link to="/">rCommerce</Link>
          </Typography>
          <Button key="login" component={Link} color="inherit" to="/login">Log in</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header);
