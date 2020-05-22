import ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'mobx-react';
import App from './src/App';
import './public/index.css';
import store from './src/store';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
