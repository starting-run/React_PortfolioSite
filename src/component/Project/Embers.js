/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faBars, faCircleInfo, faDownload, faFileArrowDown, faMedal, faPenToSquare, faStore, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

import video from '../../images/Unity/Orbit/video.mp4'
import pdf from '../../images/Unity/Orbit/Unity_Orbit.pdf'
import img1 from '../../images/Unity/Embers/DedicatedServer.png';
import img2 from '../../images/Unity/Embers/InGame.png';

import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';



function Embers() {
    const updatedate = "2025. 1. 12." //최종 업데이트 일자
    const updatedate2 = "2099. 99. 99." //최종 동영상 업데이트 일자
    const notify = () => toast.error('제작 초기 단계 프로젝트입니다.', {duration: 4000});
    const notify2 = () => toast('완성도를 높이기 위해 유료 에셋이 포함되어 있습니다. 리포지토리를 열람하고 싶으시다면 별도의 연락을 부탁드립니다.', {duration: 6000});
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
                <title>잉걸불 | STARTING</title>
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
                                                        <div className="mb-2 fs-2 fw-bold2 font-11 project-title text-black">잉걸불</div><span class="fs-7 font-11">　|　embers　|　게임</span>
                                                            <div className='mb-5'>
                                                                {/*<a onClick={notify3} target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold rounded-4 me-3"><FontAwesomeIcon icon={faDownload} /> 빌드 파일</a>*/}
                                                                <a href="https://embers.starting.run" target='_blank' className="btn btn-dark-square px-3 py-2 fs-7 fw-bold rounded-3 me-3">홈페이지 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a>
                                                                {/* <a href="https://store.onstove.com/ko/games/3783" target='_blank' className="btn btn-dark-square px-3 py-2 fs-7 fw-bold rounded-3 me-3"><FontAwesomeIcon icon={faStore} /> STOVE 스토어</a> */}
                                                                {/*href="https://github.com/starting-run/Unity_Orbit"*/}<a onClick={notify2} target='_blank' className="btn btn-dark-square px-3 py-2 fs-7 fw-bold rounded-3"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a> {/* me-3*/}
                                                            </div>
                                                            <div className="mb-3 w-100 card card-cover-nonhover p-3 border-0 font-11 rounded-4">
                                                                <div className="fw-bold fs-6-5 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6-5 mb-2 text-black">2024. 12. 25. - </span></div>
                                                                <div className="fw-bold fs-6-5 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6-5 mb-2 text-black">Unity, C#, DB(MariaDB), Network API(Mirror)</span></div>
                                                                <div className="fw-bold fs-6-5 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6-5 mb-2 text-black">- </span></div>
                                                                <div className="fw-bold fs-6-5 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6-5 mb-2 text-black">1인 개발</span></div>
                                                                <div className="fw-bold fs-6-5 highlight px-2">구현 기능</div>
                                                                <span className="fw-light fs-6-5 mb-2 text-black px-2">
                                                                &middot; 최신 유니티6 사용
                                                                <br/>&middot; 데디케이티드 서버 지원
                                                                <br/>&middot; 
                                                                <br/>&middot; 
                                                                </span>
                                                            </div>
                                                            <div className="text-black font-4 fs-6-5 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                            <div className="mb-4 px-2 font-11 fs-6-5">신규 진행중인 MMORPG 프로젝트입니다. 프로그래밍 패턴과 어셈블리 사용 등 실력 향상을 위해 고도화된 프로젝트로 개발하도록 노력하고 있습니다.</div>
                                                            <div className="text-black font-4 fs-6-5 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                            <div className="card card-cover-nonhover p-3 border-0 mb-5 font-11 rounded-4 fs-6-5">
                                                                # Unity 6000.0.32f1 LTS<br/>
                                                                Unity_Embers.sln
                                                            </div>
                                                            <hr className='only-mobile-view'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 project-view-padding">
                                                        {/* <div className="mb-3 w-100 card card-cover-safe p-3 border-0 font-11 rounded-4" >
                                                            <span className="text-only-white font-11 fs-7"><FontAwesomeIcon icon={faCircleInfo} className='pe-2 align-middle'/>제작 내역(패치 노트)는 <a href="https://embers.starting.run/#/patchnote" target='_blank' className='text-only-white'><span class="fw-bold">게임 홈페이지 </span><FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a> 에 기록되어 있습니다.</span>
                                                        </div> */}
                                                        <div className="font-11 fs-6 fw-normal mb-1">개발 초기단계입니다.</div>
                                                        <div className="font-11 fs-6 fw-normal mb-1">최종 업데이트 : <span class="fw-bold">{updatedate}</span></div>
                                                        <div className='card rounded-4 border-0 mb-5'>
                                                            <div className="card-image-sec0">
                                                                <iframe src="https://www.youtube.com/embed/yuv6oMLr5EA" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* <div className="font-11 fs-6 fw-normal mb-3">동영상 최종 업데이트 : <span class="fw-bold">{updatedate2}</span></div> */}

                                                        <div className="font-11 fs-2 fw-bold"><b>Dedicated Server</b></div>
                                                        <img className="mb-2 shadow-lg" src={img1}></img>
                                                        <p className="mb-5 font-11">별도의 데디케이티드 서버 오픈 프로그램을 통해 서버 오픈이 가능합니다.</p>
                                                        <div className="font-11 fs-2 fw-bold"><b>InGame</b></div>
                                                        <img className="mb-2 shadow-lg" src={img2}></img>
                                                        
                                                        
                                                        {/*<img className="mb-2 shadow-lg" src={img2}></img>
                                                        <p className="mb-5 font-11">- 메인 로고 화면</p>
                                                        <img className="mb-2 shadow-lg" src={img3}></img>
                                                        <p className="mb-5 font-11">- 게임 모드 선택 화면</p>*/}
                                                        {/* <div className="font-11 fs-2 fw-bold"><b>Presentation</b></div>
                                                        <div className='card rounded-4 mb-2 border-0'>
                                                            {/* <iframe style={{width:'100%', height:'800px'}} src={pdf}></iframe>
                                                        </div>
                                                        <span className="font-11">브라우저에서 PDF뷰어를 지원하지 않을 경우 <a href={pdf}><div className="btn btn-primary-round-outline px-4 fs-7 rounded-4"><FontAwesomeIcon icon={faFileArrowDown} /> PDF</div></a></span>
                                                         */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="text-end">
                            <Link to='/project' className="btn btn-outline-dark px-3 py-2 fs-7 fw-bold rounded-3 mt-3 mb-5"><FontAwesomeIcon icon={faBars} />　목록으로</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      );
    }


  export default Embers;