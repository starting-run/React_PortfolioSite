/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faChevronLeft, faDownload, faStore, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

import video from '../../images/Unity/Orbit/video.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import img1 from '../../images/Unity/Orbit/logo.png';
import img2 from '../../images/Unity/Orbit/main1.png';
import img3 from '../../images/Unity/Orbit/main2.png';
import img4 from '../../images/Unity/4.png';
import img5 from '../../images/Unity/5.png';
import img6 from '../../images/Unity/6.png';
import img7 from '../../images/Unity/7.gif';
import img8 from '../../images/Unity/8.png';
import img9 from '../../images/Unity/9.png';
import video1 from '../../images/Unity/Unity_Snake.mp4'
import pdf1 from '../../images/Unity/Unity_Snake.pdf';
import intro from '../../images/Unity/Orbit/intro.mp4';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';



function Orbit() {
    const updatedate = "2024. 07. 22." //최종 업데이트 일자
    const notify = () => toast.error('제작 진행중인 프로젝트입니다!', {duration: 4000});
    const notify2 = () => toast('완성도를 높이기 위해 유료 에셋이 포함되어 있습니다. 리포지토리를 열람하고 싶으시다면 별도의 연락을 부탁드립니다.', {duration: 6000});
    const notify3 = () => toast.error('제작이 완료된 후 빌드 파일을 제공할 예정입니다.', {duration: 4000});
    useEffect(() => {
        //notify();
      }, []);

      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet>
                <title>오르빗 - STARTING</title>
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
                                                    <div class="col-lg-4">
                                                        <div class="sticky-top pc-view-only">
                                                        <div className="mb-2 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">오르빗 <span class="btn btn-sm btn-primary-round-outline rounded-4">게임</span></div>
                                                            <div className='mb-5'>
                                                                {/*href="https://github.com/starting-run/Unity_Orbit"*/}<a onClick={notify2} target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4 me-3"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a> {/* me-3*/}
                                                                <a onClick={notify3} target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4 me-3"><FontAwesomeIcon icon={faDownload} /> 빌드 파일</a>
                                                                <div className='only-mobile-view mb-3'></div><a href="https://store.onstove.com/ko/games/3783" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4 "><FontAwesomeIcon icon={faStore} /> STOVE 스토어</a>
                                                            </div>
                                                            <div className="mb-3 w-100 card card-cover-danger p-3 border-0 font-11 rounded-4" >
                                                                <span className="text-only-white font-11"><FontAwesomeIcon icon={faTriangleExclamation} /> 제작 진행중인 프로젝트입니다 !</span>
                                                            </div>
                                                            <div className="mb-3 w-100 card card-cover-nonhover p-3  border-0 font-11 rounded-4">
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6 mb-2 text-black">2024. 03. -</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6 mb-2 text-black">Unity, C#</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6 mb-2 text-black">FPS장르의 3D 게임으로, AI에게 지배당한 세계를 해방시키는 것이 목표인 게임임.</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6 mb-2 text-black">1인 개발</span></div>
                                                                <div className="fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                                <span className="fw-light fs-6 mb-2 text-black px-2">
                                                                &middot; 오픈월드로 제작하되, 구역을 나누어 할당함. ‘아레테’를 파괴하기 위해 구역 별 인스턴스 던전을 만들어 던전 내에서 파괴.
                                                                <br/>&middot; 광원의 효과적이고 사실적인 표현을 위해 유니티 HDRP / 레이트레이싱(옵션 제공) 사용
                                                                <br/>&middot; 주인공을 적으로 인식하고 공격하는 AI 몬스터 구현
                                                                </span>
                                                            </div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                            <div className="mb-4 px-2 font-11">졸업 작품을 제작하기 위한 캡스톤디자인을 통해 제작 중인 프로젝트입니다. Unity Engine의 HDRP를 사용하고 있으며, 천천히 완성도 있는 게임을 만들기 위해 노력하고 있습니다.</div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                            <div className="mb-4 px-2 font-11"></div>
                                                            <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                            <div className="card card-cover-nonhover p-3 border-0 mb-5 font-11 rounded-4">
                                                                # Unity 2021.3.37f1<br/>
                                                                Unity_Orbit.sln
                                                            </div>
                                                            <hr/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 project-view-padding">
                                                        <div className="font-11 fs-2 fw-bold"><b>Logo</b></div>
                                                        <img className="mb-5" src={img1} style={{width: '300px'}}></img>
                                                        <p className="mb-5 font-11">인간은 AI에게 지배당해 AI가 설계한 궤도를 돌 수 밖에 없음을 의미합니다.</p>
                                                        <div className="font-11 fs-2 fw-bold"><b>Story</b></div>
                                                        <p className="mb-5 font-11">특이점이 온 지구를 배경으로 합니다. 현 지구는 AI(인공지능)의 실효지배를 받고 있으며, 인간은 허용된 행위(놀기, 먹기 등)를 제외한 지식을 쌓는 일체의 행위를 할 수 없습니다. 지식을 갖고 깨어있는 인간은 AI의 적으로 간주됩니다.
                                                            <br/>게임 내 여러 구역이 존재하며, 각 구역별로 AI를 움직일 수 있게 하는 원동력인 <span className="highlight">아레테</span>가 존재합니다. 작 중 주인공은 이 <span className="highlight">아레테</span>를 파괴하여 AI를 막는 역할을 합니다.
                                                            주인공은 깨어있는 지식인을 표방하는 자들의 모인 그룹인 <span className="highlight">이리스</span>에서 행동대원 역할을 하며, 그룹의 조력자는 주인공에게 쿨타임마다 도움을 줄 수 있는 스킬을 제공합니다.</p>
                                                        <div className="font-11 fs-2 fw-bold"><b>Developing</b></div>
                                                        <div className="font-11 fs-6 fw-bold mb-3">최종 업데이트 : {updatedate}</div>
                                                        <img className="mb-2 shadow-lg" src={img2}></img>
                                                        <p className="mb-5 font-11">- 메인 로고 화면</p>
                                                        <img className="mb-2 shadow-lg" src={img3}></img>
                                                        <p className="mb-5 font-11">- 게임 모드 선택 화면</p>
                                                        {/*<video src={video} controls controlsList="nodownload" style={{width: '800px'}}></video><br/><br/>*/}
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