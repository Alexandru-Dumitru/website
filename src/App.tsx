import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
