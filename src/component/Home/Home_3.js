/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAt, faBriefcase, faCircleArrowRight, faCircleArrowUp, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import project5 from '../../images/Unity/Orbit/intro.mp4';
import project6 from '../../images/Unity/LethalDeliveryVR/video_short.mp4';

function Home_3() {
    const [text, setText] = useState('UNREAL DEV.');
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFadeIn(false);
        setTimeout(() => {
          setIndex(prevIndex => (prevIndex + 1) % words.length);
          setFadeIn(true); 
        }, 900);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    const words = ['UNREAL CONTENTS', 'UNITY CONTENTS', 'GAME', 'VR CONTENTS'];
  
    useEffect(() => {
        setText(words[index]);
      }, [index]);
    return (
    <div>
        <div className="s-intro pt-3" id='mainS'>
            <div className="s-intro__content row text-black"> 
                <div className="justify-content-center font-11">
                    <div className="container-md px-4 mt-5-main">
                        {/* 메인 카드 섹션 */}
                        <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col col-lg-12 text-black">
                            <div className="font-11 text-start fs-3 mb-5">안녕하세요, <span className="highlight">게임 클라이언트 개발자</span> 조우현입니다. <span className="lowlight">제가 가장 잘하고 좋아하는 방식으로 사람들에게 즐거움을 주고자 합니다. 무엇이 가장 옳고 효율적일지 창의력을 바탕으로 혁신적인 생각을 하기 위해 끊임없이 고민합니다.</span>
                            <div className='fs-4 mt-5'>
                                <div className='mb-4'>조우현 <span className="fs-5">/ Woohyun Cho</span></div>
                                <div className='fs-6 mb-2'><FontAwesomeIcon icon={faAt}/>　 <a href="mailto:ploris576@kangnam.ac.kr?subject=starting.run에서 보내는 메일입니다." target='_blank'>ploris576@kangnam.ac.kr</a></div>
                                <div className='fs-6 mb-2'><FontAwesomeIcon icon={faGraduationCap}/>　<a href="https://web.kangnam.ac.kr/" target='_blank'>강남대학교</a> 소프트웨어 / 가상현실 복수전공</div>
                                <div className='fs-6 mb-5'><FontAwesomeIcon icon={faBriefcase}/>　 <a href="https://www.motioncapture.co.kr/" target='_blank'>모션테크놀로지</a> 인턴</div>
                            </div>
                            <div className="font-11 text-end fs-6 w-100 fw-light text-black">
                                <span className=''><NavLink to='/about'>About　<FontAwesomeIcon icon={faArrowRight}/></NavLink></span>
                                <div className='only-mobile-view'><br/></div><span className='ps-4'><NavLink to='/contact'>Contact　<FontAwesomeIcon icon={faArrowRight}/></NavLink></span>
                            </div>
                            <hr className=''/>
                            </div>
                        </div>
                            <div className="col w-100 mb-4"> {/*col-lg-12*/}
                                <div className="card card-border-0 p-0 rounded-4">
                                    <div className="card-image-sec0">
                                        <iframe src="https://www.youtube.com/embed/MR-p7XxmcoI?autoplay=1&mute=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                    <div className='position-absolute bottom-0 start-0 w-100 px-4 d-flex justify-content-center align-items-center'>
                                        <div className='card w-90 card-in-box rounded-3 px-4 border-0 shadow-md position-relative overflow-hidden'>
                                            <div className='bg-blur position-absolute w-100 h-100 top-0 start-0'></div>
                                            <div className="d-flex justify-content-between align-items-center w-100 position-relative py-2">
                                                <span className="fs-6 text-white fw-bold">2024. 03. - In development</span>
                                                <NavLink to="/project/orbit" className="text-decoration-none">
                                                    <span className="fs-6 text-white d-flex align-items-center fw-normal">
                                                        Detail <FontAwesomeIcon icon={faCircleArrowRight} className='fs-5 text-white ms-2'/>
                                                    </span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="font-11 text-start fs-3 mb-2 mt-1 w-100 fw-bold text-black">AI로부터 무력해진 세상을 구원하라</div>
                            <div className="font-11 text-start fs-5 mb-5 w-100 fw-light text-black">유니티의 HDRenderPipeline을 사용하여 졸업작품으로 제작 중인 <span className="highlight">오르빗</span> 게임입니다. 고도화된 인공지능이 보편화된 사회에서 사회적 합의와 정책이 뒤따르지 않은 절망적인 결과를 표방합니다. 인공지능에 대한 경각심을 일깨우는 것이 하나의 목표입니다.</div>

                            <div className="col w-100 mb-4 mt-5"> {/*col-lg-12*/}
                                <div className="card  card-border-0 p-0 rounded-4">
                                    <video className="card-image-sec1" autoPlay muted loop>
                                        <source src={project6} type="video/mp4" />
                                    </video>
                                    <div className='position-absolute bottom-0 start-0 w-100 px-4 d-flex justify-content-center align-items-center'>
                                        <div className='card w-90 card-in-box rounded-3 px-4 border-0 shadow-md position-relative overflow-hidden'>
                                            <div className='bg-blur position-absolute w-100 h-100 top-0 start-0'></div>
                                            <div className="d-flex justify-content-between align-items-center w-100 position-relative py-2">
                                                <span className="fs-6 text-white fw-bold">2024. 04. 15. - 06. 10.</span>
                                                <NavLink to="/project/lethaldeliveryvr" className="text-decoration-none">
                                                    <span className="fs-6 text-white d-flex align-items-center fw-normal">
                                                        Detail <FontAwesomeIcon icon={faCircleArrowRight} className='fs-5 text-white ms-2'/>
                                                    </span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="font-11 text-start fs-3 mb-2 mt-1 w-100 fw-bold text-black">수집하고 살아남아, 목표를 달성하라</div>
                            <div className="font-11 text-start fs-5 mb-5 w-100 fw-light text-black">화제의 게임인 리썰컴퍼니를 모작으로 제작된 게임인 <span className='highlight'>리썰딜리버리</span> 게임입니다. VR HMD를 착용하고 HMD컨트롤러를 사용하여 상호작용하고 게임을 플레이할 수 있습니다. 일정 기간동안 주어진 목표를 달성하여 오랫동안 살아남는 것이 목표입니다.</div>


                            <div className="font-11 text-end fs-6 mb-5 w-100 fw-light text-black"><NavLink to='/project'>See more project　<FontAwesomeIcon icon={faArrowRight}/></NavLink></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

  export default Home_3;