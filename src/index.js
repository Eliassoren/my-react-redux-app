import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, {history} from './store';
import './index.css';
import App from './app/app';
import registerServiceWorker from './react-service/registerServiceWorker';
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history = {history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
