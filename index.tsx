import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { App } from './app';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
