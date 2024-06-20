import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store';
=======
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
=======
    <App />
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a
  </React.StrictMode>
);
