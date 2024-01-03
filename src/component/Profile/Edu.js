import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

class Edu extends Component {
    render() {
      return (
        <div>
            <div class="d-flex">
                <div class="container-xxl px-5">
                    <div class="col-auto font-3">
                        <div class="d-flex flex-column pb-3 card-overtext">
                            <div class="mb-5 text-black">저의 학력사항은 아래와 같습니다.<br/>현재는 강남대학교 ICT공학부를 재학중입니다.</div>
                            <div class="row row-cols-lg-2">
                                <div class="col-auto mb-5 text-black">
                                    <div class="fs-3 fw-bolder"><a href="https://web.kangnam.ac.kr/" className='fw-opacity'>Kangnam University</a></div>
                                    <div class="fw-light2 fs-7">Yongin, Gyeonggi-do</div>
                                    <div class="fw-light2 fs-7 mb-3 highlight">2019. 03. - </div>
                                    <div class="fw-light2 fs-7">
                                        소프트웨어전공 / 가상현실 복수전공<br/>major: Software / double major: VirtualReality
                                    </div>
                                </div>
                                <div class="col-auto text-black">
                                    <div class="fs-3 fw-bolder"><a href="https://hanseong.sen.hs.kr/" className='fw-opacity'>Hanseong Highschool</a></div>
                                    <div class="fw-light2 fs-7">Seodaemun-gu, Seoul</div>
                                    <div class="fw-light2 fs-7 mb-3 highlight">2015. 03. - 2018. 02.</div>
                                    <div class="fw-light2 fs-7">
                                        이과계열
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Edu;