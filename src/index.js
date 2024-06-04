import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, HashRouter, BrowserRouter} from 'react-router-dom'; 
import ScrollToTop from "./component/Function/ScrollToTop";
import ScrollIndicator from './component/Function/ScrollIndicator';
import Home from './component/Home/Home';
import Project from './component/Project';
import Profile from './component/Profile';
import Pacman from "./component/Project/Pacman";
import Ironman from "./component/Project/Ironman";
import Snake from './component/Project/Snake';
import Orbit from './component/Project/Orbit';
import Website from './component/Project/Website';
import LethalDeliveryVR from './component/Project/LethalDeliveryVR';
import Nav from './component/Nav';
import { Toaster } from 'react-hot-toast';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/*BrowserRouter*/}
      <Toaster position='bottom-right'/>
      <App />
      <ScrollToTop />
      <Routes>
        <Route path="/profile/*" element={<Profile/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project/lethaldeliveryvr" element={<LethalDeliveryVR/>}/>
        <Route path="/project/orbit" element={<Orbit/>}/>
        <Route path="/project/website" element={<Website/>}/>
        <Route path="/project/pacman" element={<Pacman/>}/>
        <Route path="/project/ironman" element={<Ironman/>}/>
        <Route path="/project/snake" element={<Snake/>}/>
      </Routes>
      <ScrollIndicator/>
      <Nav />
      <Footer/>
    </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
