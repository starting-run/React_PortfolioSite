import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faChevronLeft, faChevronRight, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import video from '../../images/Unity/Orbit/video.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import img1 from '../../images/Unity/LethalDeliveryVR/logo.png';
import img2 from '../../images/Unity/Orbit/main1.png';
import img3 from '../../images/Unity/Orbit/main2.png';
import img4 from '../../images/Unity/4.png';
import img5 from '../../images/Unity/5.png';
import img6 from '../../images/Unity/6.png';
import img7 from '../../images/Unity/7.gif';
import img8 from '../../images/Unity/8.png';
import img9 from '../../images/Unity/9.png';
import video1 from '../../images/Unity/Unity_Snake.mp4'
import pdf1 from '../../images/Unity/Unity_Snake.pdf';
import intro from '../../images/Unity/LethalDeliveryVR/thum.png';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';



function LethalDeliveryVR() {
    const updatedate = "2024. 05. 25." //최종 업데이트 일자
    const notify = () => toast.error('제작 진행중입니다.', {duration: 4000});
    const notify2 = () => toast.error('제작 진행중인 프로젝트입니다. 깃허브 리포지토리를 아직 제공하지 않습니다.', {duration: 4000});
    useEffect(() => {
        notify();
      }, []);

      return (
        <div>
            <Helmet>
                <title>리썰딜리버리 VR게임 - USFREE</title>
            </Helmet>
            <div id="projectmain">
                <div class="s-intro-prj">
                <div class="bg-video">
                    <video class="bg-video__content video-filter" autoPlay muted loop>
                        <source src={intro} type="video/mp4" />
                    </video>
                </div>
                <div class="w-100">
                    <div class="scr-down font-7 fw-light2">
                        <div class="main__action text-center">
                            <HashLink smooth to="#seemore" className="main__scroll">
                                <div class="main__scroll-box">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"></path>
                                    </svg>
                                </div>
                                <span class="main__scroll-text font-2 fs-9 font-letter-space">SEE MORE</span>
                            </HashLink>
                        </div>
                    </div>
                </div>
                <div class="s-intro__content row text-black pt-5"> 
                        <div class="justify-content-center font-3">
                            <div class="text-black fs-0-7 lh-sm font-10 mb-5">
                                <div class="font-letter-space fw-bold3">
                                    <span className="font-11 font-letter-space-xlg">리썰딜리버리 VR</span>
                                    <div class="font-11 fs-5 fw-bold pt-4"><span class="highlight">개발중<br/></span>내역 최종 업데이트 {updatedate}</div>
                                </div>
                            </div>
                            <div class="justify-content-center">
                                <div class="h-100 font-11 pt-2 text-black fs-6 font-letter-space text-uppercase">
                                <a href="https://github.com/jsm0325/LethalDelivery_VR" target='_blank' class="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mt-3"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a> {/* me-3*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white-gray">
                    <div class="container-xxl my-2 mt-3 px-4 pt-5" id="seemore">
                            <div class="row gx-5 justify-content-center">
                                <div class="up-animation">
                                    <div class="rounded-2 border-0">
                                        <div class="card-body p-0">
                                            <div class="d-flex align-items-center">
                                                <div class="proj_text w-100 text-black fw-light">
                                                    <div class="mb-3 w-100 card card-cover-danger p-3 border-0 font-11">
                                                        <span class="text-only-white font-11"><FontAwesomeIcon icon={faTriangleExclamation} /> 제작 진행중인 프로젝트입니다 !</span>
                                                    </div>
                                                    <div class="mb-3 w-100 card card-cover-nonhover p-3  border-0 font-11">
                                                        <div class="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span class="fw-light fs-6 mb-2 text-black">2024. 05. -</span></div>
                                                        <div class="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span class="fw-light fs-6 mb-2 text-black">Unity, C#</span></div>
                                                        <div class="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span class="fw-light fs-6 mb-2 text-black">리썰컴퍼니를 모작으로 VR로 제작되는 게임입니다.</span></div>
                                                        <div class="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span class="fw-light fs-6 mb-2 text-black">4인 팀개발</span></div>
                                                        <div class="fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                        <span class="fw-light fs-6 mb-2 text-black px-2">
                                                        &middot; 
                                                        </span>
                                                    </div>
                                                    <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                    <div class="mb-4 px-2 font-11"></div>
                                                    <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                    <div class="mb-4 px-2 font-11"></div>
                                                    <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                    <div class="code p-3 border-0 mb-5 font-11">
                                                        # Unity<br/>

                                                    </div>
                                                    <hr/>
                                                    <div class="font-11 fs-2 fw-bold"><b>Logo</b></div>
                                                    <img class="mb-5" src={img1}></img>
                                                    <p class="mb-5 font-11">-</p>
                                                    
                                                    <div class="font-11 fs-2 fw-bold"><b>Developing</b></div>
                                                    <div class="font-11 fs-6 fw-bold mb-3">최종 업데이트 : {updatedate}</div>
                                                    {/* 
                                                    <img className="mb-2 shadow-lg" src={img2}></img>
                                                    <p class="mb-5 font-11">- 메인 로고 화면</p>
                                                    <img className="mb-2 shadow-lg" src={img3}></img>
                                                    <p class="mb-5 font-11">- 게임 모드 선택 화면</p>
                                                    <video src={video} controls controlsList="nodownload"></video><br/><br/>*/}
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


  export default LethalDeliveryVR;