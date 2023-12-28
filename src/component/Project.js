import React, { Component } from 'react';
import Promotionsection from '../images/projects/snap.jpg';
import project1 from '../images/snake.jpg';
import project2 from '../images/ironman.jpg';
import project3 from '../images/pacman.jpg';
import project4 from '../images/maple.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

class Project extends Component {
    render() {
      return (
        <div>
        <section class="project-2">
      <div class="e-card playing p-0 mb-5">
          <img class="bg-video-prj" src={Promotionsection}></img>
  
              <div class="infotop">
               
          <div class="font-3 text-black">관심 가져주셔서 감사합니다 !<br></br>더 많은 프로젝트를 위해 준비하고 있습니다.</div>
      <br></br>
      <div class="name text-black px-4">아래에서 해당 카드를 누르시면 프로젝트에 관한 자세한 내용을 보실 수 있습니다.</div>
          </div>
      </div>
      <div class="bg-change bg-white bg-img">
      </div>
      <body>
          <div class="container-xxl px-4 mt-0 mb-5">
              
              <div class="row align-items-center justify-content-between mt-3 mb-4">
                  <div class="col-auto fs-3 fw-bold font-3">프로젝트　
                      <a href="https://github.com/usfree?tab=stars" target='_blank'>
                          <span class="prj-sub fs-6 fw-light font-4"><FontAwesomeIcon icon={faGithub} /> 깃허브에서 모아보기 <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </span>
                      </a>
                  </div>
                  <div class="col-auto InputContainer">
                      <input type="text" name="text" class="input" id="search" onkeyup="filter()" placeholder="프로젝트 검색(개발중)" autofocus></input>
                      <label for="input" class="labelforsearch">
                          <svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                      </label>
                  </div>
                  <div class="col-auto mobile-moabogi">
                      <a href="https://github.com/usfree?tab=stars" target='_blank'>
                      <span class="fs-6 fw-light font-4"><i class="fa-brands fa-github"></i> 모아보기</span>
                      </a>
                  </div> 
              </div>
              <div class="row gx-5 justify-content-center">
                  <div class="mb-5">
                      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 cards">
                          <div class="img-fluid">
                              <a id="maple" href="https://usfree.site/labs">
                                  <div class="col">
                                      <div class="card card-cover h-100 overflow-hidden text-bg-dark text-black card-border-1">
                                          <img class="card-image" src ={project4}></img>
                                          <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-3 card-overtext mb-5 mt-3">
                                              <h3 class="mb-2 display-7 lh-1 fw-bold country">Maplestory Search<div class="kor-hidden">메이플</div></h3>
                                              <ul class="d-flex list-unstyled mt-auto small2">
                                              <li class="d-flex align-items-center me-3 city">
                                              <FontAwesomeIcon icon={faLayerGroup} />
                                                  <div class="">　HTML / Nexon API</div>
                                                  <div class="kor-hidden">웹</div>
                                              </li>
                                              <li class="d-flex align-items-center">
                                              <FontAwesomeIcon icon={faCalendar} />
                                                  <div class="">　2023. 12.</div>
                                              </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div>
                          <div class="img-fluid">
                              <NavLink to="pacman" id="pacman">
                                  <div class="col">
                                      <div class="card card-cover h-100 overflow-hidden text-bg-dark text-black card-border-1">
                                          <img class="card-image" src ={project3}></img>
                                          <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-3 card-overtext mb-5 mt-3">
                                              <h3 class="mb-2 display-7 lh-1 fw-bold country">Pacman<div class="kor-hidden">팩맨</div></h3>
                                              <ul class="d-flex list-unstyled mt-auto small2">
                                              <li class="d-flex align-items-center me-3 city">
                                              <FontAwesomeIcon icon={faLayerGroup} />
                                                  <div class="">　Processing</div>
                                                  <div class="kor-hidden">프로세싱</div>
                                              </li>
                                              <li class="d-flex align-items-center">
                                              <FontAwesomeIcon icon={faCalendar} />
                                                  <div class="">　2023. 10.</div>
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
                                      <div class="card card-cover h-100 overflow-hidden text-bg-dark text-black card-border-2">
                                          <img class="card-image" src ={project2}></img>
                                          <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-3 card-overtext mb-5 mt-3">
                                              <h3 class="mb-2 display-7 lh-1 fw-bold country">Ironman<div class="kor-hidden">아이언맨</div></h3>
                                              <ul class="d-flex list-unstyled mt-auto small2">
                                              <li class="d-flex align-items-center me-3 city">
                                              <FontAwesomeIcon icon={faLayerGroup} />
                                                  <div class="">　OpenGL</div>
                                                  <div class="kor-hidden">오픈지엘</div>
                                              </li>
                                              <li class="d-flex align-items-center">
                                              <FontAwesomeIcon icon={faCalendar} />
                                                  <div class="">　2021. 06.</div>
                                              </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </NavLink>
                          </div>
                          <div class="img-fluid">
                            <NavLink to="snake" id="ironman">
                                  <div class="col">
                                      <div class="card card-cover h-100 overflow-hidden text-bg-dark text-black card-border-2">
                                          <img class="card-image" src ={project1}></img>
                                          <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-3 card-overtext mb-5 mt-3">
                                              <h3 class="mb-2 display-7 lh-1 fw-bold country">Snake<div class="kor-hidden">스네이크</div></h3>
                                              <ul class="d-flex list-unstyled mt-auto small2">
                                              <li class="d-flex align-items-center me-3 city">
                                                <FontAwesomeIcon icon={faLayerGroup} />
                                                  <div class="">　Unity</div>
                                                  <div class="kor-hidden">유니티</div>
                                              </li>
                                              <li class="d-flex align-items-center">
                                                <FontAwesomeIcon icon={faCalendar} />
                                                  <div class="">　2020. 06.</div>
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
          </div>
      </body>    
  </section>
        <Routes>
            
      </Routes>
      </div>
      
      );
    }
  }

  export default Project;