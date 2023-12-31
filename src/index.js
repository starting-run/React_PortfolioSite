import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Link, NavLink, HashRouter} from 'react-router-dom';
import ScrollToTop from "./component/ScrollToTop";

import Home from './component/Home';
import Project from './component/Project';
import Profile from './component/Profile';
import Pacman from "./component/Project/Pacman";
import Ironman from "./component/Project/Ironman";
import Credit from './component/element/Credit';
import Links from './component/element/Links';
import Snake from './component/Project/Snake';
import ToTopButton from './component/ToTopButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ToTopButton />
      <ScrollToTop />
      <Routes>
        <Route path="/profile/*" element={<Profile/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project/pacman" element={<Pacman/>}/>
        <Route path="/project/ironman" element={<Ironman/>}/>
        <Route path="/project/snake" element={<Snake/>}/>
        <Route path="/credit" element={<Credit/>}/>
        <Route path="/links" element={<Links/>}/>
      </Routes>
      <App />
    </HashRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
