import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Features } from './components/features/features';
import { Navbar } from './components/navbar';
import { Top } from './components/top';
import { Footer } from './components/footer';

function App() {
  return (<>
        <Top/>
    <Router>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
    </Routes>
  </Router><Footer/></>
  );
}

export default App;
