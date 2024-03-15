import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from 'react-router-dom';

import video from '../../images/OpenGL/ironman.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
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
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';



function Utopai() {
    const notify = () => toast.error('캡스톤으로 제작 진행중입니다.', {duration: 4000});
    const notify2 = () => toast.error('제작 진행중인 프로젝트입니다. 깃허브 리포지토리를 아직 제공하지 않습니다.', {duration: 4000});
    useEffect(() => {
        notify();
      }, []);

      return (
        <div>
            <Helmet>
                <title>Utopai - USFREE</title>
            </Helmet>
            <div id="projectmain">
                <div class="bg-white-gray">
                    <div class="container-xxl px-4 pt-6">
                    <div class="font-10 text-black fw-normal fs-7"><Link exact to="/">Home</Link> <FontAwesomeIcon icon={faChevronRight}/> <Link exact to="/project">Project</Link> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/project/utopai">Detail</NavLink></div>
                        <span class="fs-0-5 fw-bold font-10 text-black font-letter-space-sm">UTOP - AI</span>
                        <div class="mb-5">
                            <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                            <a onClick={notify2} target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-3 fs-7 fw-bolder mt-3"><FontAwesomeIcon icon={faGithub} /> Repository</a>
                        </div>
                    </div>
                    <div class="container-xxl my-2 mt-3 px-4">
                        <div class="row gx-5 justify-content-center">
                            <div class="up-animation">
                                <div class="rounded-2 border-0">
                                    <div class="card-body p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="proj_text w-100 text-black fw-light">
                                                <div class="mb-3 w-100 card card-cover-danger p-3 rounded-4 border-0">
                                                    <span class="text-only-white"><FontAwesomeIcon icon={faTriangleExclamation} /> 제작 진행중인 프로젝트입니다 !</span>
                                                </div>
                                                <div class="mb-3 w-100 card card-cover-nonhover p-3 rounded-4 border-0">
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span class="font-3 fw-light fs-6 mb-2 text-black">2024. 02. -</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span class="font-3 fw-light fs-6 mb-2 text-black">UnrealEngine, C++, BluePrint</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span class="font-3 fw-light fs-6 mb-2 text-black">TPS와 RPG를 결합한 게임으로, 3D로 제작되는 게임입니다.</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span class="font-3 fw-light fs-6 mb-2 text-black">1인 개발</span></div>
                                                    <div class="font-3 fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                    <span class="font-3 fw-light fs-6 mb-2 text-black px-2">
                                                    &middot; 오픈월드로 제작하되, 구역을 나누어 할당함. ‘아레테’를 파괴하기 위해 구역 별 인스턴스 던전을 만들어 던전 내에서 파괴.
                                                    <br/>&middot; 광원의 효과적인 표현을 위한 루멘 또는 레이트레이싱 사용
                                                    <br/>&middot; 주인공을 적으로 인식하고 공격하는 AI 몬스터 구현
                                                    </span>
                                                </div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                <div class="mb-4 px-2">졸업 작품을 제작하기 위한 캡스톤디자인을 통해 제작 중인 프로젝트입니다. Unreal Engine을 사용하고 있으며, 천천히 완성도 있는 게임을 만들어 스팀에 출시하기 위해 노력하고 있습니다.</div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                <div class="mb-4 px-2"></div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                <div class="code p-3 rounded-4 border-0 mb-5">
                                                    # Unreal Engine<br/>

                                                </div>
                                                <hr/>
                                                <div class="font-5 fs-2 fw-bold"><b>Story</b></div>
                                                <p class="mb-5">특이점이 온 지구를 배경으로 합니다. 현 지구는 AI(인공지능)의 실효지배를 받고 있으며, 인간은 허용된 행위(놀기, 먹기 등)를 제외한 지식을 쌓는 일체의 행위를 할 수 없습니다. 지식을 갖고 깨어있는 인간은 AI의 적으로 간주됩니다.
                                                    <br/>게임 내 여러 구역이 존재하며, 각 구역별로 AI를 움직일 수 있게 하는 원동력인 <span class="highlight">아레테</span>가 존재합니다. 작 중 주인공은 이 <span class="highlight">아레테</span>를 파괴하여 AI를 막는 역할을 합니다.
                                                    주인공은 깨어있는 지식인을 표방하는 자들의 모인 그룹인 <span class="highlight">이리스</span>에서 행동대원 역할을 하며, 그룹의 조력자는 주인공에게 쿨타임마다 도움을 줄 수 있는 스킬을 제공합니다.</p>
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


  export default Utopai;