import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import main_profile_btn from "../images/profile/edu.jpg";
import main_project_btn from "../images/projects/2.png";
import main_labs_btn from "../images/maple.png";
import main_blog_btn from "../images/main/card1.jpeg";
import main_github_btn from "../images/main/gitback.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

class Home extends Component {
    render() {
      return (
        <div id="main">
        <Helmet>
            <title>USFREE | Woohyun Cho</title>
        </Helmet>
        <div class="wraps">
            <div class="section">
                    <div class="w-100">
                        <div class="scr-down font-7 fw-light2">
                            <div class="main__action text-center">
                            <HashLink smooth to="#intro" className="main__scroll">
                                <div class="main__scroll-box">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z">
                                        </path>
                                    </svg>
                                </div>
                                <span class="main__scroll-text">SCROLL DOWN</span>
                                </HashLink>
                            </div>
                            
                        </div>
                    </div>
    
                    <div class="s-intro">
                        <div class="s-intro__content row text-black pt-5"> 
                            <div class="column">
                                <div class="row row-cols-lg-1 justify-content-center font-3">
                                    <div class="col">
                                        <div class="text-black fs-0 lh-sm font-7 mb-5 fw-lighter">
                                            <div class="font-letter-space">More&nbsp;And&nbsp;More<br></br></div>
                                            <div class="font-letter-space-lg fw-bold">CREATIVELY</div>
                                        </div>
                                        <div class="row row-half justify-content-center font-3">
    
                                            <div class="card h-100 overflow-hidden border-0 rounded-2 pt-2 card-blur text-black">
                                                <div class="fs-6 mb-1 font-3"><b>조우현</b></div>
                                                <div class="fw-light2 mb-1 fs-6 font-3">게임 클라이언트 프로그래머</div>
                                                <div class="fw-light2 fs-6 mb-3 font-3"><a href="https://sae.kangnam.ac.kr/">강남대학교 ICT공학부</a> 재학(2019 - )</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="section" id="intro">
                <div class="bg-white">
                    <div class="container-xxl px-4 mt-4 pt-5">
                        <div class="row justify-content-center">
                            <div class="mb-5">
                                <div class="row row-cols-2 row-cols-xl-4 g-4 cards">
                                    <NavLink to="/profile" id="profiles2">
                                        <div class="img-fluid">
                                            <div class="col">
                                                <div class="card card-cover-main h-100 overflow-hidden border-0">
                                                    <img class="card-image" src={main_profile_btn}></img>
                                                    <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mb-5 mt-3">
                                                        <span class="mb-2 fs-2 lh-1 fw-bold pt-7 font-3 no_enter">프로필</span>
                                                        <span class="mb-5 fs-7 lh-1 fw-bold font-3">Profile</span>
                                                        <span class="fs-7 lh-1 fw-bold font-3 pt-3 main-btn">바로가기 <FontAwesomeIcon icon={faChevronRight} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/project" id="project2">
                                        <div class="img-fluid">
                                            <div class="col">
                                                <div class="card card-cover-main h-100 overflow-hidden border-0">
                                                    <img class="card-image" src={main_project_btn}></img>
                                                    <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mb-5 mt-3">
                                                        <span class="mb-2 fs-2 lh-1 fw-bold pt-7 font-3">프로젝트</span>
                                                        <span class="mb-5 fs-7 lh-1 fw-bold font-3">Project</span>
                                                        <span class="fs-7 lh-1 fw-bold font-3 pt-3 main-btn">바로가기 <FontAwesomeIcon icon={faChevronRight} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <a href="https://velog.io/@usfree" target='_blank'>
                                        <div class="img-fluid">
                                            <div class="col">
                                                <div class="card card-cover-main h-100 overflow-hidden border-0">
                                                    <img class="card-image" src={main_blog_btn}></img>
                                                    <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mb-5 mt-3">
                                                        <span class="mb-2 fs-2 lh-1 fw-bold pt-7 font-3 no_enter">블로그</span>
                                                        <span class="mb-5 fs-7 lh-1 fw-bold font-3">Blog</span>
                                                        <span class="fs-7 lh-1 fw-bold font-3 pt-3 main-btn">바로가기 <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://github.com/usfree" target='_blank'>
                                        <div class="img-fluid">
                                            <div class="col">
                                                <div class="card card-cover-main h-100 overflow-hidden border-0">
                                                    <img class="card-image" src={main_github_btn}></img>
                                                    <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mb-5 mt-3">
                                                        <span class="mb-2 fs-2 lh-1 fw-bold pt-7 font-3 no_enter">깃허브</span>
                                                        <span class="mb-5 fs-7 lh-1 fw-bold font-3">Github</span>
                                                        <span class="fs-7 lh-1 fw-bold font-3 pt-3 main-btn">바로가기 <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
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

      );
    }
  }

  export default Home;