/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './component/Home/Home';
import Project from './component/Project';
import About from './component/About';
import Orbit from './component/Project/Orbit';
import Website from './component/Project/Website';
import LethalDeliveryVR from './component/Project/LethalDeliveryVR';
import MazeForest from './component/Project/MazeForest';
import cursorImage from './images/Cursor.png'; 
import Contact from './component/Contact';
import Blog from './component/Blog';
import Pacman from './component/Project/Pacman';

const App = () => {
  useEffect(() => {
    document.body.style.cursor = `url(${cursorImage}), auto`;

    return () => {
      // 컴포넌트 언마운트시 커서 기본값
      document.body.style.cursor = 'default';
    };
  }, []);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/about/*" element={<About/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/project/lethaldeliveryvr" element={<LethalDeliveryVR/>}/>
        <Route path="/project/orbit" element={<Orbit/>}/>
        <Route path="/project/website" element={<Website/>}/>
        <Route path="/project/mazeforest" element={<MazeForest/>}/>
        <Route path="/project/pacman" element={<Pacman/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
