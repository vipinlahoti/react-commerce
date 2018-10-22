import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { onPageLoad } from 'meteor/server-render';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import routes from '../modules/routes';
import mainReducer from '../modules/todo/reducers';

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line

delete window.__PRELOADED_STATE__; // eslint-disable-line

const store = createStore(mainReducer, preloadedState, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes}
      </Switch>
    </BrowserRouter>
  </Provider>
);

onPageLoad(() => {
  ReactDOM.hydrate(<App />, document.getElementById('react-app'));
});

Meteor.startup(() => {
  const rootElementName = 'react-app';
  const rootElementType = 'div';
  const attributes = [];
  let rootElement = document.getElementById(rootElementName);

  // In case the root element doesn't exist, let's create it
  if (!rootElement) {
    rootElement = document.createElement(rootElementType);
    rootElement.id = rootElementName;

    // check if a 2-dimensional array was passed... if not, be nice and handle it anyway
    if (attributes[0] instanceof Array) {
      // set attributes
      for (let i = 0; i < attributes.length; i++) {
        rootElement.setAttribute(attributes[i][0], attributes[i][1]);
      }
    } else if (attributes.length > 0) {
      rootElement.setAttribute(attributes[0], attributes[1]);
    }

    document.body.appendChild(rootElement);
  }

});
