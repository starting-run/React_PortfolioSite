import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';

class Profile extends Component {
    render() {
      return (
        <div>
            <Helmet><title>Profile - USFREE</title></Helmet>
            <section class="bg-white-gray h-100">
                <div class="container-xxl px-4 pt-6">
                    <div class="row justify-content-center">
                        <div class="mb-5">
                        {/*<div class="font-11 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/profile">Profile</NavLink></div>*/}
                            <div class="mb-5 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">프로필</div>
                            <div class="text-start">
                                <div class="h-100 font-11 text-black fs-6 font-letter-space text-uppercase mb-5 pb-5">
                                    <div class="fw-normal">Woohyun Cho</div>
                                    <div class="fw-bold2 highlight">Developer Portfolio</div>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-xxl-1 g-4">
                            <Fade left delay={30}><div>
                                <div class="col">
                                    <div class="h-100 overflow-hidden py-2 px-4">
                                        <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">EDUCATION</div>
                                        <hr class="text-black"/>
                                        <div class="row row-cols-lg-2 row-cols-xxl-3 p-2 card-hover-up  ">
                                            <div class="col-auto text-black mb-2 font-11 p-4">
                                                <div class="fs-4 fw-bold"><a href="https://web.kangnam.ac.kr/" className='fw-opacity' target='_blank'>강남대학교</a></div>
                                                <div class="fw-light2 fs-6">경기도 용인시</div>
                                                <div class="fw-light2 fs-6 mb-3 highlight">2019. 03. - </div>
                                                <div class="fw-light2 fs-6 mb-3">
                                                    소프트웨어<span class="fw-normal"> 전공</span><br/>가상현실<span class="fw-normal"> 복수전공</span>
                                                </div>
                                            </div>
                                            <div class="col-auto text-black mb-2 font-11 p-4">
                                                <div class="fs-4 fw-bold"><a href="https://hanseong.sen.hs.kr/" className='fw-opacity' target='_blank'>한성고등학교</a></div>
                                                <div class="fw-light2 fs-6">서울시 서대문구</div>
                                                <div class="fw-light2 fs-6 mb-3 highlight">2015. 03. - 2018. 02.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div></Fade>
                            <Fade left delay={60}><div>
                                <div class="col">
                                    <div class="h-100 overflow-hidden py-2 px-4">
                                        <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">EXPERIENCE</div>
                                        <hr class="text-black"/>
                                        <div class="row row-cols-lg-2 row-cols-xxl-3 p-2 card-hover-up  ">
                                            <div class="col-auto mb-2 font-11 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">IPP 첨단산업아카데미</div>
                                                <div class="fw-light2 text-black fs-6">강남대학교 &middot; 고용노동부 &middot; 한국산업인력공단</div>
                                                <div class="fw-light2 fs-6 mb-3 highlight">2024. 03. 04. - 2025. 02. 28.</div>
                                                <div class="fw-light2 fs-6 mb-3 text-black"><a href="https://www.motioncapture.co.kr/" target='_blank'>(주)모션테크놀로지</a> / SW개발_L5</div>
                                                {/*<div class="fw-light2 fs-7">
                                                    <a class="btn btn-sm btn-primary-round px-3 py-1 me-sm-3 fs-6" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>review　<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                                                </div>*/}   
                                            </div>
                                            <div class="col-auto mb-2 font-11 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">42Seoul LaPiscine</div>
                                                <div class="fw-light2 text-black fs-6">이노베이션아카데미</div>
                                                <div class="fw-light2 fs-6 mb-3 highlight">2023. 07. 17. - 08. 11.</div>
                                                <div class="fw-light2 fs-6">
                                                    <a class="btn btn-sm btn-dark-square px-4 py-1 me-sm-3 fs-6 fw-bold" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>돌아보기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div></Fade>
                                <Fade left delay={90}><div>
                                <div class="col">
                                    <div class="h-100 overflow-hidden py-2 px-4">
                                        <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">CERTIFICATE</div>
                                        <hr class="text-black"/>
                                        <div class="row row-cols-lg-2 row-cols-xxl-3 p-2 font-11 card-hover-up  ">
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">웹디자인기능사</div>
                                                <div class="fw-light2 fs-6 mb-2 highlight">2022. 09. 08.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">컴퓨터그래픽스운용기능사</div>
                                                <div class="fw-light2 fs-6 mb-2 highlight">2021. 05. 07.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">워드프로세서</div>
                                                <div class="fw-light2 fs-6 mb-2 highlight">2019. 09. 13.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">GTQi(Illustrator)</div>
                                                <div class="fw-light2 fs-6 mb-2 highlight">2014. 03. 14.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">GTQ(Photoshop)</div>
                                                <div class="fw-light2 fs-6 mb-2 highlight">2013. 12. 13.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div></Fade>
                                <Fade left delay={120}><div>
                                <div class="col">
                                    <div class="h-100 overflow-hidden py-2 px-4">
                                        <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">RATING</div>
                                        <hr class="text-black"/>
                                        <div class="row row-cols-lg-2 row-cols-xxl-3 p-2 card-hover-up  ">
                                            <div class="col-auto mb-2 font-11 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">Baekjoon Online Judge</div>
                                                <div class="fw-light2 fs-7 mb-3 highlight">tlrmsjtm77</div>
                                                <div class="fw-light2 fs-6 mb-2">
                                                    <a class="btn btn-sm btn-dark-square px-4 py-1 me-sm-3 fs-6 fw-bold" href="https://www.acmicpc.net/user/tlrmsjtm77" target='_blank'>바로가기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a>
                                                </div>
                                            </div>
                                            <div class="col-auto mb-2 font-11 p-4">
                                                <div class="fs-4 fw-bold fw-opacity">Codeforces</div>
                                                <div class="fw-light2 fs-7 mb-3 highlight">tlrmsjtm77</div>
                                                <div class="fw-light2 fs-6 mb-2">
                                                    <a class="btn btn-sm btn-dark-square px-4 py-1 me-sm-3 fs-6 fw-bold" href="https://codeforces.com/profile/tlrmsjtm77" target='_blank'>바로가기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a>
                                                </div>
                                            </div>
                                            {/*<div class="col-auto mb-2 font-11">
                                                <div class="fs-5 fw-normal fw-opacity">Programmers</div>
                                                <div class="fw-light2 fs-6 mb-2 highlight">score<br/>0000</div>
                                            </div>*/}
                                        </div>
                                    </div>
                                </div></div></Fade>
                            </div>
                            <div class="row row-cols-sm-1 row-cols-xxl-1 g-4 cards mb-4 pt-4">
                            <Fade left delay={150}><div>
                                <div class="col">
                                    <div class="h-100 overflow-hidden py-2 px-4">
                                        <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SKILL</div>
                                        <hr class="text-black"/>
                                        <div class="row row-cols-lg-3 p-2 font-11 card-hover-up  ">
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C</div><span> </span>
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C++</div>
                                                <div class="fw-light2 fs-6 mb-2 text-black">C와 C++을 사용하여 알고리즘을 작성하고 목표한 기능을 클래스를 사용하여 구현할 수 있으며, 주어진 PS문제를 해결할 수 있습니다.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">C#</div><span> </span>
                                                <div class="fw-light2 fs-6 mb-2 text-black">C# 문법을 파악하고, 제네릭 등을 활용하여 코드를 작성할 수 있습니다. </div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">UnrealEngine</div>
                                                <div class="fw-light2 fs-6 mb-2 text-black">C++을 사용하여 언리얼엔진을 활용할 수 있고, 목표한 컨텐츠를 제작하기 위해 학습중입니다.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Unity</div>
                                                <div class="fw-light2 fs-6 mb-2 text-black">C#을 사용하여 Unity를 다룰 수 있습니다.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">HTML5</div><span> </span>
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">CSS3</div><span> </span>
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">JavaScript</div>
                                                <div class="fw-light2 fs-6 mb-2 text-black">HTML, CSS와 JavaScript를 통해 주어진 기능을 수행하는 웹페이지를 구현할 수 있습니다.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">React</div>
                                                <div class="fw-light2 fs-6 mb-2 text-black">DOM의 구조를 알고 컴포넌트를 활용하여 SPA방식의 프론트 웹페이지를 제작할 수 있습니다.</div>
                                            </div>
                                            <div class="col-auto mb-2 p-4">
                                                <div class="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2">Processing</div>
                                                <div class="fw-light2 fs-6 mb-2 text-black">프로세싱의 다양한 라이브러리를 사용할 수 있고, 이를 통해 인터랙티브 컨텐츠를 제작할 수 있습니다.</div>
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