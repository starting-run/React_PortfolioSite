/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { faAt, faChartBar, faCircleArrowUp, faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function About() {
    const notify = () => toast.success('메일 주소가 복사 되었습니다. 원하는 곳에 붙여넣을 수 있습니다.', {duration: 4000});
    useEffect(() => {
        //notify();
      }, []);

    const copyText = () => {
        const textToCopy = "ploris576@kangnam.ac.kr";
        navigator.clipboard.writeText(textToCopy).then(() => {
            notify();
        }).catch(err => {
          console.error("텍스트 복사 실패:", err);
        });
    };
      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet><title>About | STARTING</title></Helmet>
            <section className="bg-white-gray h-100">
                <div className="container-xxl px-4 pt-6">
                    <div className="row justify-content-center">
                        <div className="mb-5 pt-5">
                        {/*<div className="font-11 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/profile">Profile</NavLink></div>*/}
                            <div className="fs-0-7 font-2 fw-normal font-letter-space-lg text-black text-uppercase">ABOUT</div>
                            <div className="mb-5 fs-1 font-11 fw-normal font-letter-space-sm text-black text-uppercase">프로필</div>
                            {/*<div className="text-start">
                                <div className="h-100 font-11 text-black fs-6 font-letter-space text-uppercase mb-5 pb-5">
                                    <div className="fw-normal">Woohyun Cho</div>
                                    <div className="fw-bold2 highlight">Developer Portfolio</div>
                                </div>
                            </div>*/}
                            <div className='container-md'>
                                <div className="row row-cols-1 row-cols-xxl-1 g-4">
                                    <div className="col">
                                        <div className="h-100 overflow-hidden">
                                            <div className='text-center align-middle'><div className='font-2 fs-2 fw-bolder'>CHO WOOHYUN</div><div className='font-11 fs-6 align-middle ps-2'>조우현</div></div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="h-100 overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Education</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-lg-2 row-cols-xxl-2 p-2 rounded-4 mx-2">
                                                <div className="col-auto text-black mb-2 font-11 p-4 py-2">
                                                    <div className="fs-4 fw-bold"><a href="https://web.kangnam.ac.kr/" className='fw-opacity' target='_blank'>강남대학교</a></div>
                                                    <div className="fw-light2 fs-6">경기도 용인시</div>
                                                    <div className="fw-light2 fs-6 mb-3 highlight">2019. 03. - 2025. 02.</div>
                                                    <div className="fw-light2 fs-6 mb-3">
                                                        소프트웨어<span className="fw-normal"> 전공</span><br/>가상현실<span className="fw-normal"> 복수전공</span>
                                                    </div>
                                                </div>
                                                <div className="col-auto text-black mb-2 font-11 p-4 py-2">
                                                    <div className="fs-4 fw-bold"><a href="https://hanseong.sen.hs.kr/" className='fw-opacity' target='_blank'>한성고등학교</a></div>
                                                    <div className="fw-light2 fs-6">서울시 서대문구</div>
                                                    <div className="fw-light2 fs-6 mb-3 highlight">2015. 03. - 2018. 02.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="h-100 overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Career</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-lg-2 row-cols-xxl-2 p-2 rounded-4 mx-2">
                                                <div className="col-auto text-black mb-2 font-11 p-4 py-2">
                                                    <div className="fs-4 fw-bold"><a href="https://www.motioncapture.co.kr/" className='fw-opacity' target='_blank'>모션테크놀로지</a><span className='align-middle fs-7 fw-opacity fw-normal ps-3'>- 인턴(콘텐츠팀)</span></div>
                                                    <div className="fw-light2 fs-6 mb-3 highlight">2024. 07. 01. - </div>
                                                    <div className="fw-light2 fs-6 mb-3">
                                                        <p className='mb-0 font-letter-space-lsm'>담당 업무</p>
                                                        <p className='mb-0 font-letter-space-lsm'>&middot;　가상현실을 통한 협업 시스템 개발</p>
                                                        <p className='mb-0 font-letter-space-lsm'>&middot;　<a href="https://www.motioncapture.co.kr/moa" target='_blank' className='fw-normal'>모션 캡처 솔루션 MoA</a>와 연동하여 사용되는 시스템</p>
                                                        <p className='mb-0 font-letter-space-lsm'>&middot;　UI/UX, DB, 네트워크 통신, 보이스채팅 담당 개발 (개발 인원 4명)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="h-100 overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Study / Experience</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-lg-2 row-cols-xxl-2 p-2 rounded-4 mx-2">
                                                <div className="col-auto mb-2 font-11 p-4 py-2">
                                                    <div className="fs-4 fw-bold fw-opacity">IPP 첨단산업아카데미</div>
                                                    <div className="fw-light2 text-black fs-6">강남대학교 &middot; 고용노동부 &middot; 한국산업인력공단</div>
                                                    <div className="fw-light2 fs-6 mb-3 highlight">2024. 03. 04. - 2025. 02. 28.</div>
                                                    <div className="fw-light2 fs-6 mb-3 text-black">SW개발_L5 과정</div>
                                                    {/*<div className="fw-light2 fs-7">
                                                        <a className="btn btn-sm btn-primary-round px-3 py-1 me-sm-3 fs-6" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>review　<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                                                    </div>*/}   
                                                </div>
                                                <div className="col-auto mb-2 font-11 p-4 py-2">
                                                    <div className="fs-4 fw-bold fw-opacity">42Seoul LaPiscine</div>
                                                    <div className="fw-light2 text-black fs-6">이노베이션아카데미</div>
                                                    <div className="fw-light2 fs-6 mb-3 highlight">2023. 07. 17. - 08. 11.</div>
                                                    <div className="fw-light2 fs-6">
                                                        <a className="btn btn-sm btn-dark-square px-4 py-2 me-sm-3 fs-6 fw-bold rounded-4" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>돌아보기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="h-100 overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Tech Skill</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-lg-2 p-2 font-11 rounded-4 mx-2">
                                                <div className="col-auto mb-4 p-4 py-2">
                                                    <div className="fs-6 fw-bold fw-opacity mb-2"><span className='p-1 highlight me-1'><FontAwesomeIcon icon={faAngleRight}/>_</span> C / C# / C++</div>
                                                    <div className="fw-light2 fs-6 mb-2 text-black">C와 C#, C++을 사용하여 알고리즘을 작성하고 객체지향 언어의 경우, 목표한 기능을 클래스를 사용하여 구현할 수 있으며, 주어진 PS문제를 해결할 수 있습니다. 제가 생각하는 저의 언어별 숙련도는 다음과 같습니다.</div>
                                                    <div className='fw-light2 text-black'>
                                                        <span className='d-flex align-items-center justify-content-center fs-7'><span className='w-fix-40'>C</span><progress id="progress" value="75" min="0" max="100" className='mt-1 w-50'></progress><span className='ps-2 fs-7'>75%</span></span>
                                                        <span className='d-flex align-items-center justify-content-center fs-7'><span className='w-fix-40'>C#</span><progress id="progress" value="90" min="0" max="100" className='mt-1 w-50'></progress><span className='ps-2 fs-7'>90%</span></span>
                                                        <span className='d-flex align-items-center justify-content-center fs-7'><span className='w-fix-40'>C++</span><progress id="progress" value="50" min="0" max="100" className='mt-1 w-50'></progress><span className='ps-2 fs-7'>50%</span></span>
                                                    </div>
                                                </div>
                                                <div className="col-auto mb-4 p-4 py-2">
                                                    <div className="fs-6 fw-bold fw-opacity mb-2"><span className='p-1 highlight me-1'><FontAwesomeIcon icon={faAngleRight}/>_</span> Unity</div>
                                                    <div className="fw-light2 fs-6 mb-2 text-black">유니티를 사용해 2D/3D 컨텐츠를 제작할 수 있으며, UGUI, UI Toolkit을 활용하여 UI를 제작하는 등 게임 제작에 필요한 기능을 활용할 수 있습니다.
                                                        유니티를 사용해 대학교 졸업작품으로, 3D 게임인 Orbit을 제작했습니다.
                                                        이 프로젝트에 대해서는 <Link to="/project/orbit" className="btn btn-sm btn-dark-square fs-7 fw-bold2 rounded-3 py-0">여기</Link> 에서 확인하실 수 있습니다.
                                                    </div>
                                                </div>
                                                {/* <div className="col-auto mb-2 p-4 py-2">
                                                    <div className="fs-6 fw-bold fw-opacity mb-2"><span className='p-1 highlight me-1'><FontAwesomeIcon icon={faAngleRight}/>_</span> Unreal Engine5</div>
                                                    <div className="fw-light2 fs-6 mb-2 text-black">C++을 사용하여 언리얼엔진을 활용할 수 있고, 언리얼엔진을 통해 고품질의 게임을 만들기 위해 학습 중입니다.</div>
                                                </div> */}
                                                <div className="col-auto mb-4 p-4 py-2">
                                                    <div className="fs-6 fw-bold fw-opacity mb-2"><span className='p-1 highlight me-1'><FontAwesomeIcon icon={faAngleRight}/>_</span> DataBase</div>
                                                    <div className="fw-light2 fs-6 mb-2 text-black">SQL 프로그래밍을 할 수 있고, DB를 사용하기 위한 MySQL, MariaDB, Oracle 등의 DBMS를 활용할 수 있습니다. 유니티와 MariaDB의 연동을 통한 개발 경험이 있습니다.</div>
                                                </div>
                                                <div className="col-auto mb-4 p-4 py-2">
                                                    <div className="fs-6 fw-bold fw-opacity mb-2"><span className='p-1 highlight me-1'><FontAwesomeIcon icon={faAngleRight}/>_</span> HTML5 / CSS / JavaScript</div>
                                                    <div className="fw-light2 fs-6 mb-2 text-black">HTML, CSS와 JavaScript를 통해 원하는 기능을 수행하는 웹페이지를 구현할 수 있습니다.</div>
                                                </div>
                                                <div className="col-auto mb-4 p-4 py-2">
                                                    <div className="fs-6 fw-bold fw-opacity mb-2"><span className='p-1 highlight me-1'><FontAwesomeIcon icon={faAngleRight}/>_</span> React</div>
                                                    <div className="fw-light2 fs-6 mb-2 text-black">DOM의 구조를 알고 컴포넌트를 활용하여 SPA방식의 프론트 웹페이지를 제작할 수 있습니다. 본 포트폴리오 사이트가 리액트로 제작되었습니다.</div>
                                                </div>
                                                <div className="col-auto mb-4 p-4 py-2">
                                                    <div className="fs-6 fw-bold fw-opacity mb-2"><span className='p-1 highlight me-1'><FontAwesomeIcon icon={faAngleRight}/>_</span> Processing</div>
                                                    <div className="fw-light2 fs-6 mb-2 text-black">프로세싱의 다양한 라이브러리를 사용할 수 있고, 이를 통해 인터랙티브 컨텐츠를 제작할 수 있습니다.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="h-100 overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Certificate</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-lg-2 row-cols-xxl-3 p-2 font-11 rounded-4 mx-2">
                                                <div className="col-auto mb-2 p-4 py-2">
                                                    <div className="fs-4 fw-bold fw-opacity">웹디자인기능사</div>
                                                    <div className="fw-light2 fs-6 mb-2 highlight">2022. 09. 08.</div>
                                                </div>
                                                <div className="col-auto mb-2 p-4 py-2">
                                                    <div className="fs-4 fw-bold fw-opacity">컴퓨터그래픽스운용기능사</div>
                                                    <div className="fw-light2 fs-6 mb-2 highlight">2021. 05. 07.</div>
                                                </div>
                                                <div className="col-auto mb-2 p-4 py-2">
                                                    <div className="fs-4 fw-bold fw-opacity">워드프로세서</div>
                                                    <div className="fw-light2 fs-6 mb-2 highlight">2019. 09. 13.</div>
                                                </div>
                                                <div className="col-auto mb-2 p-4 py-2">
                                                    <div className="fs-4 fw-bold fw-opacity">GTQi(Illustrator)</div>
                                                    <div className="fw-light2 fs-6 mb-2 highlight">2014. 03. 14.</div>
                                                </div>
                                                <div className="col-auto mb-2 p-4 py-2">
                                                    <div className="fs-4 fw-bold fw-opacity">GTQ(Photoshop)</div>
                                                    <div className="fw-light2 fs-6 mb-2 highlight">2013. 12. 13.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Contact</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-1 row-cols-xxl-2 p-2 rounded-4 mx-2">
                                                <div className="col">
                                                    <a onClick={copyText} target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-mail h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faAt}/>　메일</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 only-pc-view align-middle">ploris576@kangnam.ac.kr　</span>
                                                                            <FontAwesomeIcon icon={faCopy}/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://instagram.com/w99hyun" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-insta h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faInstagram}/>　인스타그램</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">w99hyun　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Link</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-1 row-cols-xxl-2 p-2 rounded-4 mx-2">
                                                <div className="col">
                                                    <a href="https://github.com/starting-run" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-git h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faGithub}/>　깃허브</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">starting-run　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://velog.io/@usfree" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-blog h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faVimeo}/>　블로그</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">usfree　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://www.acmicpc.net/user/tlrmsjtm77" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-boj h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faCode}/>　백준</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">tlrmsjtm77　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://codeforces.com/profile/tlrmsjtm77" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-codeforces h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faChartBar}/>　Codeforces</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">tlrmsjtm77　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
      );
    }

  export default About;