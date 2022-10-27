import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation/Navigation'; 
import NoPageFound from './components/NoPageFound';
import Home from './components/Home/Home.js';
import Mail from './components/Mail';
import Portfolio from './components/Portfolio';

export default function App () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="mail" element={<Mail />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<NoPageFound />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    )
};

