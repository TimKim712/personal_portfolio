import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-dom";
import Home from './Pages/Home/Homescreen';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;