/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faBars, faCircleInfo, faDownload, faFileArrowDown, faStore, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

import video from '../../images/Unity/Orbit/video.mp4'
import pdf from '../../images/Unity/Orbit/Unity_Orbit.pdf'
import img1 from '../../images/Unity/Orbit/logo.png';
import img2 from '../../images/Unity/Orbit/main1.png';
import img3 from '../../images/Unity/Orbit/main2.png';

import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';



function Orbit() {
    const updatedate = "2024. 10. 31." //최종 업데이트 일자
    const updatedate2 = "2024. 08. 25." //최종 동영상 업데이트 일자
    const notify = () => toast.error('제작 진행중인 프로젝트입니다!', {duration: 4000});
    const notify2 = () => toast('완성도를 높이기 위해 유료 에셋이 포함되어 있습니다. 리포지토리를 열람하고 싶으시다면 별도의 연락을 부탁드립니다.', {duration: 6000});
    const notify3 = () => toast.error('제작이 완료된 후 빌드 파일을 제공할 예정입니다.', {duration: 4000});
    useEffect(() => {
        notify();
      }, []);

      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet>
                <title>Orbit | STARTING</title>
            </Helmet>
            <div id="projectmain">
                <div className="bg-white-gray">
                    <div className="container-full px-4 pt-6" id="seemore">
                        <div className="row gx-5 justify-content-center">
                            <div className="up-animation">
                                <div className="rounded-2 border-0">
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="proj_text w-100 text-black fw-light">
                                                <div className="row row-cols-1 row-cols-lg-2 g-4">
                                                    <div className="col-lg-4">
                                                        <div className="sticky-top pc-view-only">
                                                        <div className="mb-2 fs-1 fw-bold2 font-11 project-title text-black">Orbit</div><span class="fs-7 font-11">　|　오르빗　|　게임</span>
                                                            <div className='mb-5'>
                                                                {/*<a onClick={notify3} target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4 me-3"><FontAwesomeIcon icon={faDownload} /> 빌드 파일</a>*/}
                                                                <a href="https://orbit.starting.run" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4 me-3">홈페이지 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a>
                                                                <div className='only-mobile-view mb-3'></div><a href="https://store.onstove.com/ko/games/3783" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4 me-3"><FontAwesomeIcon icon={faStore} /> STOVE 스토어</a>
                                                                {/*href="https://github.com/starting-run/Unity_Orbit"*/}<a onClick={notify2} target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a> {/* me-3*/}
                                                            </div>
                                                            <div className="mb-3 w-100 card card-cover-nonhover p-3 border-0 font-11 rounded-4">
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6 mb-2 text-black">2024. 03. - 2024. 11.</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6 mb-2 text-black">Unity, C#, DB(MariaDB), Network API(Mirror)</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6 mb-2 text-black">AI 몬스터를 처치하여 구역을 해방하는 목표를 달성하는 싱글플레이 / 플레이어들끼리의 전투를 지원하는 멀티플레이로 구성된 FPS게임</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6 mb-2 text-black">1인 개발</span></div>
                                                                <div className="fw-bold fs-6 highlight px-2">구현 기능</div>
                                                                <span className="fw-light fs-6 mb-2 text-black px-2">
                                                                &middot; 최신 유니티6 활용을 통해 최적화된 게임 환경 제공
                                                                <br/>&middot; 광원의 효과적이고 사실적인 표현을 위해 HDRP / 레이트레이싱(옵션 제공)
                                                                <br/>&middot; AI 몬스터와 구역별 인스턴스 던전의 아레테를 파괴하여 구역을 해방하는 시스템
                                                                <br/>&middot; 게임을 진행하면서 얻을 수 있는 <span class="fw-bold">온전한 칩</span>을 통해 무기를 업그레이드할 수 있는 시스템
                                                                <br/>&middot; 멀티플레이를 통해 다자간 채팅 &middot; 상호작용을 지원하는 시스템
                                                                </span>
                                                            </div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                            <div className="mb-4 px-2 font-11">졸업 작품을 제작하기 위한 캡스톤디자인을 통해 제작된 게임 프로젝트입니다. 최신 Unity6의 엔진을 사용하고 있으며, 완성도와 기술적인 부분을 중점으로 개발된 게임입니다.</div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                            <div className="card card-cover-nonhover p-3 border-0 mb-5 font-11 rounded-4">
                                                                # Unity 6000.0.25f1 LTS<br/>
                                                                Unity_Orbit.sln
                                                            </div>
                                                            <hr className='only-mobile-view'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 project-view-padding">
                                                        <div className="mb-3 w-100 card card-cover-safe p-3 border-0 font-11 rounded-4" >
                                                            <span className="text-only-white font-11"><FontAwesomeIcon icon={faCircleInfo} className='pe-2'/>제작 내역(패치 노트)는 <a href="https://orbit.starting.run/#/patchnote" target='_blank' className='text-only-white'><span class="fw-bold">게임 홈페이지 </span><FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a> 에 기록해두고 있습니다.</span>
                                                        </div>
                                                        <div className="mb-3 w-100 card card-cover-danger p-3 border-0 font-11 rounded-4" >
                                                            <span className="text-only-white font-11"><FontAwesomeIcon icon={faTriangleExclamation} className='pe-2'/>제작 진행중인 프로젝트입니다 ! 모든 정보가 서술되어 있지 않습니다.</span>
                                                        </div>
                                                        <div className="font-11 fs-2 fw-bold"><b>Story</b></div>
                                                        <p className="mb-5 font-11">특이점이 온 지구를 배경으로 합니다. 현 지구는 AI(인공지능)의 실효지배를 받고 있으며, 인간은 허용된 행위(놀기, 먹기 등)를 제외한 지식을 쌓는 일체의 행위를 할 수 없습니다. 지식을 갖고 깨어있는 인간은 AI의 적으로 간주됩니다.
                                                            <br/>게임 내 여러 구역이 존재하며, 각 구역별로 AI를 움직일 수 있게 하는 원동력인 <span className="highlight">아레테</span>가 존재합니다. 작 중 주인공은 이 <span className="highlight">아레테</span>를 파괴하여 AI를 막는 역할을 합니다.
                                                            주인공은 깨어있는 지식인을 표방하는 자들의 모인 그룹인 <span className="highlight">이리스</span>에서 행동대원 역할을 하며, 그룹의 조력자는 주인공에게 쿨타임마다 도움을 줄 수 있는 스킬을 제공합니다.</p>
                                                        <div className="font-11 fs-2 fw-bold"><b>Developing</b></div>
                                                        <div className="font-11 fs-6 fw-normal mb-1">최종 업데이트 : <span class="fw-bold">{updatedate}</span></div>
                                                        <div className="font-11 fs-6 fw-normal mb-3">동영상 최종 업데이트 : <span class="fw-bold">{updatedate2}</span></div>
                                                        <div className='card rounded-4 border-0'>
                                                            <div className="card-image-sec0">
                                                                <iframe src="https://www.youtube.com/embed/tEdw3UA3ATE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                        {/*<img className="mb-2 shadow-lg" src={img2}></img>
                                                        <p className="mb-5 font-11">- 메인 로고 화면</p>
                                                        <img className="mb-2 shadow-lg" src={img3}></img>
                                                        <p className="mb-5 font-11">- 게임 모드 선택 화면</p>*/}
                                                        <div className="font-11 fs-2 fw-bold"><b>Presentation</b></div>
                                                        <div className='card rounded-4 mb-2 border-0'>
                                                            <iframe style={{width:'100%', height:'800px'}} src={pdf}></iframe>
                                                        </div>
                                                        <span className="font-11">브라우저에서 PDF뷰어를 지원하지 않을 경우 <a href={pdf}><div className="btn btn-primary-round-outline px-4 fs-7 rounded-4"><FontAwesomeIcon icon={faFileArrowDown} /> PDF</div></a></span>
                                                        
                                                    </div>
                                                </div>
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
        </motion.div>
      );
    }


  export default Orbit;