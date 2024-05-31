import React from 'react';
import project1 from '../images/snake.jpg';
import project2 from '../images/ironman.jpg';
import project3 from '../images/pacman.jpg';
import project4 from '../images/portfolio.png';
import project5 from '../images/Unity/LethalDeliveryVR/thum.png';
import project6 from '../images/Unity/Orbit/icon_move.mp4';
import prop1 from '../images/projects/prop1/thum.png';
import prop1pdf from '../images/projects/prop1/rev_prop_focus_on_you.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faCircleArrowRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
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
    const notify = () => toast.error('준비중입니다.', {duration: 4000});
      return (
        <div>
            <Helmet><title>프로젝트 - USFREE</title></Helmet>
            <section class="bg-white-gray">
            <div class="container-xxl px-4 pt-6 min-vh-100">
            {/*<div class="font-11 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/project">Project</NavLink></div>*/}
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto fs-1 font-11 fw-bold2 font-letter-space-sm text-black mb-5">프로젝트
                        <a href="https://github.com/stars/usfree/lists/project" target='_blank'>
                            <span class="prj-sub fs-6 fw-light font-4 font-letter-space-sm">　<FontAwesomeIcon icon={faGithub} /> 깃허브에서 모아보기 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg' />
                            </span>
                        </a>
                    </div>
                    <div class="col-auto InputContainer mb-5">
                        <input type="text" name="text" class="input" id="search" onKeyUp={filter} placeholder="프로젝트 검색" autofocus></input>
                        <label for="input" class="labelforsearch">
                            <svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                        </label>
                    </div>
                    <div class="col-auto mobile-moabogi mb-5">
                        <a href="https://github.com/stars/usfree/lists/project" target='_blank'>
                        <span class="fs-6 fw-light font-4"><FontAwesomeIcon icon={faGithub} /> 모아보기</span>
                        </a>
                    </div> 
                </div>
                <div class="vh-100 kor-hidden" id="search_empty">
                    <div class="mb-3 w-100 card card-cover-nonhover p-3  border-0">
                        <div class="fs-0-5 text-center mb-5 pt-5 text-black"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                        <div class="text-black font-3 fs-5 text-center mb-5"><span class="highlight">검색 결과가 없습니다!</span> 다시 검색해주세요.<br/><br/>검색은 한글과 영어를 모두 지원합니다.<br/>ex) UnrealEngine → 언리얼, 언리얼엔진</div>
                    </div>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="mb-5 pb-5">
                        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 cards">
                            <div class="img-fluid"> 
                                <NavLink to="orbit" id="orbit">
                                    <div class="col">
                                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <video class="card-image-main video-filter" autoPlay muted loop>
                                                <source src={project6} type="video/mp4" />
                                            </video>
                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">오르빗 게임</span>
                                                <ul class="list-unstyled mt-auto small2">
                                                    <li class="d-flex align-items-center me-3 mb-5">
                                                        <span class="">2024. 03. - Developing</span>
                                                    </li>
                                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                                        <span class="text-end fs-4 card-in-arrow">
                                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="img-fluid"> 
                                <NavLink to="lethaldeliveryvr" id="lethaldeliveryvr">
                                    <div class="col">
                                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                        <img class="card-image-main" src ={project5}></img>
                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11 no_enter">리썰딜리버리 VR게임</span>
                                                <ul class="list-unstyled mt-auto small2">
                                                    <li class="d-flex align-items-center me-3 mb-5">
                                                        <span class="">2024. 05. - Developing</span>
                                                    </li>
                                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                                        <span class="text-end fs-4 card-in-arrow">
                                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="img-fluid">
                                <NavLink to="website" id="website">
                                    <div class="col">
                                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <img class="card-image-main" src ={project4}></img>
                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">포트폴리오 웹사이트<div class="kor-hidden">portfolio website</div></span>
                                                <ul class="list-unstyled mt-auto small2">
                                                    <li class="d-flex align-items-center me-3 mb-5">
                                                        <span class="">2023. 10. - 2024. 02.</span>
                                                    </li>
                                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                                        <span class="text-end fs-4 card-in-arrow">
                                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="img-fluid">
                                <NavLink to="pacman" id="pacman">
                                    <div class="col">
                                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <img class="card-image-main" src ={project3}></img>
                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">팩맨 게임<div class="kor-hidden">pacman game</div></span>
                                                <ul class="list-unstyled mt-auto small2">
                                                    <li class="d-flex align-items-center me-3 mb-4">
                                                        <span class="">2023. 10.</span>
                                                    </li>
                                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                                        <span class="text-end fs-4 card-in-arrow">
                                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="img-fluid">
                                <NavLink to="ironman" id="ironman">
                                    <div class="col">
                                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <img class="card-image-main" src ={project2}></img>
                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">아이언맨 모델<div class="kor-hidden">ironman model</div></span>
                                                <ul class="list-unstyled mt-auto small2">
                                                    <li class="d-flex align-items-center me-3 mb-4">
                                                        <span class="">2021. 06.</span>
                                                    </li>
                                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                                        <span class="text-end fs-4 card-in-arrow">
                                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div class="img-fluid">
                                <NavLink to="snake" id="snake">
                                    <div class="col">
                                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <img class="card-image-main" src ={project1}></img>
                                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">스네이크 게임<div class="kor-hidden">Snake game</div></span>
                                                <ul class="list-unstyled mt-auto small2">
                                                    <li class="d-flex align-items-center me-3 mb-4">
                                                        <span class="">2020. 06.</span>
                                                    </li>
                                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                                        <span class="text-end fs-4 card-in-arrow">
                                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-fluid mb-4">
                    <a href={prop1pdf}>
                        <div class="col">
                            <div class="card card-cover-main h-100 overflow-hidden text-black card-border-0 rounded-4">
                                <img class="card-image" src ={prop1}></img>
                                <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-2">
                                    <span class="country mb-2 fs-2 lh-1 fw-bold font-11">Smilegate&reg; FOCUS ON YOU<div class="kor-hidden">포커스온유, smilegate</div></span>
                                    <ul class="list-unstyled mt-auto">
                                        <li class="d-flex align-items-center me-3">
                                            <span class="">역기획서</span>
                                        </li>
                                        <li class="d-flex align-items-center">
                                            <span class="text-end fs-4 card-in-arrow">
                                                <FontAwesomeIcon icon={faCircleArrowRight}/>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="img-fluid">
                    <a onClick={notify}>
                        <div class="col">
                            <div class="card card-cover-main h-100 overflow-hidden text-black card-border-0 rounded-4">
                                <img class="card-image" src ={project5}></img>
                                <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-2">
                                    <span class="country mb-2 fs-2 lh-1 fw-bold font-11">LethalDelivery VR<div class="kor-hidden">리썰딜리버리</div></span>
                                    <ul class="list-unstyled mt-auto">
                                        <li class="d-flex align-items-center me-3">
                                            <span class="">기획서</span>
                                        </li>
                                        <li class="d-flex align-items-center">
                                            <span class="text-end fs-4 card-in-arrow">
                                                <FontAwesomeIcon icon={faCircleArrowRight}/>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
      </div>
      
      );
    }


  export default Project;