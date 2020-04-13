import React from 'react';
import './App.css';
import {HashRouter, Link} from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Link to='/'>Products</Link>
      <Link to='/details/:id'>Details</Link>
      {Routes}
    </div>
    </HashRouter>
  );
}

export default App;
