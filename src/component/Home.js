import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';

function Home() {
    const [text, setText] = useState('UNREAL DEV.');
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFadeIn(false);
        setTimeout(() => {
          setIndex(prevIndex => (prevIndex + 1) % words.length);
          setFadeIn(true); 
        }, 900);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    const words = ['UNREAL DEV.', 'GAME DEV.', 'VR DEV.'];
  
    useEffect(() => {
      setText(words[index]);
    }, [index]);
    return (
    <div>
        <Helmet><title>USFREE | Woohyun Cho</title></Helmet>
        <div class="section">
            <div class="bg-video">
                <div class="intro-background"></div>
            </div>
            <div class="w-100">
                <div class="scr-down font-7 fw-light2">
                    <div class="main__action text-center">
                        <HashLink smooth to="#intro" className="main__scroll">
                            <div class="main__scroll-box">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"></path>
                                </svg>
                            </div>
                            <span class="main__scroll-text font-2 fs-9 font-letter-space">SCROLL DOWN</span>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div class="s-intro overflow-hidden">
                <div class="s-intro__content row text-black pt-5"> 
                    <div class="column">
                        <div class="row row-cols-lg-1 justify-content-center font-3">
                            <div class="col">
                                <div class="text-black fs-0 lh-sm font-10 mb-5">
                                    <div class="font-letter-space fw-bold"><span className={`fade-in-out ${fadeIn ? 'fade-in' : 'fade-out'} rainbow-text`}>{text}</span></div>
                                </div>
                                <div class="row row-half justify-content-center font-3">
                                    <div class="h-100 overflow-hidden border-0 rounded-1 pt-2 text-black fs-6">
                                        <div class="font-2 fw-light2 font-letter-space text-uppercase"><b>Woohyun Cho</b></div>
                                        <div class="fw-bolder font-2 highlight font-letter-space text-uppercase">Developer Portfolio</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" id="intro">
            <div class="bg-white-gray h-100">
                <div class="s-intro__content row text-black"> 
                    <div class="container px-4">
                        <div class="justify-content-center">
                            <div class="mb-5">
                                <Fade bottom delay={500}>
                                    <div>
                                        <div class="fs-0-5 font-10 fw-light2 font-letter-space-sm text-black mb-5 pt-5">MORE AND MORE <span class="fw-bold">CREATIVELY</span></div>
                                    </div>
                                </Fade>
                                <Fade bottom delay={1000}>
                                    <div class="mb-3 lh-lg font-letter-space-sm font-3 fw-normal text-black fs-6">
                                            안녕하세요, 언리얼/게임/VR/AR 개발자를 꿈꾸고 있는 조우현입니다. 
                                        <br/>모든 일에 필요한 창의력은 혁신을 그리고, 상상력은 사람을 만들고 조각한다고 생각합니다.
                                        <br/><span class="highlight">창의력과 상상력</span>을 통해 꾸준히 성장하는 개발자가 되도록 노력하겠습니다.
                                        <br/><br/>진행하는 프로젝트에 대해서는 포트폴리오 웹사이트에 꾸준히 업데이트하여 게시중입니다.
                                    </div>
                                </Fade>
                                <div>
                                    <div class="row row-cols-sm-1 row-cols-xxl-1 g-4 mb-5 pt-5">
                                        <div class="col">
                                        <Fade bottom delay={1500}>
                                            <span>
                                                <Link to='/profile' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-3 fs-6 fw-bolder mt-3">Profile</Link>
                                            </span>
                                        </Fade>
                                        <Fade bottom delay={1800}>
                                            <span>
                                                <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3">Project</Link>
                                            </span> 
                                        </Fade><br class="only-mobile-view"/>
                                        <Fade bottom delay={2100}>
                                            <span>
                                                <a href="https://velog.io/@usfree" target="_blank" className="btn btn-outline-dark-round-main btn-lg px-4 py-2 me-3 fs-6 fw-bolder mt-3">Blog</a>
                                            </span> 
                                        </Fade>
                                        <Fade bottom delay={2400}>
                                            <span>
                                                <a href="https://github.com/usfree" target="_blank" className="btn btn-outline-dark-round-main btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3">Github</a>
                                            </span> 
                                        </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

  export default Home;