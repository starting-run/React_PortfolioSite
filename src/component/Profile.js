import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

class Profile extends Component {
    render() {
      return (
        <div>
      <section class="profile-1 pt-6">
    <div id="addbg" className="bg-change"></div>
    <div id="arrow-left" class="arrow-left">
        <div class="fs-0 font-7 fw-lighter">></div>
    </div>
    <div id="show-page" class="show-page">
        <div class="fs-2 font-7 fw-lighter lh-lg">O 1</div>
    </div>
    <body>
    <div class="profiles-center d-flex align-items-center ">
        <div class="container-xxl px-5 pt-5 mb-5 mt-5">
            <div class="">
                <div class="row gx-5 justify-content-center pt-5">
                    <div class="mb-5 mt-5">
                        <div class="row row-cols-lg-2 cards justify-content-center font-3">
                            <div class="col-xl-3 mb-2">
                                <div class="d-flex flex-column pb-3 card-overtext">
                                    <a class="navbar-brand"><figure><img class="mt-5" src="./images/logo_sq.png" style={{width: "70px"}}></img></figure></a>
                                    <h3 class="mb-2 display-4 lh-1 fw-bold">조우현</h3>
                                    <h6 class="mb-4 small lh-1 fw-bold">Woohyun Cho</h6>
                                    <h6 class="mt-5 small lh-1 fw-light2"><i class="fa-solid fa-cake-candles"></i>　 1999. 07. 23.</h6>
                                    <h6 class="small lh-1 fw-light2"><i class="fa-solid fa-envelope-open-text"></i>　<a href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다.">ploris576@kangnam.ac.kr</a></h6> 
                                    <h6 class="small lh-1 fw-light2"><i class="fa-solid fa-location-dot"></i>　 Mapo-gu, Seoul</h6>
                                    <h6 class="small lh-1 fw-light2"><i class="fa-solid fa-chart-simple"></i>　 <a href="https://solved.ac/profile/tlrmsjtm77">BOJ / tlrmsjtm77</a></h6>
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="d-flex flex-column pb-3 card-overtext">
                                    <div class="fw-bolder">
                                        <hr></hr>
                                        <div class="text-black fs-3">More&nbsp;And&nbsp;More <b>CREATIVELY</b></div>
                                        <div class="text-black fs-5 mb-5 ">게임클라이언트 프로그래머 <b>조우현</b>입니다.</div>
                                    </div>
                                    <div class="mb-5">찾아주셔서 감사합니다.
                                        <br></br>모든 일에는 창의력과 상상력 &middot; 디테일이 중요하다고 생각합니다.
                                        <br></br>창의력은 혁신을 그리고, 상상력은 사람을 만들고 조각합니다.
                                        <br></br>창의적이고 상상력을 더한 모든 것에 디테일을 불어넣는 개발자가 되고자 노력하겠습니다.
                                        <br></br>궁금한 사항이 있으시다면 <a class="fw-bold" href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다.">메일</a>로 연락주세요 !
                                    </div>
                                    <div class="row row-cols-lg-2 mb-5">
                                        <div class="col">
                                            <div class="fs-3 fw-bolder fw-opacity mb-1">
                                                Develop
                                            </div>
                                            <div class="fw-light2 fs-7">
                                                C계열 언어를 주로 사용하고 있습니다. 현재는 C++을 활용한 UnrealEngine을 위주로 학습하고 있으며, 프로젝트를 통해 실전 경험을 향상시키고 있습니다.
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="fs-3 fw-bolder fw-opacity mb-1">
                                                Design
                                            </div>
                                            <div class="fw-light2 fs-7">
                                                아무리 좋은 게임성을 지녀도, UI/UX 등 디자인적인 부분을 무시할 수는 없습니다. 항상 보기 좋은 디자인을 위해 고민하고 연습하고 있습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>    
</section>
    </div>
      );
    }
  }

  export default Profile;