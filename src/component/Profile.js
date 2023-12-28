import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faChartSimple, faEnvelopeOpenText, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import profileimg from '../images/logo_sq.png'

class Profile extends Component {
    render() {
      return (
        <div>
        <div id="main">
            <div id="main bg-dark">
                <div class="character-top bg-wh h-auto">
                    <div id="class_back" class="bg-info-back"></div>
                <div class="container-xxl pt-7">
                    <div class="row justify-content-center font-3 pt-3 pb-5">
                        <div class="col-auto">
                            <div class="character_image px-3"><img src={profileimg} style={{width:"130px"}}/></div>
                        </div>
                        <div class="col-auto pt-2 mb-5">
                            <div class="mt-2"><div class="btn btn-primary-round-outline pt-0 pb-0"><span class="smallers font-3">USFREE</span></div></div>
                            <div class="mb-2"><span class="fs-2 font-3 fw-bolder">조우현</span></div>
                            <div class="font-3 fs-7 fw-bold">Woohyun Cho</div>
                            <div class="">
        
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-lg-5 justify-content-center font-3 mb-5">
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info m-2">
                                    <div class="p-4">
                                        <span class="font-3 fs-6 text-main mb-5"><FontAwesomeIcon icon={faCakeCandles}/></span>
                                        <div class="mt-3 fs-3 fw-bolder no_enter text-infopage"><span class="union_level"></span></div>
                                        <div class="fs-6 fw-light2 text-infopage no_enter">1999. 07. 23.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info m-2">
                                    <div class="p-4">
                                        <span class="font-3 fs-6 text-main mb-5"><FontAwesomeIcon icon={faEnvelopeOpenText}/></span>
                                        <div class="mt-3 fs-3 fw-bolder text-infopage"><span class="dojang_best_floor"></span></div>
                                        <div class="fs-6 fw-light2 text-infopage"><a href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다.">ploris576@kangnam.ac.kr</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info m-2">
                                    <div class="p-4">
                                        <span class="font-3 fs-6 text-main mb-5"><FontAwesomeIcon icon={faLocationDot}/></span>
                                        <div class="mt-3 fs-3 fw-bolder text-infopage"><span class="theseed_floor"></span></div>
                                        <div class="fs-6 fw-light2 text-infopage">Mapo-gu, Seoul</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info m-2">
                                    <div class="p-4">
                                        <span class="font-3 fs-6 text-main mb-5"><FontAwesomeIcon icon={faChartSimple}/></span>
                                        <div class="mt-3 fs-3 fw-bolder text-infopage"><span class="trophy_score"></span></div>
                                        <div class="fs-6 fw-light2 text-infopage"><a href="https://solved.ac/profile/tlrmsjtm77">BOJ / tlrmsjtm77</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
                <div class="bg-dark">
                    <div class="container-xxl pt-5">
                        <div class="card shadow rounded-2 border-0 bg-white dfdf">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="p-2 proj_text w-100">
                                        <div class="select_btn mb-5">
                                            <div class="row row-cols-5 row-cols-lg-5 justify-content-center font-3 smaller">
                                                <a class="contentbtn activebtn" id="statbtn">
                                                <div class="col text-center">
                                                    <div class="mb-2">Intro</div>
                                                </div></a>
                                                <a class="contentbtn" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="">Education</div>
                                                </div></a>
                                                <a class="contentbtn" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="">Experience</div>
                                                </div></a>
                                                <a class="contentbtn" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="">Certificate</div>
                                                </div></a>
                                                <a class="contentbtn" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="">TechStack</div>
                                                </div></a>
                                            </div>
                                        </div>
                                        <div class="item_  py-5 hidden">
                                            아이템 정보 추가 예정
                                        </div>
                                        <div class="stat_  py-5">
                                            <div class="row row-cols-1 row-cols-lg-2 justify-content-center font-3">
                                                <div class="col-xl-3 mb-2">
                                                    <div class="card h-100 card-border-1">
                                                        <div class="d-flex flex-column h-100 py-4 card-overtext ">
                                                            <span class="font-3 fs-6 text-main mb-2"></span>
                                                            <div class="fs-3 fw-bolder text-infopage mb-5"><span class="stat_value42"></span></div>
                                                            <span class="font-3 fs-6 text-main mb-2"></span>
                                                            <div class="fs-6 fw-bolder text-infopage"><span class="stat_value0"></span> ~ <span class="stat_value1"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col mb-2">
                                                    <div class="card h-100 text-bg-dark text-black card-border-1">
                                                        <div class="d-flex flex-column h-100 py-4 card-overtext">
                                                            <span class="font-3 fs-6 text-main mb-2">준비중</span>
                                                              
                                                             
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
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default Profile;