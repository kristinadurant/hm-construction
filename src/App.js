import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
  return ( 
    <BrowserRouter>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
