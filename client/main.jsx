import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { JssProvider } from 'react-jss';
import { create } from 'jss';
import { MuiThemeProvider, jssPreset } from '@material-ui/core/styles';
// import 'typeface-roboto';

import history from '/modules/history';
import store from '/modules/store';
import { theme } from '/modules/theme';
import * as serviceWorker from '/modules/serviceWorker';
import { App } from '/containers';

const jss = create(jssPreset());
jss.setup({ insertionPoint: document.head });

const MOUNT_NODE = document.getElementById('root');

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <JssProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </MuiThemeProvider>
      </JssProvider>
    </Provider>,
    MOUNT_NODE
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
