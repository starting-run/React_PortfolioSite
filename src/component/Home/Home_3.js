import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import project5 from '../../images/Unity/Orbit/intro.mp4';

function Home_3() {
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
        <div className="s-intro pt-3">
            <div className="s-intro__content row text-black"> 
                <div className="justify-content-center font-3">
                    <div className="container-xxl px-3 mt-5-main">
                        {/* 메인 카드 섹션 */}
                        <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col col-lg-2 mb-3 text-black">
                            <div className="font-11 text-start fs-1">만나서<br className="only-pc-view"/><span className="no_enter"> 반갑습니다 !</span>
                            <div className="main__action position-absolute only-pc-view">
                                <HashLink smooth to="#home_project" className="main__scroll">
                                    <div className="main__scroll-box">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"></path>
                                        </svg>
                                    </div>
                                </HashLink>
                            </div>
                            </div>
                        </div>
                            <div className="col col-lg-7 mb-3 ">
                                
                                <div className="intro-background card  card-border-0 p-0 rounded-4">
                                    <video className="card-image-sec1" autoPlay muted loop>
                                        <source src={project5} type="video/mp4" />
                                    </video>
                                    {/*
                                    <div className="text-only-white fs-0 lh-sm font-11 pt-6 ps-3">
                                        <div className="font-letter-space fw-bold2 pt-5 ps-5 pe-4">
                                            {/*<span className={`fade-in-out ${fadeIn ? 'fade-in' : 'fade-out'} rainbow-text`}>{text}</span>
                                            <div className="font-11 fs-0-5 fw-bold text-start mb-6">만나서 반갑습니다 !</div>
                                            <div className="font-11 fs-1 fw-normal text-start mb-2">저는</div>
                                            <div className="font-11 fs-0-5 fw-bold text-start mb-2"><span className={`fade-in-out ${fadeIn ? 'fade-in' : 'fade-out'} rainbow-text`}>{text}</span></div>
                                            <div className="font-11 fs-1 fw-normal text-start mb-6">를 만듭니다.</div>
                                        </div>
                                    </div>
                                    <div className="text-start ps-3">
                                        <div className="h-100 font-11 text-only-white fs-6 font-letter-space text-uppercase mb-5 pb-5 ps-5">
                                            <div className="fw-normal">Woohyun Cho</div>
                                            <div className="fw-bold2 highlight">Developer Portfolio</div>
                                        </div>
                                    </div>*/}
                                    <span className="text-start fs-4 card-in-arrow-left">
                                        <div className="fs-6 mx-2 mb-1-5 text-only-white">2024. 03. - 개발중</div>
                                    </span>
                                    <NavLink to="/project/orbit" className="main__scroll">
                                    <span className="text-end fs-4 card-in-arrow">
                                        <div className="fs-6 px-4 mx-2 mb-1-5 text-only-white">자세히 보기</div>
                                    </span>
                                    <span className="text-end fs-4 card-in-arrow">
                                        <FontAwesomeIcon icon={faCircleArrowRight} className='text-only-white'/>
                                    </span>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col col-lg-3">
                                <div className="row-cols-lg-1">
                                    <div className="col">
                                        <NavLink to='/profile'>
                                            <div className="img-fluid mb-3">
                                                <div className="col">
                                                    <div className="card card-cover-main h-100 overflow-hidden text-black card-border-0 rounded-4">
                                                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                            <span className="mb-2 fs-6 lh-1 fw-normal font-11 text-start mb-6">프로필</span>
                                                            <span className="text-start fw-bold fs-5 mb-3">개발자 <span className="fw-bold2">조우현</span>에 대해 소개합니다.</span>
                                                            <span className="text-end fs-4 card-in-arrow">
                                                                <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className="col">
                                        <NavLink to='/project'>
                                            <div className="img-fluid mb-3">
                                                <div className="col">
                                                    <div className="card card-cover-main h-100 overflow-hidden text-black card-border-0 rounded-4">
                                                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                            <span className="mb-2 fs-6 lh-1 fw-normal font-11 text-start mb-6">프로젝트</span>
                                                            <span className="text-start fw-bold fs-5 mb-3">그동안 진행한 프로젝트와 상세내용을 확인할 수 있습니다.</span>
                                                            <span className="text-end fs-4 card-in-arrow">
                                                                <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className="col">
                                        <a href="https://github.com/usfree" target='_blank'>
                                            <div className="img-fluid mb-3">
                                                <div className="col">
                                                    <div className="card card-cover-main h-100 overflow-hidden text-black card-border-0 rounded-4">
                                                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                            <span className="mb-2 fs-6 lh-1 fw-normal font-11 text-start mb-6">깃허브</span>
                                                            <span className="text-start fw-bold fs-5 mb-3">진행한 프로젝트와 스터디 내용 등 여러가지 리포지토리를 관리합니다.</span>
                                                            <span className="text-end fs-4 card-in-arrow">
                                                                <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://velog.io/@usfree" target='_blank'>
                                            <div className="img-fluid mb-3">
                                                <div className="col">
                                                    <div className="card card-cover-blog h-100 overflow-hidden text-only-white card-border-0 rounded-4">
                                                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                            <span className="fs-6 lh-1 fw-normal font-11 text-start mb-1">블로그</span>
                                                            <span className="text-end fs-4 card-in-arrow">
                                                                <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.acmicpc.net/user/tlrmsjtm77" target='_blank'>
                                            <div className="img-fluid mb-3">
                                                <div className="col">
                                                    <div className="card card-cover-boj h-100 overflow-hidden text-only-white card-border-0 rounded-4">
                                                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                            <span className="fs-6 lh-1 fw-normal font-11 text-start mb-1">백준</span>
                                                            <span className="text-end fs-4 card-in-arrow">
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
    </div>
    );
}

  export default Home_3;