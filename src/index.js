import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KitchenContainer from '../src/components/KitchenContainer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


ReactDOM.render(
  <React.StrictMode >
    <Auth0Provider
    domain="dabrown.eu.auth0.com"
    clientId="BpcAIdD4eMl5U7gmLpEqRuEN6z03XaHC"
    redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <KitchenContainer />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
