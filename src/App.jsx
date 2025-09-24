import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles.css';
import Home from './Home/Home';
import Porsche from './Porsche/Porsche';

export default function App () {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/porsche" element={<Porsche />} />
            {/* 404 route - any undefined path will redirect to Home */}
            <Route path="*" element={<Home />} />
        </Routes>
      </Router> 
    )
};
