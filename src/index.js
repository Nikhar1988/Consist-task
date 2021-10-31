import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from './components';
import './index.css';



ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary
      FallbackComponent={Error}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);


