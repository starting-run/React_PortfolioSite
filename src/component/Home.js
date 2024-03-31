import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faCircleArrowRight, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

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
  
    const words = ['UNREAL CONTENTS', 'UNITY CONTENTS', 'GAME', 'VR CONTENTS'];
  
    useEffect(() => {
        setText(words[index]);
      }, [index]);
    
    
    return (
    <div>
        <Helmet><title>USFREE | Woohyun Cho</title></Helmet>
        <div class="section bg-white-gray">
        {/*
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
            </div>*/}

            <div class="s-intro pt-3">
                <div class="s-intro__content row text-black pt-5"> 
                    <div class="justify-content-center font-3">
                        <div class="container-xxl px-3 mt-5-main">
                            <div class="row row-cols-lg-2 row-cols-1">
                                <div class="col col-lg-9 mb-3 ">
                                    <div class="intro-background card rounded-4 card-border-0 p-0">
                                        <div class="text-black fs-0 lh-sm font-11 mb-5 pt-6">
                                            <div class="font-letter-space fw-bold2 pt-5 px-5">
                                                {/*<span className={`fade-in-out ${fadeIn ? 'fade-in' : 'fade-out'} rainbow-text`}>{text}</span>*/}
                                                <div class="font-11 fs-0-5 fw-bold text-start mb-5">만나서 반갑습니다 !</div>
                                                <div class="font-11 fs-1 fw-normal text-start mb-2">저는</div>
                                                <div class="font-11 fs-0-5 fw-bold2 text-start mb-2"><span className={`fade-in-out ${fadeIn ? 'fade-in' : 'fade-out'} rainbow-text`}>{text}</span></div>
                                                <div class="font-11 fs-1 fw-normal text-start">를 만듭니다.</div>
                                            </div>
                                        </div>
                                        <div class="text-start px-5">
                                            <div class="h-100 font-11 pt-2 text-black fs-5 font-letter-space text-uppercase mb-5 pb-5">
                                                <div class="fw-normal">Woohyun Cho</div>
                                                <div class="fw-bold2 highlight">Developer Portfolio Website</div>
                                            </div>
                                        </div>
                                        <span class="text-end fs-4 card-in-arrow">
                                            <div class="fs-6 px-4 mx-2 mb-1-5 text-black">더보기</div>
                                        </span>
                                        <span class="text-end fs-4 card-in-arrow">
                                            <HashLink smooth to="#intro" className="main__scroll"><FontAwesomeIcon icon={faCircleArrowDown}/></HashLink>
                                        </span>
                                    </div>
                                </div>
                                <div class="col col-lg-3">
                                    <div class="row-cols-lg-1">
                                        <div class="col">
                                            <NavLink to='/profile'>
                                                <div class="img-fluid mb-3">
                                                    <div class="col">
                                                        <div class="card card-cover-profile h-100 overflow-hidden text-only-black card-border-0 rounded-4">
                                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                                <span class="mb-2 fs-6 lh-1 fw-normal font-11 text-start mb-6">프로필</span>
                                                                <span class="text-start fw-bold fs-5 mb-3">개발자 <span class="fw-bold2">조우현</span>의 프로필에 대해 소개합니다.</span>
                                                                <span class="text-end fs-4 card-in-arrow">
                                                                    <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div class="col">
                                            <NavLink to='/project'>
                                                <div class="img-fluid mb-3">
                                                    <div class="col">
                                                        <div class="card card-cover-main h-100 overflow-hidden text-black card-border-0 rounded-4">
                                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                                <span class="mb-2 fs-6 lh-1 fw-normal font-11 text-start mb-6">프로젝트</span>
                                                                <span class="text-start fw-bold fs-5 mb-3">그동안 진행한 프로젝트와 상세내용을 확인할 수 있습니다.</span>
                                                                <span class="text-end fs-4 card-in-arrow">
                                                                    <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div class="col">
                                            <a href="https://github.com/usfree" target='_blank'>
                                                <div class="img-fluid mb-3">
                                                    <div class="col">
                                                        <div class="card card-cover-main h-100 overflow-hidden text-black card-border-0 rounded-4">
                                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                                <span class="mb-2 fs-6 lh-1 fw-normal font-11 text-start mb-6">깃허브</span>
                                                                <span class="text-start fw-bold fs-5 mb-3">진행한 프로젝트와 스터디 내용 등 여러가지 리포지토리를 관리합니다.</span>
                                                                <span class="text-end fs-4 card-in-arrow">
                                                                    <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="https://velog.io/@usfree" target='_blank'>
                                                <div class="img-fluid mb-3">
                                                    <div class="col">
                                                        <div class="card card-cover-blog h-100 overflow-hidden text-only-white card-border-0 rounded-4">
                                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                                <span class="fs-6 lh-1 fw-normal font-11 text-start mb-1">블로그</span>
                                                                <span class="text-end fs-4 card-in-arrow">
                                                                    <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="https://www.acmicpc.net/user/tlrmsjtm77" target='_blank'>
                                                <div class="img-fluid mb-3">
                                                    <div class="col">
                                                        <div class="card card-cover-boj h-100 overflow-hidden text-only-white card-border-0 rounded-4">
                                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                                <span class="fs-6 lh-1 fw-normal font-11 text-start mb-1">백준</span>
                                                                <span class="text-end fs-4 card-in-arrow">
                                                                    <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="justify-content-center d-flex font-11 fs-1 p-4 text-black">포트폴리오 확장을 위해 계속 노력하고 있습니다!</div>
            <div class="main__action text-center">
                <div className="main__scroll">
                    <div class="main__scroll-box">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" id="intro">
            <div class="bg-white-gray">
                <div class="container-xxl h-100 pt-7">
                    <div class="s-intro">
                        <div class="s-intro__content row text-black pt-5"> 
                                <Fade bottom delay={500}>
                                    <div>
                                        <div class="fs-0-5 font-11 fw-light2 font-letter-space-sm text-black mb-5 pt-5">MORE AND MORE <span class="fw-bold">CREATIVELY</span></div>
                                    </div>
                                </Fade>
                                <Fade bottom delay={1000}>
                                    <div class="container">
                                        <div class="row row-cols-1 g-4 mb-5">
                                            <div class="col">
                                                <div class="mb-3 lh-lg font-letter-space-sm font-11 fw-normal text-black fs-6">
                                                        안녕하세요,<br/>게임/가상현실 개발자를 지망하고 있는 조우현입니다. 
                                                    <br/>모든 일에 필요한 창의력은 혁신을 그리고, 상상력은 사람을 만들고 조각한다고 생각합니다.
                                                    <br/><span class="highlight">창의력과 상상력</span>을 통해 꾸준히 성장하는 개발자가 되도록 노력하겠습니다.
                                                    <br/><br/>진행하는 프로젝트에 대해서는 포트폴리오 웹사이트에 꾸준히 업데이트하여 게시중입니다.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <div>
                                    <div class="row row-cols-sm-1 row-cols-xxl-1 g-4 mb-5">
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
    );
}

  export default Home;