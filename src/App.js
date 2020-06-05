import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperHeroList from './Components/SuperHeroList';

function App() {
  return (
    <div className="App">
<header>
    <h1 className="headline">SuperHeros - REACT  &#11088;    </h1>
  </header>
  
<SuperHeroList />

    </div>
  );
}

export default App;
