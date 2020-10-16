import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
