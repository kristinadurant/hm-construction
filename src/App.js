import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { Header, Footer } from './components';

function App() {
  return ( 
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
