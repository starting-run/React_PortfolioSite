/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; 
import ScrollToTop from "./component/Function/ScrollToTop";
import ScrollIndicator from './component/Function/ScrollIndicator';
import Nav from './component/Nav';
import { Toaster } from 'react-hot-toast';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Toaster position='bottom-center'/>
      <App />
      <ScrollToTop />
      <ScrollIndicator/>
      <Nav />
      <Footer/>
    </HashRouter>
);

reportWebVitals();
