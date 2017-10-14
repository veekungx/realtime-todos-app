import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { store, client } from './config-apollo';

import './index.scss';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <ApolloProvider store={store} client={client} >
    <App />
  </ApolloProvider>
  , document.getElementById('root'),
);
registerServiceWorker();
