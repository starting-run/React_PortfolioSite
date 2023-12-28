import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

class Profile extends Component {
    render() {
      return (
        <div>
      <section class="profile-1 pt-6">
    <div id="addbg" className="bg-change"></div>
    <div id="arrow-left" class="arrow-left">
        <div class="fs-0 font-7 fw-lighter"></div>
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
                                        <div class="text-black fs-3">리액트 전환으로 인해 준비중입니다.</div>
                                        <div class="text-black fs-5 mb-5 "></div>
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