import React from 'react';
import './App.css';

import {HeaderComponent} from "./components";
import {AboutComponent} from "./components/About";
import {MainContainer} from "./containers";


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <AboutComponent/>
      <MainContainer/>


    </div>
  );
}

export default App;
