import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';

function App() {
  <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' Component={VendingMachine}/>
      </Routes>
    </div>
  </BrowserRouter>

}

export default App;