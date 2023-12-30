import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

class Exp extends Component {
    render() {
      return (
        <div>
            <div class="d-flex">
                <div class="container-xxl px-5">
                    <div class="col-auto font-3">
                        <div class="d-flex flex-column pb-3 card-overtext">
                        <div class="mb-5">실력향상과, 배움의 폭 향상 &middot; 개발자 네트워킹 등을 위해 여러가지 경험을 하고 있습니다.<br/>좋은 기회를 얻기 위해 다분히 노력중입니다.</div>
                          <div class="row row-cols-lg-2 mb-5">
                              <div class="col">
                                  <div class="fs-3 fw-bolder fw-opacity">42Seoul LaPiscine</div>
                                  <div class="fw-light2 fs-7">Inovation Academy</div>
                                  <div class="fw-light2 fs-7 mb-3 highlight">2023. 07. 17. - 08. 11.</div>
                                  <div class="fw-light2 fs-7">
                                      <a class="btn btn-primary-round px-4 py-2 me-sm-3 fs-6" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>review　<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
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

  export default Exp;