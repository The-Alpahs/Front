import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Route} from "react-router-dom";



import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <App /> 
    <login.component/>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();


