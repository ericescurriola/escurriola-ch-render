import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles.css';
import Home from './Home/Home';
import AlienAir from './AlienAir/AlienAir';

export default function App () {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alienair" element={<AlienAir />} />
            {/* 404 route - any undefined path will redirect to Home */}
            <Route path="*" element={<Home />} />
        </Routes>
      </Router> 
    )
};
