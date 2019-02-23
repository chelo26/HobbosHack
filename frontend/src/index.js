import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-table/react-table.css';
import { renderToString } from 'react-dom/server';


import './scss/custom/designer.css';

import { applyMiddleware, compose, createStore } from 'redux';
import allReducers from './reducers';
import App from './app';
import { Provider } from 'react-redux';
import React from 'react';
// import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
// import { render } from 'react-snapshot';
import { hydrate, render } from 'react-dom';

const Store = createStore(
  allReducers,
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '',
  compose(
    applyMiddleware(thunk)
  )
);

// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(  <Provider store={Store}>
      <App />
    </Provider>, rootElement);
} else {
    render(  <Provider store={Store}>
      <App />
    </Provider>, rootElement);
}
// registerServiceWorker();