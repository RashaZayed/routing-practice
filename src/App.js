import React from 'react';
import {Router} from '@reach/router'
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import WordDetails from './components/WordDetails'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <Number path='/4' />
        <Word path='/hello' />
        <WordDetails path='/hello/:color/:background' />



      </Router>
      
    </div>
  );
}

export default App;
