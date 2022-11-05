import React from 'react'
import Header from './components/header/Header'
import Section from './components/section/Section';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar/Nav';


const App = () => {



  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/Services" element={<Section />}></Route>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;