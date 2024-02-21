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
import Snake from './component/Project/Snake';
import ToTopButton from './component/ToTopButton';
import Slowdown from './component/Project/Slowdown';
import Website from './component/Project/Website';
import Nav from './component/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <App />
      <ScrollToTop />
      <Routes>
        <Route path="/profile/*" element={<Profile/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project/slowdown" element={<Slowdown/>}/>
        <Route path="/project/website" element={<Website/>}/>
        <Route path="/project/pacman" element={<Pacman/>}/>
        <Route path="/project/ironman" element={<Ironman/>}/>
        <Route path="/project/snake" element={<Snake/>}/>
      </Routes>
      <Nav />
    </HashRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
