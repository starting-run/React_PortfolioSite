import React, { Component } from 'react';
import video from '../../images/OpenGL/ironman.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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

class Snake extends Component {
    render() {
      return (
        <div>
            <div id="projectmain">
                <div class="container px-4 my-2 mt-10">
                    <div class="mb-5">
                        <h1 class="display-3 fw-bolder mb-0"><span class="text-gradient d-inline">SNAKE</span></h1>
                        <div class=""><span class="fw-bolder">Unity　</span>2020. 06.</div>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="container px-4 my-2 mt-5">
                        <div class="mb-5">
                        <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                            <a href="https://github.com/usfree/Unity_Snake" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faGithub} /> Repository</a>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="">
                                <div class="card shadow rounded-2 border-0">
                                    <div class="card-body p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="p-5 proj_text w-100">
                                                <h3><b>Normal Map</b></h3>
                                                <img class="mb-2" src={img1}/><br/>
                                                <p class="mb-5">맵 제작에서 Normal Map을 이용하여 입체감 구현</p>
                                                <h3><b>Implement</b></h3>
                                                    <img class="mb-2" src={img2}/><p>머리의 움직임 GetAxis("Horizontal") A, D, ←, →<br/>꼬리의 움직임은 선형 보간 알고리즘을 사용 Vector3.Lerp()</p>
                                                    <img class="mb-2" src={img3}/><br/>
                                                    <img class="mb-2" src={img4}/><p>꼬리 추가에 Prefab과 List구조가 사용되었고, 머리와의 충돌을 방지하기 위해 첫번째 꼬리의 tag를 제거하였습니다.<br/>또한 세 마디 단위로 색이 변경됩니다.</p>
                                                    <img class="mb-2" src={img5}/><p>코인에 충돌시 coinCnt가 1씩 증가하고 꼬리가 1추가됨과 동시에, 코인이 필드 내 랜덤 위치에 재생성됩니다.<br/>벽 또는 자신의 꼬리에 충돌시 사망하고 GAMEOVER UI가 Open됩니다.</p>
                                                <br/>
                                                <h3><b>Animation</b></h3>
                                                <img class="mb-2" src={img6}/><img src={img7}/><br/><h6>Rotation.y 값을 0 ~ 360도 지정하여 코인이 360도 돌아가는 효과 구현. (Samples Frame 30)</h6><br/>
                                                <h3><b>UI</b></h3>
                                                <img class="mb-2" src={img8}/><br/><img src={img9}/><br/><br/>
                                                <h3><b>Result</b></h3>
                                                <video class="mb-5" src={video1} controls controlsList="nodownload"></video><br/><br/>
                                                <h3><b>Presentation</b></h3>
                                                <p><iframe style={{width:"100%", height:"700px"}} src={pdf1}></iframe></p>
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

  export default Snake;