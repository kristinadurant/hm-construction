import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { Header, Footer } from './components';
import { About, Contact, ErrorPage, Home, Projects, Services} from './pages/index';

function App() {
  return ( 
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
       <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
