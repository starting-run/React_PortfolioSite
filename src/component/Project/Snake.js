import React, { Component } from 'react';
import video from '../../images/Unity/Unity_Snake.mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faDownload, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import img1 from '../../images/Unity/1.png';
import img2 from '../../images/Unity/2.png';
import img3 from '../../images/Unity/3.png';
import img4 from '../../images/Unity/4.png';
import img5 from '../../images/Unity/5.png';
import img6 from '../../images/Unity/6.png';
import img7 from '../../images/Unity/7.gif';
import img8 from '../../images/Unity/8.png';
import img9 from '../../images/Unity/9.png';
import pdf from '../../images/Unity/Unity_Snake.pdf';
import build from '../../images/Unity/Snake_Build.7z';
import { Helmet } from 'react-helmet';

class Snake extends Component {
    render() {
      return (
        <div>
            <Helmet><title>스네이크 - USFREE</title></Helmet>
            <div id="projectmain">
                <div className="bg-white-gray">
                    <div className="container-xxl px-4 pt-6" id="seemore">
                        <div className="mb-2 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">스네이크 <span class="btn btn-sm btn-primary-round-outline">게임</span></div>
                        <a href="https://github.com/usfree/Unity_Snake" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4 me-3"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a> {/* me-3*/}
                        <a href={build} target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4"><FontAwesomeIcon icon={faDownload} /> 빌드 파일</a>
                        <div className="row gx-5 justify-content-center">
                            <div className="up-animation">
                                <div className="rounded-2 border-0">
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="proj_text w-100 text-black fw-light">
                                                <div className="mb-3 w-100 card card-cover-nonhover p-3  border-0 font-11 rounded-4">
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6 mb-2 text-black">2020. 05. - 06.</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6 mb-2 text-black">Unity, C#</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6 mb-2 text-black">Unity 게임엔진으로 제작된 Snake 게임. 사용자가 객체를 조작하여 코인을 모으면서 자신의 몸이나 벽에 부딪히지 않고, 최대한 많은 점수를 기록하는 게임입니다.</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6 mb-2 text-black">1인 개발</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                    <span className="fw-light fs-6 mb-2 text-black px-2">
                                                        &middot; Normal Map을 사용하여 맵 텍스처의 입체감 구현
                                                        <br/>&middot; 선형보간 알고리즘을 사용해 꼬리의 움직임 구현
                                                        <br/>&middot; 벽에 충돌하거나 머리 객체가 자신의 꼬리 객체에 닿을 경우 사망처리 되며, 게임오버 UI 표출
                                                        <br/>&middot; 랜덤으로 생성되는 코인 객체가 자연스럽게 360도 돌아갈 수 있도록 애니메이션 추가
                                                    </span>
                                                </div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                <div className="mb-4 px-2 font-11">가장 폭넓게 사용되는 Unity 엔진으로 제작된 Snake 게임입니다. 선형보간 알고리즘, 애니메이션 기능 등 Unity 엔진에서 사용할 수 있는 기본적인 기능들을 사용하여 구현한 게임입니다.</div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                <div className="mb-4 px-2 font-11">Unity 엔진은 가상현실, 게임 분야의 개발자라면 UnrealEngine과 더불어 가장 많이 사용되기 때문에 다뤄보는 경험자체가 중요하고 필요하다고 생각했습니다.</div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                <div className="code p-3  border-0 mb-5 font-11 rounded-4">
                                                    # Unity Engine<br/>
                                                    GameProject.sln
                                                </div>
                                                <hr/>
                                                <div className="font-11 fs-2 fw-bold"><b>Normal Map</b></div>
                                                <img className="mb-2" src={img1}/><br/>
                                                <p className="mb-5 font-11">맵 제작에서 Normal Map을 이용하여 입체감 구현</p>
                                                <div className="font-11 fs-2 fw-bold"><b>Implement</b></div>
                                                    <img className="mb-2" src={img2}/><p className="font-11">머리의 움직임 GetAxis("Horizontal") A, D, ←, →<br/>꼬리의 움직임은 선형 보간 알고리즘을 사용 Vector3.Lerp()</p>
                                                    <img className="mb-2" src={img3}/><br/>
                                                    <img className="mb-2" src={img4}/><p className="font-11">꼬리 추가에 Prefab과 List구조가 사용되었고, 머리와의 충돌을 방지하기 위해 첫번째 꼬리의 tag를 제거하였습니다.<br/>또한 세 마디 단위로 색이 변경됩니다.</p>
                                                    <img className="mb-2" src={img5}/><p className="font-11">코인에 충돌시 coinCnt가 1씩 증가하고 꼬리가 1추가됨과 동시에, 코인이 필드 내 랜덤 위치에 재생성됩니다.<br/>벽 또는 자신의 꼬리에 충돌시 사망하고 GAMEOVER UI가 Open됩니다.</p>
                                                <br/>
                                                <div className="font-11 fs-2 fw-bold"><b>Animation</b></div>
                                                <img className="mb-2" src={img6}/><img src={img7}/><br/><p className="font-11">Rotation.y 값을 0 ~ 360도 지정하여 코인이 360도 돌아가는 효과 구현. (Samples Frame 30)</p><br/>
                                                <div className="font-11 fs-2 fw-bold"><b>UI</b></div>
                                                <img className="mb-2" src={img8}/><br/><img src={img9}/><br/><br/>
                                                <div className="font-11 fs-2 fw-bold"><b>Result</b></div>
                                                <video className="mb-5" src={video} controls controlsList="nodownload"></video><br/><br/>
                                                <div className="font-11 fs-2 fw-bold"><b>Presentation</b></div>
                                                <p><iframe style={{width:"100%", height:"900px"}} src={pdf}></iframe></p>
                                                <span className="font-11">브라우저에서 PDF viewer를 지원하지 않을 경우 <a href={pdf}><div className="btn btn-primary-round-outline px-4 fs-7 rounded-4"><FontAwesomeIcon icon={faFileArrowDown} /> PDF</div></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="text-end">
                            <Link to='/project' className="btn btn-outline-dark px-4 py-2-5 fs-6 fw-bolder mt-3 mb-5 rounded-4"><FontAwesomeIcon icon={faBars} />　목록으로</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Snake;