import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import ScrollToTop from "./component/ScrollToTop";

import Home from './component/Home';
import Project from './component/Project';
import Profile from './component/Profile';
import Pacman from "./component/Project/Pacman";
import Ironman from "./component/Project/Ironman";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/project" element={<Project/>}/>
        <Route exact path="/project/pacman" element={<Pacman/>}/>
        <Route exact path="/project/ironman" element={<Ironman/>}/>
      </Routes>
      <App />

    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
