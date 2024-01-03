import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

class Cert extends Component {
    render() {
      return (
        <div>
            <div class="d-flex">
                <div class="container-xxl px-5">
                    <div class="col-auto font-3">
                        <div class="d-flex flex-column pb-3 card-overtext">
                        <div class="mb-5 text-black">보유중인 자격증 목록입니다.</div>
                          <div class="row row-cols-lg-2 mb-2">
                              <div class="col-auto mb-2">
                                  <div class="fs-3 fw-bolder fw-opacity">웹디자인기능사</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">2022. 09. 08.</div>
                              </div>
                              <div class="col-auto mb-2">
                                  <div class="fs-4 fw-bolder fw-opacity">컴퓨터그래픽스운용기능사</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">2021. 05. 07.</div>
                              </div>
                          </div>
                          <div class="row row-cols-lg-3 mb-5">
                              <div class="col-auto mb-2">
                                  <div class="fs-3 fw-bolder fw-opacity">워드프로세서</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">2019. 09. 13.</div>
                              </div>
                              <div class="col-auto mb-2">
                                  <div class="fs-4 fw-bolder fw-opacity">GTQi(Illustrator)</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">2014. 03. 14.</div>
                              </div>
                              <div class="col-auto mb-2">
                                  <div class="fs-4 fw-bolder fw-opacity">GTQ(Photoshop)</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">2013. 12. 13.</div>
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

  export default Cert;