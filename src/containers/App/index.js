import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';

import { Header } from 'components';
import { LoginPage, AboutPage } from 'containers';

const styles = theme => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontSize: '16px'
    },
    body: {
      background: theme.palette.primary.contrastText,
      ...theme.typography.body1Next
    },
    a: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
    h1: {
      ...theme.typography.h1
    },
    h2: {
      ...theme.typography.h2
    },
    h3: {
      ...theme.typography.h3
    },
    h4: {
      ...theme.typography.h4
    },
    h5: {
      ...theme.typography.h5
    },
    h6: {
      ...theme.typography.h6
    }
  },
  root: {
    zIndex: 1,
  },
  content: {
    paddingTop: theme.spacing.unit * 9,
    flexGrow: 1,
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>

        <CssBaseline/>

        <Header/>

        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/about-us" component={AboutPage} />
          </Switch>
        </main>

      </div>
    )
  }
}

export default withStyles(styles)(App);
