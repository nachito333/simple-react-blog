import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
//Middleware
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { createStore , applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise , thunk)(createStore);


ReactDOM.render(
  <Provider store = { createStoreWithMiddleware(reducers) } >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
