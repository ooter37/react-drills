import React from 'react';
import './App.css';
import Routes from './routes'
import {Link} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/details'>Details</Link>
      </nav>
    </div>
    </HashRouter>
  );
}

export default App;
