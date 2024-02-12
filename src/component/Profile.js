import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCakeCandles, faChartSimple, faCode, faEnvelopeOpenText, faGamepad, faLocationDot, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import profileimg from '../images/logo_sq.png'
import Intro from '../component/Profile/Intro';
import Edu from './Profile/Edu';
import Exp from './Profile/Exp';
import Cert from './Profile/Cert';
import Tech from './Profile/Tech';
import { Helmet } from 'react-helmet';
import { faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-reveal';


class Profile extends Component {
    render() {
      return (
        <div>
        <Helmet>
            <title>프로필 - USFREE</title>
        </Helmet>
        <div id="main">
            <div id="main bg-dark">
                <div class="character-top bg-wh h-auto">
                    <div id="class_back" class="bg-info-back"></div>
                <div class="container-xxl pt-7">
                    <div class="row justify-content-center font-3 pb-2">
                        <div class="row row-cols-2 justify-content-center font-3 mb-5">
                            <div class="col-auto px-5">
                                <div class="character_image"><img src={profileimg}/></div>
                            </div>
                            <div class="col-auto px-5">
                                <div class="mt-2"><div class="btn btn-primary-round-outline pt-0"><span class="fs-7 font-3">USFREE</span></div></div>
                                <div class="mb-0"><span class="fs-2 font-3 fw-bolder text-black">조우현</span></div>
                                <div class="font-3 fs-7 fw-bold text-black">Woohyun Cho</div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-lg-5  justify-content-center font-3 mb-5">
                        <Fade bottom delay={0}><div>
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info">
                                    <div class="p-3">
                                        <span class="font-3 fs-6 text-main mb-5"><FontAwesomeIcon icon={faCakeCandles}/>　<span class="fs-7 fw-light2 text-infopage">1999. 07. 23.</span></span>
                                        
                                    </div>
                                </div>
                        </div></div></Fade>
                        <Fade bottom delay={30}><div>
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info">
                                    <div class="p-3">
                                        <span class="font-3 fs-6 text-main mb-5"><FontAwesomeIcon icon={faLocationDot}/>　<span class="fs-7 fw-light2 text-infopage">Mapo-gu, Seoul</span></span>
                                        
                                    </div>
                                </div>
                        </div></div></Fade>
                        <Fade bottom delay={60}><div>
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info">
                                    <div class="p-3">
                                        <span class="font-3 fs-6 text-main mb-5 no_enter"><FontAwesomeIcon icon={faEnvelopeOpenText}/>　<span class="fs-7 fw-light2 text-infopage"><a href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다.">ploris576@kangnam.ac.kr</a></span></span>
                                        
                                    </div>
                                </div>
                        </div></div></Fade>
                        <Fade bottom delay={90}><div>
                            <div class="col p-2">
                                <div class="border-0 rounded-2 card-blur-info">
                                    <div class="p-3">
                                        <span class="font-3 fs-6 text-main mb-5"><FontAwesomeIcon icon={faChartSimple}/>　<span class="fs-7 fw-light2 text-infopage"><a href="https://solved.ac/profile/tlrmsjtm77">BOJ / tlrmsjtm77</a></span></span>
                                        
                                    </div>
                                </div>
                        </div></div></Fade>
                        </div>
                    </div>

                </div>
            </div> 
                <div class="bg-wh">
                <div class="container-xxl px-4">
                        <div class="row justify-content-center">
                            <div class="mb-5">
                            <Fade bottom delay={0}><div>
                                <div class="row row-cols-sm-2 row-cols-xxl-2 g-4 cards mb-4">
                                    <div class="col-xxl-3">
                                        <div class="card h-100 bg-main-color overflow-hidden border-0 card-hover-up rounded-3 p-4 shadow-sm">
                                            <div class="font-3  p-2">
                                                <div class="text-black fs-3 mb-5">More<br/>And<br/>More<br/><b>CREATIVELY</b></div>
                                                <div class="text-black fs-5 ">게임클라이언트 프로그래머<br/><b>조우현</b>입니다.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-9">
                                        <div class="row row-cols-1">
                                            <div class="col mb-4">
                                                <div class="card h-100 overflow-hidden border-0 card-hover-up-main rounded-3 p-4 shadow-sm">
                                                    <div class="d-flex flex-column pb-3 card-overtext font-3 p-2">
                                                        <div class="text-black">찾아주셔서 감사합니다.
                                                            <br/>모든 일에는 창의력과 상상력 &middot; 디테일이 중요하다고 생각합니다.
                                                            <br/>창의력은 혁신을 그리고, 상상력은 사람을 만들고 조각합니다.
                                                            <br/>창의적이고 상상력을 더한 모든 것에 디테일을 불어넣는 개발자가 되고자 노력하겠습니다.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card h-100 overflow-hidden border-0 card-hover-up-main rounded-3 p-4 shadow-sm">
                                                    <div class="row row-cols-lg-2 p-2">
                                                        <div class="col-auto">
                                                            <div class="fs-4 fw-opacity mb-1">
                                                                Develop
                                                            </div>
                                                            <div class="fw-light2 fs-7 text-black">
                                                                C계열 언어를 주로 사용하고 있습니다. 현재는 C++을 활용한 UnrealEngine을 위주로 학습하고 있으며, 프로젝트를 통해 실전 경험을 향상시키고 있습니다.
                                                            </div>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="fs-4 fw-opacity mb-1">
                                                                Design
                                                            </div>
                                                            <div class="fw-light2 fs-7 text-black">
                                                                아무리 좋은 게임성을 지녀도, UI/UX 등 디자인적인 부분을 무시할 수는 없습니다. 항상 보기 좋은 디자인을 위해 고민하고 연습하고 있습니다.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div></Fade>
                                <div class="row row-cols-1 row-cols-xxl-2 g-4 cards">
                                <Fade bottom delay={100}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up rounded-3 p-4 shadow-sm">
                                            <div class="mb-4 text-black font-3 fs-2 fw-bolder p-2">Education</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto text-black">
                                                    <div class="fs-4 fw-bolder"><a href="https://web.kangnam.ac.kr/" className='fw-opacity'>Kangnam University</a></div>
                                                    <div class="fw-light2 fs-7">Yongin, Gyeonggi-do</div>
                                                    <div class="fw-light2 fs-7 mb-3 highlight">2019. 03. - </div>
                                                    <div class="fw-light2 fs-7">
                                                        소프트웨어전공 / 가상현실 복수전공{/*<br/>major: Software / double major: VirtualReality*/}
                                                    </div>
                                                </div>
                                                <div class="col-auto text-black">
                                                    <div class="fs-4 fw-bolder"><a href="https://hanseong.sen.hs.kr/" className='fw-opacity'>Hanseong Highschool</a></div>
                                                    <div class="fw-light2 fs-7">Seodaemun-gu, Seoul</div>
                                                    <div class="fw-light2 fs-7 mb-3 highlight">2015. 03. - 2018. 02.</div>
                                                    <div class="fw-light2 fs-7">
                                                        이과계열
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></Fade>
                                <Fade bottom delay={150}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up rounded-3 p-4 shadow-sm">
                                            <div class="mb-4 text-black font-3 fs-2 fw-bolder p-2">Experience</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity">42Seoul LaPiscine</div>
                                                    <div class="fw-light2 text-black fs-7">Inovation Academy</div>
                                                    <div class="fw-light2 fs-7 mb-3 highlight">2023. 07. 17. - 08. 11.</div>
                                                    <div class="fw-light2 fs-7">
                                                        <a class="btn btn-sm btn-primary-round px-3 py-1 me-sm-3 fs-6" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>review　<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div></div></Fade>
                                    <Fade bottom delay={200}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up rounded-3 p-4 shadow-sm">
                                            <div class="mb-4 text-black font-3 fs-2 fw-bolder p-2">Certificate</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity">웹디자인기능사</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2022. 09. 08.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity">컴퓨터그래픽스운용기능사</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2021. 05. 07.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity">워드프로세서</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2019. 09. 13.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity">GTQi(Illustrator)</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2014. 03. 14.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity">GTQ(Photoshop)</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2013. 12. 13.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></Fade>
                                    <Fade bottom delay={250}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up rounded-3 p-4 shadow-sm">
                                            <div class="mb-4 text-black font-3 fs-2 fw-bolder p-2">Skills</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity"><FontAwesomeIcon icon={faCode}/> C / C++</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">C와 C++을 사용하여 알고리즘을 해결하고 목표한 클래스를 구현할 수 있습니다.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity"><FontAwesomeIcon icon={faHtml5}/> HTML</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">HTML을 사용할 수 있고, CSS와 JS를 통해 페이지를 구현할 수 있습니다.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity"><FontAwesomeIcon icon={faReact}/> React</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">DOM의 구조를 알고 컴포넌트를 활용하여 SPA방식의 프론트 웹페이지를 제작할 수 있습니다.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity"><FontAwesomeIcon icon={faGamepad}/> UnrealEngine</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">C++을 사용하여 언리얼엔진을 사용할 수 있고, 목표한 컨텐츠를 제작하기 위해 학습중입니다.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-bolder fw-opacity"><FontAwesomeIcon icon={faMicrochip}/> Processing</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">프로세싱의 다양한 라이브러리를 사용할 수 있고, 이를 통해 인터랙티브 컨텐츠를 제작할 수 있습니다.</div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div></div></Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div class="bg-wh">
                    <div class="container-xxl pt-5">
                        <div class="card shadow rounded-2 border-0 bg-white dfdf">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="p-2 proj_text w-100">
                                        <div class="select_btn mb-5">
                                            <div class="row row-cols-3 row-cols-lg-5 justify-content-center font-3"  id="statbtn">
                                                <NavLink to="/profile" className="contentbtn mb-3" end>
                                                <div class="col text-center">
                                                    <div class="mb-2">Intro</div>
                                                </div></NavLink>
                                                <NavLink to="edu" className="contentbtn mb-3" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="mb-2">Education</div>
                                                </div></NavLink>
                                                <NavLink to="exp" className="contentbtn mb-3" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="mb-2">Experience</div>
                                                </div></NavLink>
                                                <NavLink to="cert"  className="contentbtn mb-3" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="mb-2">Certificate</div>
                                                </div></NavLink>
                                                <NavLink to="tech"  className="contentbtn mb-3" id="itembtn">
                                                <div class="col text-center">
                                                    <div class="mb-2">TechStack</div>
                                                </div></NavLink>
                                            </div>
                                        </div>
                                        <div class="stat_ ">
                                        <Routes>
                                            <Route path="" element={<Intro/>}/>
                                            <Route path="edu" element={<Edu/>}/>
                                            <Route path="exp" element={<Exp/>}/>
                                            <Route path="cert" element={<Cert/>}/>
                                            <Route path="tech" element={<Tech/>}/>
                                        </Routes>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    </div>
      );
    }
  }

  export default Profile;