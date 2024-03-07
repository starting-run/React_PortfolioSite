import React, { Component, useEffect } from 'react';
import project1 from '../images/snake.jpg';
import project2 from '../images/ironman.jpg';
import project3 from '../images/pacman.jpg';
import project4 from '../images/portfolio.png';
import project5 from '../images/loading.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronRight, faLayerGroup, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import toast, { Toaster } from 'react-hot-toast';
import $ from 'jquery';

let city, country;

function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("img-fluid");
    var empty = 0;
    if (window.event.keyCode == 13) {
        for (let i = 0; i < listInner.length; i++) {
            city = listInner[i].getElementsByClassName("city");
            country = listInner[i].getElementsByClassName("country");
            if (city[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
                country[0].innerHTML.toLowerCase().indexOf(search) != -1
            ) {
                listInner[i].style.display = ""
                empty++;
            } else {
                listInner[i].style.display = "none"
            }

            if (empty == 0) {
                $('#search_empty').removeClass('kor-hidden');
            }
            else {
                $("#search_empty").addClass('kor-hidden');
            }
        }
    }
    
  }  

function Project() {
    const notify = () => toast.error('캡스톤으로 제작 진행중인 프로젝트입니다.', {duration: 4000});
      return (
        <div>
            <Helmet><title>Project - USFREE</title></Helmet>
            <section class="bg-white-gray">
            <div class="container-xxl px-4 pt-6">
            <div class="font-10 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/project">Project</NavLink></div>
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto fs-0-5 font-10 fw-bolder font-letter-space-sm text-black mb-5">PROJECT
                        <a href="https://github.com/stars/usfree/lists/project" target='_blank'>
                            <span class="prj-sub fs-6 fw-light font-4 font-letter-space-sm">　<FontAwesomeIcon icon={faGithub} /> Collect on Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </span>
                        </a>
                    </div>
                    <div class="col-auto InputContainer mb-5">
                        <input type="text" name="text" class="input" id="search" onKeyUp={filter} placeholder="Search Project" autofocus></input>
                        <label for="input" class="labelforsearch">
                            <svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                        </label>
                    </div>
                    <div class="col-auto mobile-moabogi mb-5">
                        <a href="https://github.com/stars/usfree/lists/project" target='_blank'>
                        <span class="fs-6 fw-light font-4"><FontAwesomeIcon icon={faGithub} /> Collect</span>
                        </a>
                    </div> 
                </div>
                <div class="vh-100 kor-hidden" id="search_empty">
                    <div class="mb-3 w-100 card card-cover-nonhover p-3 rounded-4 border-0">
                        <div class="fs-0-5 text-center mb-5 pt-5 text-black"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                        <div class="text-black font-3 fs-5 text-center mb-5"><span class="highlight">검색 결과가 없습니다!</span> 다시 검색해주세요.<br/><br/>검색은 한글과 영어를 모두 지원합니다.<br/>ex) UnrealEngine → 언리얼, 언리얼엔진</div>
                    </div>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="mb-5 pb-5">
                        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 cards">
                            <div class="img-fluid no_click" onClick={notify}> 
                                {/*<NavLink to="slowdown" id="slowdown">*/}
                                <Fade bottom delay={0}> 
                                    <div class="col">
                                        <div class="card card-cover-main h-100 overflow-hidden text-black card-border-0  rounded-4">
                                            {/*<img class="card-image" src = {project5}></img>*/}
                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                <span class="country mb-2 fs-2 lh-1 fw-bold font-3">SlowDown<div class="kor-hidden">슬로우다운</div></span>
                                                <ul class="list-unstyled mt-auto small2">
                                                    <li class="d-flex align-items-center me-3 mb-4">
                                                        <span class="">2024. 02. - Developing</span>
                                                    </li>
                                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-4">
                                                        <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">UnrealEngine</div>　
                                                        <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C++</div>　
                                                        <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Blueprint</div>　
                                                        <span class="kor-hidden">언리얼엔진, 씨쁠쁠, 블루프린트</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                {/*</NavLink>*/}
                            </div>
                            <div class="img-fluid">
                                <NavLink to="website" id="website">
                                    <Fade bottom delay={50}>
                                        <div class="col">
                                            <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0  rounded-4">
                                                <img class="card-image" src ={project4}></img>
                                                <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                    <span class="country mb-2 fs-2 lh-1 fw-bold font-3">Portfolio Website<div class="kor-hidden">포트폴리오</div></span>
                                                    <ul class="list-unstyled mt-auto small2">
                                                        <li class="d-flex align-items-center me-3 mb-4">
                                                            <span class="">2023. 10. - 2024. 02.</span>
                                                        </li>
                                                        <li class="d-flex align-items-center mt-5 city pt-7 pb-4">
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">React</div>　
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">HTML</div>　
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">CSS</div>　
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">JavaScript</div>　
                                                            <span class="kor-hidden">리액트, 에이치티엠엘, 씨에스에스, 자바스크립트</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </NavLink>
                            </div>
                            <div class="img-fluid">
                                <NavLink to="pacman" id="pacman">
                                    <Fade bottom delay={100}>
                                        <div class="col">
                                            <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0  rounded-4">
                                                <img class="card-image" src ={project3}></img>
                                                <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                    <span class="country mb-2 fs-2 lh-1 fw-bold font-3">Pacman<div class="kor-hidden">팩맨</div></span>
                                                    <ul class="list-unstyled mt-auto small2">
                                                        <li class="d-flex align-items-center me-3 mb-4">
                                                            <span class="">2023. 10.</span>
                                                        </li>
                                                        <li class="d-flex align-items-center mt-5 city pt-7 pb-4">
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Processing</div>　
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Java</div>　
                                                            <span class="kor-hidden">프로세싱, 자바</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </NavLink>
                            </div>
                            <div class="img-fluid">
                                <NavLink to="ironman" id="ironman">
                                    <Fade bottom delay={150}>
                                        <div class="col">
                                            <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0  rounded-4">
                                                <img class="card-image" src ={project2}></img>
                                                <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                    <span class="country mb-2 fs-2 lh-1 fw-bold font-3">Ironman<div class="kor-hidden">아이언맨</div></span>
                                                    <ul class="list-unstyled mt-auto small2">
                                                        <li class="d-flex align-items-center me-3 mb-4">
                                                            <span class="">2021. 06.</span>
                                                        </li>
                                                        <li class="d-flex align-items-center mt-5 city pt-7 pb-4">
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">OpenGL</div>　
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C</div>　
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C++</div>　
                                                            <span class="kor-hidden">오픈지엘, 씨, 씨쁠쁠</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </NavLink>
                            </div>
                            <div class="img-fluid">
                                <NavLink to="snake" id="ironman">
                                    <Fade bottom delay={200}>
                                        <div class="col">
                                            <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0  rounded-4">
                                                <img class="card-image" src ={project1}></img>
                                                <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                    <span class="country mb-2 fs-2 lh-1 fw-bold font-3">Snake<div class="kor-hidden">스네이크</div></span>
                                                    <ul class="list-unstyled mt-auto small2">
                                                        <li class="d-flex align-items-center me-3 mb-4">
                                                            <span class="">2020. 06.</span>
                                                        </li>
                                                        <li class="d-flex align-items-center mt-5 city pt-7 pb-4">
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Unity</div>　
                                                            <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C#</div>　
                                                            <span class="kor-hidden">유니티, 씨샵, 씨샾</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
      
      );
    }


  export default Project;