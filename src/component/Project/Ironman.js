import React, { Component } from 'react';
import video from '../../images/OpenGL/ironman.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';


class Ironman extends Component {
    render() {
      return (
        <div>
<div id="projectmain">
    <div class="container px-4 my-2 mt-10">
        <div class="mb-5">
            <h1 class="display-3 fw-bolder mb-0"><span class="text-gradient d-inline">IRONMAN</span></h1>
            <div class=""><span class="fw-bolder">OpenGL　2021. 06.</span></div>
        </div>
    </div>
    <div class="bg-white">
        <div class="container px-4 my-2 mt-5">
            <div class="mb-5">
            <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                <a href="https://github.com/usfree/OpenGL_Ironman" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mt-3"><i class="fa-brands fa-github"></i> Repository</a>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="">
                    <div class="card shadow rounded-2 border-0">
                        <div class="card-body p-0">
                            <div class="d-flex align-items-center">
                                <div class="p-5 proj_text w-100">
                                    <h3><b>CubeMap</b></h3>
                                    <img class="mb-2" src="images/OpenGL/1.png" width="402pixel" height="252pixel"></img><br/>
                                    <h6>큐브맵을 제작하기 위해 기존에 있던 이미지에서 정육각형 모양대로 어색하지 않게 잘라내어 별도 파일로 삽입하였습니다.<br/><br/>
                                        <img class="mb-2" src="images/OpenGL/2.png"/><br/>GL_CLAMP_TO_EDGE를 통해 경계에 인접한 색상을 통해 큐브맵이 자연스럽게 이어지도록 하였습니다.<br/><br/>
                                        <img class="mb-2" src="images/OpenGL/3.png"/><br/>큐브맵 사용시 라이팅이 영향을 주지 않게 하기위해 GL_DECAL을 사용하지만 사용시 퐁 쉐이딩 상태가 제대로 보이지 않으므로 퐁 쉐이딩 상태에서는 GL_BLEND로 변환되게 하였습니다.<br/><br/>
                                        <img class="mb-2" src="images/OpenGL/4.png"/><br/><br/>
                                    </h6>
                                    <h3><b>WireFrame and Point</b></h3>
                                    <img src="images/OpenGL/5.png"/><br/><br/>
                                    <h3><b>Result</b></h3>
                                    <video src={video} controls controlsList="nodownload"></video><br/><br/>
                                    <h3><b>Presentation</b></h3>
                                    <p><iframe style={{width:"100%", height:"700px"}} src={pdf}></iframe></p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center pb-5">
        <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3 mb-5"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
        </div>
    </div>
</div>
</div>
      );
    }
  }

  export default Ironman;