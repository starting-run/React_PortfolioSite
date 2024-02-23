import React, { Component, useEffect } from 'react';
import video from '../../images/OpenGL/ironman.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faClipboardList, faGear, faLightbulb, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {browserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

import img1 from '../../images/Unity/1.png';
import img2 from '../../images/Unity/2.png';
import img3 from '../../images/Unity/3.png';
import img4 from '../../images/Unity/4.png';
import img5 from '../../images/Unity/5.png';
import img6 from '../../images/Unity/6.png';
import img7 from '../../images/Unity/7.gif';
import img8 from '../../images/Unity/8.png';
import img9 from '../../images/Unity/9.png';
import video1 from '../../images/Unity/Unity_Snake.mp4'
import pdf1 from '../../images/Unity/Unity_Snake.pdf';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';



function Slowdown() {
    const notify = () => toast.error('제작 진행중인 프로젝트입니다 !', {duration: 4000});
    const notify2 = () => toast.error('제작 진행중인 프로젝트입니다. 깃허브 리포지토리를 아직 제공하지 않습니다.', {duration: 4000});
    useEffect(() => {
        notify();
      }, []);

      return (
        <div>
            <Helmet>
                <title>SlowDown - Project - USFREE</title>
            </Helmet>
            <div id="projectmain">
                <div class="bg-white-gray">
                <div class="container-full px-4 pt-6">
                    <span class="font-10 text-black fw-normal fs-7"><Link exact to="/">Home</Link> <FontAwesomeIcon icon={faChevronRight}/> <Link exact to="/project">Project</Link> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/project/slowdown">SlowDown</NavLink></span>
                </div>
                    <div class="container-xxl px-4">
                        <span class="fs-0-5 fw-bold font-10 text-black font-letter-space-sm">SLOW DOWN</span>
                        <div class="mb-5">
                            <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                            <a href="https://github.com/usfree/" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faGithub} /> Repository</a>
                        </div>
                    </div>
                    <div class="container-xxl my-2 mt-3 px-4">
                        <div class="row gx-5 justify-content-center">
                            <div class="up-animation">
                                <div class="card shadow rounded-2 border-0">
                                    <div class="card-body p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="p-2 proj_text w-100 text-black fw-light">
                                                <div class="mb-3 w-100 card card-cover-danger p-3 rounded-4 border-0">
                                                    <span class="text-only-white"><FontAwesomeIcon icon={faTriangleExclamation} /> 제작 진행중인 프로젝트입니다 !</span>
                                                </div>
                                                <div class="mb-3 w-100 card card-cover-nonhover p-3 rounded-4 border-0">
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">프로젝트명</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">SlowDown Game</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">프로젝트 기간</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">2024. 02. -</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">주요 기능</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">여러 개의 층으로 구성된 공간에서 각 층의 클리어 조건을 달성하여 최하층에 도달하는 게임</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">구현 기능</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">&middot; </div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">사용 기술</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">UnrealEngine, C++, BluePrint</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">인원 구성</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">1인 개발</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">세부 사항</div>
                                                    <div class="font-3 fw-light fs-6">하단 참고</div>
                                                </div>
                                                <div class="text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg"><FontAwesomeIcon icon={faClipboardList} /> SUMMARY</div>
                                                <div class="mb-4">-</div>
                                                <div class="text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg"><FontAwesomeIcon icon={faLightbulb} /> REASON</div>
                                                <div class="mb-4">-</div>
                                                <div class="text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg"><FontAwesomeIcon icon={faGear} /> SETUP</div>
                                                <div class="card card-cover-nonhover p-3 rounded-4 border-0 mb-5">
                                                    # UnrealEngine<br/>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center pb-5">
                        <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-3 fs-7 fw-bolder mt-3 mb-5"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                    </div>
                </div>
            </div>
        </div>
      );
    }


  export default Slowdown;