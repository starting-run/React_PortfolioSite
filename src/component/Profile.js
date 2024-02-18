import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCakeCandles, faChartSimple, faCode, faEnvelopeOpenText, faGamepad, faLocationDot, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import profileimg from '../images/logo_sq.png'
import { Helmet } from 'react-helmet';
import { faBlogger, faGithub, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-reveal';
import { alignPropType } from 'react-bootstrap/esm/types';


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
                <div class="container-xxl pt-6-5">
                    <div class="row justify-content-center font-3 pb-2">
                        <div class="row row-cols-1 row-cols-xl-2 justify-content-center font-3 mb-3 ">
                            <div class="col col-xl-3">
                                <div class="row row-cols-2 row-cols-xl-2 pt-5">
                                    <div className='col'>
                                        <div class="character_image"><img src={profileimg}/></div>
                                    </div>
                                    <div className='col'>
                                        <div class="btn btn-primary-round-outline py-0 pb-1"><span class="fs-7 font-3">USFREE</span></div>
                                        <div class="mb-0"><span class="fs-2 font-3 fw-bolder text-black">조우현</span></div>
                                        <div class="font-3 fs-7 fw-light2 text-black">Woohyun Cho</div>
                                        <div class="row row-cols-2 row-cols-lg-5  justify-content-center font-2 mb-5"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-xl-3">
                                    <div class="border-0 rounded-1 card-blur-info m-2">
                                        <div class="p-3">
                                            <span class="fs-6 text-main mb-5"><FontAwesomeIcon icon={faBlogger} />　<span class="fs-7 fw-light2 text-infopage"><a href="https://velog.io/@usfree">Blog</a></span></span>
                                        </div>
                                    </div>
                                
                                    <div class="border-0 rounded-1 card-blur-info m-2">
                                        <div class="p-3">
                                            <span class="fs-6 text-main mb-5"><FontAwesomeIcon icon={faGithub}/>　<span class="fs-7 fw-light2 text-infopage"><a href="https://github.com/usfree">Github</a></span></span>
                                        </div>
                                    </div>
                                    <div class="border-0 rounded-1 card-blur-info m-2">
                                        <div class="p-3">
                                            <span class="fs-6 text-main mb-5 no_enter"><FontAwesomeIcon icon={faEnvelopeOpenText}/>　
                                            <span class="fs-7 fw-light2 text-infopage only-pc-view"><a href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다.">ploris576@kangnam.ac.kr</a></span></span>
                                            <span class="fs-7 fw-light2 text-infopage only-mobile-view"><a href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다.">Mail</a></span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                <div class="bg-wh">
                <div class="container-xxl px-4">
                        <div class="row justify-content-center">
                            <div class="mb-5">
                            <Fade bottom delay={0}><div>
                                <div class="row row-cols-sm-1 row-cols-xxl-1 g-4 cards mb-4">
                                    <div class="col">
                                        <div class="card h-100 bg-main-color overflow-hidden border-0 card-hover-up p-3 ">
                                            <div class="font-3 text-center">
                                                <div class="text-black fs-4 mb-1">More And More <b>CREATIVELY</b></div>
                                                <div class="text-black fs-6 font-3">창의적인 개발자 <b>조우현</b>입니다.</div>
                                            </div>
                                        </div>
                                    </div>

                                </div></div></Fade>
                                <div class="row row-cols-1 row-cols-xxl-2 g-4 cards">
                                <Fade bottom delay={100}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up p-4 ">
                                            <div class="mb-4 text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg">EDUCATION</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto text-black mb-3 font-2">
                                                    <div class="fs-5 fw-light2"><a href="https://web.kangnam.ac.kr/" className='fw-opacity'>Kangnam University</a></div>
                                                    <div class="fw-light2 fs-7">Yongin-si, Gyeonggi-do</div>
                                                    <div class="fw-light2 fs-7 mb-3 highlight">2019. 03. - </div>
                                                    <div class="fw-light2 fs-7">
                                                        major: Software /<br/>double major: VirtualReality
                                                    </div>
                                                </div>
                                                <div class="col-auto text-black font-2">
                                                    <div class="fs-5 fw-light2"><a href="https://hanseong.sen.hs.kr/" className='fw-opacity'>Hanseong Highschool</a></div>
                                                    <div class="fw-light2 fs-7">Seodaemun-gu, Seoul</div>
                                                    <div class="fw-light2 fs-7 mb-3 highlight">2015. 03. - 2018. 02.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></Fade>
                                <Fade bottom delay={150}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up p-4 ">
                                            <div class="mb-4 text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg">EXPERIENCE</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto mb-2 font-2">
                                                    <div class="fs-5 fw-light2 fw-opacity">42Seoul LaPiscine</div>
                                                    <div class="fw-light2 text-black fs-7">Innovation Academy</div>
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
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up p-4 ">
                                            <div class="mb-4 text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg">CERTIFICATE</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto mb-2 font-2">
                                                    <div class="fs-5 fw-light2 fw-opacity">웹디자인기능사</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2022. 09. 08.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity">컴퓨터그래픽스운용기능사</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2021. 05. 07.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity">워드프로세서</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2019. 09. 13.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity">GTQi(Illustrator)</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2014. 03. 14.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity">GTQ(Photoshop)</div>
                                                    <div class="fw-light2 fs-7 mb-2 highlight">2013. 12. 13.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></Fade>
                                    <Fade bottom delay={250}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up p-4 ">
                                            <div class="mb-4 text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg">MILITARY SERVICE</div>
                                            <div class="row row-cols-lg-2 p-2">
                                                <div class="col-auto mb-2 font-2">
                                                    <div class="fs-5 fw-light2 fw-opacity">병장 만기전역</div> 
                                                    <div class="fw-light2 text-black fs-7">육군 10방공단 505방공대대</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">2021. 09. - 2023. 03.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></Fade>
                                </div>
                                <div class="row row-cols-sm-1 row-cols-xxl-1 g-4 cards mb-4 pt-4">
                                <Fade bottom delay={300}><div>
                                    <div class="col">
                                        <div class="card h-100 overflow-hidden border-0 card-hover-up p-4 ">
                                            <div class="mb-4 text-black font-4 fs-6 fw-light2 p-2 font-letter-space-lg">SKILL</div>
                                            <div class="font-3 fw-light2 fs-5 highlight-gradient text-black">Language<span class="fs-6"></span></div>
                                            <div class="row row-cols-lg-2 p-2 mb-3 font-2">
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity"><FontAwesomeIcon icon={faCode}/> C / C++</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">C와 C++을 사용하여 알고리즘을 해결하고 목표한 클래스를 구현할 수 있으며, 주어진 PS문제를 해결할 수 있습니다. </div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity"><FontAwesomeIcon icon={faHtml5}/> HTML5 / CSS3 / JavaScript</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">HTML을 사용할 수 있고, CSS와 JavaScript를 통해 웹페이지를 구현할 수 있습니다.</div>
                                                </div>
                                            </div>
                                            <div class="font-3 fw-light2 fs-5 highlight-gradient text-black">Tools<span class="fs-6"></span></div>
                                            <div class="row row-cols-lg-3 p-2 font-2">
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity"><FontAwesomeIcon icon={faGamepad}/> UnrealEngine</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">C++을 사용하여 언리얼엔진을 활용할 수 있고, 목표한 컨텐츠를 제작하기 위해 학습중입니다.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity"><FontAwesomeIcon icon={faReact}/> React</div>
                                                    <div class="fw-light2 fs-8 mb-2 highlight">DOM의 구조를 알고 컴포넌트를 활용하여 SPA방식의 프론트 웹페이지를 제작할 수 있습니다.</div>
                                                </div>
                                                <div class="col-auto mb-2">
                                                    <div class="fs-5 fw-light2 fw-opacity"><FontAwesomeIcon icon={faMicrochip}/> Processing</div>
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