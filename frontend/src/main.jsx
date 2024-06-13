

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './store'
import SmoothScroll from './constants/utils/SmoothScroll';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </BrowserRouter>
    </Provider>
    ,
  </React.StrictMode>
);

// 