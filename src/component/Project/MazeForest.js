import React, {useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faChevronLeft, faChevronRight, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import video from '../../images/Unity/Orbit/video.mp4'
import pdf from '../../images/OpenGL/OpenGL_Ironman.pdf';
import img1 from '../../images/Unity/MazeForest/logo.png';
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
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';



function MazeForest() {
    const updatedate = "2024. 06. 09." //최종 업데이트 일자
    const notify = () => toast.error('제작 진행중입니다.', {duration: 4000});
    const notify2 = () => toast.error('제작 진행중인 프로젝트입니다. 깃허브 리포지토리를 아직 제공하지 않습니다.', {duration: 4000});
    useEffect(() => {
        notify();
      }, []);

      return (
        <div>
            <Helmet>
                <title>미로의 숲 - USFREE</title>
            </Helmet>
            <div id="projectmain">
                <div className="bg-white-gray">
                    <div className="container-xxl px-4 pt-6" id="seemore">
                    <div className="mb-2 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">미로의 숲</div>
                        <a href="https://github.com/usfree/Unity_MazeForest" target='_blank' className="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a> {/* me-3*/}
                        <div className="row gx-5 justify-content-center">
                            <div className="up-animation">
                                <div className="rounded-2 border-0">
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="proj_text w-100 text-black fw-light">
                                                <div className="mb-3 w-100 card card-cover-danger p-3 border-0 font-11 rounded-4">
                                                    <span className="text-only-white font-11"><FontAwesomeIcon icon={faTriangleExclamation} /> 제작 진행중인 프로젝트입니다 !</span>
                                                </div>
                                                <div className="mb-3 w-100 card card-cover-nonhover p-3  border-0 font-11 rounded-4">
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span className="fw-light fs-6 mb-2 text-black">2024. 06. 05. -</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span className="fw-light fs-6 mb-2 text-black">Unity, C#</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span className="fw-light fs-6 mb-2 text-black">미로의 숲</span></div>
                                                    <div className="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span className="fw-light fs-6 mb-2 text-black">3인 팀개발</span></div>
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
                                                <div className="code p-3 border-0 mb-5 font-11 rounded-4">
                                                    # Unity<br/>

                                                </div>
                                                <hr/>
                                                <div className="font-11 fs-2 fw-bold"><b>Logo</b></div>
                                                <img className="mb-5" src={img1}></img>
                                                <p className="mb-5 font-11">-</p>
                                                
                                                <div className="font-11 fs-2 fw-bold"><b>Developing</b></div>
                                                <div className="font-11 fs-6 fw-bold mb-3">최종 업데이트 : {updatedate}</div>
                                                {/* 
                                                <img className="mb-2 shadow-lg" src={img2}></img>
                                                <p className="mb-5 font-11">- 메인 로고 화면</p>
                                                <img className="mb-2 shadow-lg" src={img3}></img>
                                                <p className="mb-5 font-11">- 게임 모드 선택 화면</p>
                                                <video src={video} controls controlsList="nodownload"></video><br/><br/>*/}
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


  export default MazeForest;