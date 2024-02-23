import React, { Component } from 'react';
import video from '../../images/OpenGL/ironman.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

import img1 from '../../images/OpenGL/1.png';
import img2 from '../../images/OpenGL/2.png';
import img3 from '../../images/OpenGL/3.png';
import img4 from '../../images/OpenGL/4.png';
import img5 from '../../images/OpenGL/5.png';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Ironman extends Component {
    render() {
      return (
        <div>
            <Helmet><title>Ironman - Project - USFREE</title></Helmet>
            <div id="projectmain">
                <div class="bg-white-gray">
                <div class="container-full px-4 pt-6">
                    <span class="font-10 text-black fw-normal fs-7"><Link exact to="/">Home</Link> <FontAwesomeIcon icon={faChevronRight}/> <Link exact to="/project">Project</Link> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/project/ironman">Ironman</NavLink></span>
                </div>
                    <div class="container-xxl px-4">
                        <span class="fs-0-5 fw-bold font-10 text-black font-letter-space-sm">IRONMAN 3D MODEL</span>
                        <div class="mb-5">
                            <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                            <a href="https://github.com/usfree/OpenGL_Ironman" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faGithub} /> Repository</a>
                        </div>
                    </div>
                    <div class="container-xxl my-2 mt-3 px-4">
                        <div class="row gx-5 justify-content-center">
                            <div class="up-animation">
                                <div class="rounded-2 border-0">
                                    <div class="card-body p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="p-2 proj_text w-100 text-black fw-light">
                                                <div class="mb-3 w-100 card card-cover-nonhover p-3 rounded-4 border-0">
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span class="font-3 fw-light fs-6 mb-2 text-black">2021. 05. - 06.</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span class="font-3 fw-light fs-6 mb-2 text-black">OpenGL, C, C++</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span class="font-3 fw-light fs-6 mb-2 text-black">OpenGL로 제작된 3D 입체 아이언맨 모형. OpenGL이 지원하는 주요 기능들을 사용할 수 있습니다.</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span class="font-3 fw-light fs-6 mb-2 text-black">1인 개발</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                    <span class="font-3 fw-light fs-6 mb-2 text-black px-2">
                                                        &middot; 큐브맵 구현을 위해 이미지 재단 후 인접한 경계 색상을 자연스럽게 설정
                                                        <br/>&middot; 각 쉐이딩 상태에 따라 모습을 제대로 보일 수 있도록 매크로 처리
                                                        <br/>&middot; 와이어프레임 모드와 점 모드로 모드 변경 가능
                                                    </span>
                                                </div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                <div class="mb-4 px-2">표준 그래픽 API로 사용되는 OpenGL로 제작한 아이언맨의 3D 모델링입니다. OpenGL이 지원하는 그래픽 관련 기능을 사용하여 그래픽API에 대한 폭 넓은 이해를 목표로 제작하였습니다.</div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                <div class="mb-4 px-2">OpenGL을 다뤄보고 싶었고, 그래픽 관련한 API가 어떻게 동작하는지 배우는 것이 목표입니다.</div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                <div class="code p-3 rounded-4 border-0 mb-5">
                                                    # VisualStudio Solution<br/>
                                                    OpenGL.sln
                                                </div>
                                                <hr/>
                                                <div class="font-5 fs-2 fw-bold"><b>Cube Map</b></div>
                                                <img class="mb-2" src={img1} width="402pixel" height="252pixel"></img><br/>
                                                <p class="mb-4">큐브맵을 제작하기 위해 기존에 있던 이미지에서 정육각형 모양대로 어색하지 않게 잘라내어 별도 파일로 삽입하였습니다.</p>
                                                <img class="mb-2" src={img2}/><p class="mb-4">GL_CLAMP_TO_EDGE를 통해 경계에 인접한 색상을 통해 큐브맵이 자연스럽게 이어지도록 하였습니다.</p>
                                                <img class="mb-2" src={img3}/><p class="mb-4">큐브맵 사용시 라이팅이 영향을 주지 않게 하기위해 GL_DECAL을 사용하지만 사용시 퐁 쉐이딩 상태가 제대로 보이지 않으므로 퐁 쉐이딩 상태에서는 GL_BLEND로 변환되게 하였습니다.</p>
                                                <img class="mb-5" src={img4}/>
                                                
                                                <div class="font-5 fs-2 fw-bold"><b>WireFrame and Point</b></div>
                                                <img class="mb-5"src={img5}/>
                                                <div class="font-5 fs-2 fw-bold"><b>Result</b></div>
                                                <video class="mb-5" src={video} controls controlsList="nodownload"></video>
                                                <div class="font-5 fs-2 fw-bold"><b>Presentation</b></div>
                                                <p><iframe style={{width:"100%", height:"700px"}} src={pdf}></iframe></p>
                                                <span>브라우저에서 PDF viewer를 지원하지 않을 경우 <a href="https://usfree.site/static/media/OpenGL_Ironman.54c28fdf5dac7d4a96f2.pdf"><div class="btn btn-primary-round-outline px-4 fs-7"><FontAwesomeIcon icon={faFileArrowDown} /> PDF</div></a></span>
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
  }

  export default Ironman;