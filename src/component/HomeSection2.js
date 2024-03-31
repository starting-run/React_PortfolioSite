import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faCircleArrowRight, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

function HomeSection2() {

    return (
    <div>
                                <div class="container-xxl px-3 mt-5-main">
                            {/* 메인 카드 섹션 */}
                            <div class="row row-cols-lg-2 row-cols-1">
                                <div class="col col-lg-9 mb-3 ">
                                    <div class="intro-background card rounded-4 card-border-0 p-0">
                                        <div class="text-black fs-0 lh-sm font-11 mb-5 pt-6 ps-3">
                                            <div class="font-letter-space fw-bold2 pt-5 ps-5">
                                                {/*<span className={`fade-in-out ${fadeIn ? 'fade-in' : 'fade-out'} rainbow-text`}>{text}</span>*/}
                                                <div class="font-11 fs-0-5 fw-bold text-start mb-5">만나서 반갑습니다 !</div>
                                                <div class="font-11 fs-1 fw-normal text-start mb-2">저는</div>
                                                <div class="font-11 fs-0-5 fw-bold text-start mb-2"></div>
                                                <div class="font-11 fs-1 fw-normal text-start">를 만듭니다.</div>
                                            </div>
                                        </div>
                                        <div class="text-start ps-3">
                                            <div class="h-100 font-11 pt-2 text-black fs-5 font-letter-space text-uppercase mb-5 pb-5 ps-5">
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
                                                                <span class="text-start fw-bold fs-5 mb-3">개발자 <span class="fw-bold2">조우현</span>에 대해 소개합니다.</span>
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
    );
}

  export default HomeSection2;