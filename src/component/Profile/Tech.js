import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGamepad, faGraduationCap, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';

class Tech extends Component {
    render() {
      return (
        <div>
            <div class="d-flex">
                <div class="container-xxl px-5">
                    <div class="col-auto font-3">
                        <div class="d-flex flex-column pb-3 card-overtext">
                        <div class="mb-5 text-black">보유중인 기술스택 목록입니다.<br/>이 외에도 다양한 기술을 습득하고자 노력하고 있습니다.</div>
                          <div class="row row-cols-lg-2 mb-2">
                              <div class="col-auto mb-2">
                                  <div class="fs-3 fw-bolder fw-opacity"><FontAwesomeIcon icon={faCode}/> C / C++</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">C와 C++을 사용하여 알고리즘을 해결하고 목표한 클래스를 구현할 수 있습니다.</div>
                              </div>
                              <div class="col-auto mb-2">
                                  <div class="fs-3 fw-bolder fw-opacity"><FontAwesomeIcon icon={faHtml5}/> HTML</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">HTML을 사용할 수 있고, CSS와 JS를 통해 페이지를 구현할 수 있습니다.</div>
                              </div>
                              <div class="col-auto mb-2">
                                  <div class="fs-3 fw-bolder fw-opacity"><FontAwesomeIcon icon={faReact}/> React</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">DOM의 구조를 알고 컴포넌트를 활용하여 SPA방식의 프론트 웹페이지를 제작할 수 있습니다.</div>
                              </div>
                              <div class="col-auto mb-2">
                                  <div class="fs-3 fw-bolder fw-opacity"><FontAwesomeIcon icon={faGamepad}/> UnrealEngine</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">C++을 사용하여 언리얼엔진을 사용할 수 있고, 목표한 컨텐츠를 제작하기 위해 학습중입니다.</div>
                              </div>
                              <div class="col-auto mb-2">
                                  <div class="fs-3 fw-bolder fw-opacity"><FontAwesomeIcon icon={faMicrochip}/> Processing</div>
                                  <div class="fw-light2 fs-7 mb-2 highlight">프로세싱의 다양한 라이브러리를 사용할 수 있고, 이를 통해 인터랙티브 컨텐츠를 제작할 수 있습니다.</div>
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

  export default Tech;