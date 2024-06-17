import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faChevronLeft, faChevronRight, faFileContract, faPenToSquare, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import video from '../../images/Unity/LethalDeliveryVR/video.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import img1 from '../../images/Unity/LethalDeliveryVR/logo.png';
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
import intro from '../../images/Unity/LethalDeliveryVR/thum.png';
import prop2pdf from '../../images/projects/prop2/prop_LethalDeliveryVR.pdf';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';



function LethalDeliveryVR() {
    const updatedate = "2024. 06. 09." //최종 업데이트 일자
    const notify = () => toast.loading('제작이 완료되어 프로젝트에 관한 자세한 내용을 작성하고 있습니다.', {duration: 4000});
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
                <title>리썰딜리버리 - USFREE</title>
            </Helmet>
            <div id="projectmain">
                <div className="bg-white-gray">
                    <div className="container-xxl px-4 pt-6" id="seemore">
                    <div className="mb-2 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">리썰딜리버리 <span class="btn btn-sm btn-primary-round-outline">VR게임</span></div>
                        <a href="https://github.com/usfree/Unity_LethalDeliveryVR" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 me-3 rounded-4"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a>
                        <a href={prop2pdf} target='_blank' alt='프로젝트 메인 하단에 업로드 되어있는 기획서로 제작된 게임입니다.' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4"><FontAwesomeIcon icon={faFileContract} /> 기획서</a>
                        <div className="row gx-5 justify-content-center">
                            <div className="up-animation">
                                <div className="rounded-2 border-0">
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="proj_text w-100 text-black fw-light">
                                                <div className="mb-3 w-100 card card-cover-safe p-3 border-0 font-11 rounded-4">
                                                <span className="text-only-white font-11"><FontAwesomeIcon icon={faPenToSquare} /> 제작이 완료되어 프로젝트에 관한 자세한 내용을 작성하고 있습니다.</span>
                                                </div>
                                                <div className="mb-3 w-100 card card-cover-nonhover p-3  border-0 font-11 rounded-4">
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6 mb-2 text-black">2024. 04. 15. - 06. 10.</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6 mb-2 text-black">Unity, C#, SteamVR SDK</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6 mb-2 text-black">리썰컴퍼니를 모작으로 일부 각색하여 VR로 플레이 할 수 있도록 제작된 게임임.</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">개발 목표</div>
                                                    <span className="fw-light fs-6 mb-2 text-black px-2">
                                                        &middot; LBE(Local Based Entertainment)를 이해하고, 이를 기반으로 가상 콘텐츠를 진행할 수 있어야 함.<br/>
                                                        &middot; VR 기기에 대한 이해를 통해 HMD 디바이스를 활용한 콘텐츠를 제작해야 함.<br/>
                                                        &middot; 로컬 세이브 파일 저장을 통해 씬 전환시 씬의 변경사항에 대한 데이터를 저장해야 함.<br/>
                                                        &middot; <span class="text-decoration-line-through">로컬 네트워크 / 서버 구성 및 통신을 활용해 다수의 멀티플레이와 모니터링을 요함.</span> <span class="font-7 highlight"> {'>'} </span> 개발 일정 상 진행되지 못함
                                                    </span>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6 mb-2 text-black">4인 팀 개발</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">담당 파트　<span className="fw-light fs-6 mb-2 text-black">게임 시스템 구현(인벤토리, 게임매니저, 씬 이동 등) / 플레이어 기능 구현 / UI 구성 및 디자인 / 디테일 개선 등</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                    <span className="fw-light fs-6 mb-2 text-black px-2">
                                                    &middot; 
                                                    </span>
                                                </div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                <div className="mb-4 px-2 font-11"></div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                <div className="mb-4 px-2 font-11"></div>
                                                <div className="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                <div className="card card-cover-nonhover p-3 border-0 mb-5 font-11 rounded-4">
                                                    # Unity 2021.3.37f1<br/>
                                                    LethalDelivery_VR.sln   
                                                </div>
                                                <hr/>
                                                <div className="font-11 fs-2 fw-bold"><b>Logo</b></div>
                                                <img className="mb-5" src={img1} style={{width: '300px'}}></img>
                                                <p className="mb-5 font-11">-</p>
                                                
                                                <div className="font-11 fs-2 fw-bold"><b>Developing</b></div>
                                                <div className="font-11 fs-6 fw-bold mb-3">최종 업데이트 : {updatedate}</div>
                                                {/* 
                                                <img className="mb-2 shadow-lg" src={img2}></img>
                                                <p className="mb-5 font-11">- 메인 로고 화면</p>
                                                <img className="mb-2 shadow-lg" src={img3}></img>
                                                <p className="mb-5 font-11">- 게임 모드 선택 화면</p>
                                                <video src={video} controls controlsList="nodownload"></video><br/><br/>*/}
                                                <div className="font-11 fs-2 fw-bold"><b>Result</b></div>
                                                <video className="mb-5" src={video} controls controlsList="nodownload" style={{width: '800px'}}></video>
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


  export default LethalDeliveryVR;