import footerimg from './images/footerimg.png';
import video from './images/video/usfree_creative.mp4';
import Home from './component/Home';
import Project from './component/Project';
import Profile from './component/Profile';
import Pacman from "./component/Project/Pacman";
import Ironman from "./component/Project/Ironman";

import './App.css';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";



function App() {
  $(document).scroll(function() {
    var scroll = $(document).scrollTop();
    if (scroll >= 50) {
        $('#add-fixed').addClass('scroll-navbar-background');
    } else {
        $('#add-fixed').removeClass('scroll-navbar-background');
    }
});
  return (
    <div className="App">

  <div>
    <div class="bg-video">
      <video class="bg-video__content" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
    <div id="add-fixed" class="navbar-fixed-attr">
      <nav id="navbarcontrol" class="navbar navbar-upper navbar-expand-lg navbar-light navbar-py">
        <div id='changecontainer' class="container-full px-4 ">
            <NavLink exact to="/" className="navbar-brand" id="mains"><img class="logoimg"></img></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <label class="hamburger">
                <input type="checkbox" id="hbg"></input>
                <svg viewBox="0 0 32 32">
                  <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-letter-space fs-fr">
                  <NavLink exact to="/profile" className="nav-link"><li class="nav-item navmargin">Profile</li></NavLink>
                  <NavLink exact to="/project" className="nav-link"><li class="nav-item navmargin">Project</li></NavLink>
                  <a class="nav-link" href="https://usfree.site/blog"><li class="nav-item navmargin">Blog</li></a>
                  <a class="nav-link" href="https://github.com/usfree" target='_blank'><li class="nav-item navmargin">Github</li></a>
                </ul>
            </div>
        </div>
      </nav>
    </div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/project" element={<Project/>}/>
        <Route exact path="/project/pacman" element={<Pacman/>}/>
        <Route exact path="/project/ironman" element={<Ironman/>}/>
      </Routes>

      <div id="normalfooter" class="bg-dark py-4 mt-auto">
            <div class="container-full px-4 text-only-white font-3">
                <div class="text-end">
                    <a class="text-only-white" href="https://github.com/usfree"><FontAwesomeIcon icon={faGithub} /></a>　
                    <a class="text-only-white" href="https://usfree.site/blog"><FontAwesomeIcon icon={faBlogger} /></a>　
                    <a class="text-only-white" href="https://solved.ac/profile/tlrmsjtm77"><FontAwesomeIcon icon={faCode} /></a>　
                    <a class="text-only-white" href="https://codeforces.com/profile/tlrmsjtm77"><FontAwesomeIcon icon={faChartSimple} /></a>
                </div>
                <hr></hr>
                <div class="d-flex">
                    <div class="mb-3 small"><a class="credit text-only-white" id="credit">크레딧</a></div>
                    <div class="mb-3 smaller text-only-white">　|　</div>
                    <div class="mb-3 small"><a class="credit text-only-white" id="links">링크</a></div>
                    <div class="mb-3 smaller text-only-white">　|　</div>
                    <div class="mb-3 small"><a class="credit text-only-white" href="https://usfree.site/labs">실험실</a></div>
                </div>
                <div class="col-auto">
                    <div class="smaller m-0 text-only-white"><b>USFREE</b> 조우현
                      <br></br>Email: <a href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다." class="text-only-white">ploris576@kangnam.ac.kr</a></div>
            
                    <div class="smaller m-0 text-only-white mb-3">Copyright &copy; Woohyun Cho(usfree) All rights reserved.</div>
                    <div class=""><a href="https://usfree.site"><img src={footerimg} style={{width: "90px"}}></img></a></div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
