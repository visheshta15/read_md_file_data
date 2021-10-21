import React , {useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Link, Route} from "react-router-dom";
import Mddata from './Mddata';
import Rawdata from './Rawdata';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route  path="/rowData"><Rawdata /></Route>
          <Route  path="/"><Mddata /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
