import footerimg from './images/footerimg.png';
import video from './images/video/usfree_creative.mp4';


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

const MoveToTop = () => {
  // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

function acorClose() {
  if ($('.navbar-toggler').attr('aria-expanded') == 'true') {
      $(".navbar-toggler").trigger("click");
      $("input:checkbox[id='hbg']").prop("checked", false);
  }
}
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
            <NavLink exact to="/" className="navbar-brand" id="mains" onClick={acorClose}><img class="logoimg"></img></NavLink>
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
                  <NavLink exact to="/profile" className="nav-link" onClick={acorClose}><li class="nav-item">Profile</li></NavLink>
                  <NavLink exact to="/project" className="nav-link" onClick={acorClose}><li class="nav-item">Project</li></NavLink>
                  <a class="nav-link" href="https://velog.io/@usfree" target='_blank' onClick={acorClose}><li class="nav-item">Blog</li></a>
                  <a class="nav-link" href="https://github.com/usfree" target='_blank' onClick={acorClose}><li class="nav-item">Github</li></a>
                </ul>
            </div>
        </div>
      </nav>
    </div>

    <div id="topbtn" class="ss-go-top">
            <a class="smoothscroll" title="Back to Top" onClick={MoveToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path></svg>
            </a>
        </div>
      <div id="normalfooter" class="bg-dark py-4 mt-auto">
            <div class="container-full px-4 text-only-white font-3">
                <div class="text-end">
                    <a class="text-only-white" href="https://github.com/usfree"><FontAwesomeIcon icon={faGithub} /></a>　
                    <a class="text-only-white" href="https://velog.io/@usfree"><FontAwesomeIcon icon={faBlogger} /></a>　
                    <a class="text-only-white" href="https://solved.ac/profile/tlrmsjtm77"><FontAwesomeIcon icon={faCode} /></a>　
                    <a class="text-only-white" href="https://codeforces.com/profile/tlrmsjtm77"><FontAwesomeIcon icon={faChartSimple} /></a>
                </div>
                <hr></hr>
                <div class="d-flex">
                    <div class="mb-3 small"><Link to="/credit" className="credit text-only-white">크레딧</Link></div>
                    <div class="mb-3 smaller text-only-white">　|　</div>
                    <div class="mb-3 small"><Link to="/links" className="credit text-only-white">링크</Link></div>
                    <div class="mb-3 smaller text-only-white">　|　</div>
                    <div class="mb-3 small"><a class="credit text-only-white" href="https://usfree.site/labs">실험실</a></div>
                    <div class="mb-3 smaller text-only-white">　|　</div>
                    <div class="mb-3 small"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fusfree.site&count_bg=%23FC8574&title_bg=%23212529&icon=&icon_color=%23E7E7E7&title=visit&edge_flat=true"/></div>
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
