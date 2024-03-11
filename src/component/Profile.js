import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCakeCandles, faChartSimple, faChevronRight, faCode, faEnvelopeOpenText, faGamepad, faLocationDot, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';

class Profile extends Component {
    render() {
      return (
        <div>
            <Helmet><title>Profile - USFREE</title></Helmet>
            <section class="bg-white-gray h-100">
                <div class="container-xxl px-4 pt-6">
                    <div class="row justify-content-center">
                        <div class="mb-5">
                        <div class="font-10 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/profile">Profile</NavLink></div>
                            <div class="mb-5 fs-0-5 font-10 fw-bold font-letter-space-sm text-black text-uppercase">Profile</div>
                            <div class="row row-cols-1 row-cols-xxl-2 g-4 cards">
                            <Fade bottom delay={100}><div>
                                <div class="col">
                                    <div class="card h-100 overflow-hidden border-0 card-hover-up p-4  rounded-4">
                                        <div class="mb-4 text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">EDUCATION</div>
                                        <div class="row row-cols-lg-2 p-2">
                                            <div class="col-auto text-black mb-1 font-3">
                                                <div class="fs-5 fw-normal"><a href="https://web.kangnam.ac.kr/" className='fw-opacity'>Kangnam University</a></div>
                                                <div class="fw-light2 fs-7">Yongin-si, Gyeonggi-do</div>
                                                <div class="fw-light2 fs-7 mb-3 highlight">2019. 03. - </div>
                                                <div class="fw-light2 fs-7 mb-3">
                                                    major: Software /<br/>double major: VirtualReality
                                                </div>
                                            </div>
                                            <div class="col-auto text-black font-3">
                                                <div class="fs-5 fw-normal"><a href="https://hanseong.sen.hs.kr/" className='fw-opacity'>Hanseong Highschool</a></div>
                                                <div class="fw-light2 fs-7">Seodaemun-gu, Seoul</div>
                                                <div class="fw-light2 fs-7 mb-3 highlight">2015. 03. - 2018. 02.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div></Fade>
                            <Fade bottom delay={150}><div>
                                <div class="col">
                                    <div class="card h-100 overflow-hidden border-0 card-hover-up p-4  rounded-4">
                                        <div class="mb-4 text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">EXPERIENCE</div>
                                        <div class="row row-cols-lg-2 p-2">
                                            <div class="col-auto mb-2 font-3">
                                                <div class="fs-5 fw-normal fw-opacity">IPP 첨단산업아카데미</div>
                                                <div class="fw-light2 text-black fs-7">강남대학교 &middot; 고용노동부 &middot; 한국산업인력공단</div>
                                                <div class="fw-light2 fs-7 mb-3 highlight">2024. 03. 04. - </div>
                                                <div class="fw-light2 fs-7 mb-3">SW개발_L5</div>
                                                {/*<div class="fw-light2 fs-7">
                                                    <a class="btn btn-sm btn-primary-round px-3 py-1 me-sm-3 fs-6" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>review　<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                                                </div>*/}   
                                            </div>
                                            <div class="col-auto mb-2 font-3">
                                                <div class="fs-5 fw-normal fw-opacity">42Seoul LaPiscine</div>
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
                                    <div class="card h-100 overflow-hidden border-0 card-hover-up p-4  rounded-4">
                                        <div class="mb-4 text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">CERTIFICATE</div>
                                        <div class="row row-cols-lg-2 p-2 font-3">
                                            <div class="col-auto mb-2">
                                                <div class="fs-5 fw-normal fw-opacity">웹디자인기능사</div>
                                                <div class="fw-light2 fs-7 mb-2 highlight">2022. 09. 08.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-5 fw-normal fw-opacity">컴퓨터그래픽스운용기능사</div>
                                                <div class="fw-light2 fs-7 mb-2 highlight">2021. 05. 07.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-5 fw-normal fw-opacity">워드프로세서</div>
                                                <div class="fw-light2 fs-7 mb-2 highlight">2019. 09. 13.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-5 fw-normal fw-opacity">GTQi(Illustrator)</div>
                                                <div class="fw-light2 fs-7 mb-2 highlight">2014. 03. 14.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-5 fw-normal fw-opacity">GTQ(Photoshop)</div>
                                                <div class="fw-light2 fs-7 mb-2 highlight">2013. 12. 13.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div></Fade>
                                <Fade bottom delay={250}><div>
                                <div class="col">
                                    <div class="card h-100 overflow-hidden border-0 card-hover-up p-4 rounded-4">
                                        <div class="mb-4 text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">MILITARY SERVICE</div>
                                        <div class="row row-cols-lg-2 p-2">
                                            <div class="col-auto mb-2 font-3">
                                                <div class="fs-5 fw-normal fw-opacity">병장 만기전역</div> 
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
                                    <div class="card h-100 overflow-hidden border-0 card-hover-up p-4 rounded-4">
                                        <div class="mb-4 text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SKILL</div>
                                        <div class="row row-cols-lg-3 p-2 font-3">
                                            <div class="col-auto mb-2">
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C</div><span> </span>
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C++</div>
                                                <div class="fw-light2 fs-8 mb-2 text-black">C와 C++을 사용하여 알고리즘을 작성하고 목표한 기능을 클래스를 사용하여 구현할 수 있으며, 주어진 PS문제를 해결할 수 있습니다.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C#</div><span> </span>
                                                <div class="fw-light2 fs-8 mb-2 text-black">C#을 사용하여 Unity를 다룰 수 있고, 학습중입니다.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">UnrealEngine</div>
                                                <div class="fw-light2 fs-8 mb-2 text-black">C++을 사용하여 언리얼엔진을 활용할 수 있고, 목표한 컨텐츠를 제작하기 위해 학습중입니다.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Unity</div>
                                                <div class="fw-light2 fs-8 mb-2 text-black">C#을 사용하여 Unity를 다룰 수 있고, 학습중입니다.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">HTML5</div><span> </span>
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">CSS3</div><span> </span>
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">JavaScript</div>
                                                <div class="fw-light2 fs-8 mb-2 text-black">HTML, CSS와 JavaScript를 통해 주어진 기능을 수행하는 웹페이지를 구현할 수 있습니다.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">React</div>
                                                <div class="fw-light2 fs-8 mb-2 text-black">DOM의 구조를 알고 컴포넌트를 활용하여 SPA방식의 프론트 웹페이지를 제작할 수 있습니다.</div>
                                            </div>
                                            <div class="col-auto mb-2">
                                                <div class="fs-7 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Processing</div>
                                                <div class="fw-light2 fs-8 mb-2 text-black">프로세싱의 다양한 라이브러리를 사용할 수 있고, 이를 통해 인터랙티브 컨텐츠를 제작할 수 있습니다.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div></Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }

  export default Profile;