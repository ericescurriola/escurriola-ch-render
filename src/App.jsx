import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles.css';
import Home from './Home/Home';
import AlienAirModelComp from './AlienAirModelComp/AlienAirModelComp';

export default function App () {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alienairmodel" element={<AlienAirModelComp />} />
            {/* 404 route - any undefined path will redirect to Home */}
            <Route path="*" element={<Home />} />
        </Routes>
      </Router> 
    )
};
