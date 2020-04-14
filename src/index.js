import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));