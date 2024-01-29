import React from 'react';
import './App.css';
import Policy from './Policy';
import Service from './Service';
import Home from './Home';  // Corrected import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Service />} />
          <Route path="/Policy" element={<Policy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
