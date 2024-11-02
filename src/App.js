/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './services/Router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/css/fontawesome-all.min.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
