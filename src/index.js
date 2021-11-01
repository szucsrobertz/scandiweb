import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store} from './redux/store';

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
    <BrowserRouter>    
    <App />
  </BrowserRouter>
  </Provider>
  </ApolloProvider>,
  
  document.getElementById('root')
);

reportWebVitals();
