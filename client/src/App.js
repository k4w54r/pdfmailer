import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import './App.css';

const App = () => (
  <Router>
    <section className='container'>
      <Route exact path='/' component={Landing} />
    </section>
  </Router>
);

export default App;
