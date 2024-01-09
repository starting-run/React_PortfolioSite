import React, { Component } from 'react';

class Intro extends Component {
    render() {
      return (
        <div>
            <div class="d-flex flex-column pb-3 card-overtext font-3 px-3">
                <div class="fw-bolder">
                    <div class="text-black fs-3">More&nbsp;And&nbsp;More <b>CREATIVELY</b></div>
                    <div class="text-black fs-5 mb-5 ">게임클라이언트 프로그래머 <b>조우현</b>입니다.</div>
                </div>
                <div class="mb-5 text-black">찾아주셔서 감사합니다.
                    <br/>모든 일에는 창의력과 상상력 &middot; 디테일이 중요하다고 생각합니다.
                    <br/>창의력은 혁신을 그리고, 상상력은 사람을 만들고 조각합니다.
                    <br/>창의적이고 상상력을 더한 모든 것에 디테일을 불어넣는 개발자가 되고자 노력하겠습니다.
                    <br/>궁금한 사항이 있으시다면 <a class="fw-bold" href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다.">메일</a>로 연락주세요 !
                </div>
                <div class="row row-cols-lg-2">
                    <div class="col-auto mb-5">
                        <div class="fs-3 fw-bolder fw-opacity mb-1">
                            Develop
                        </div>
                        <div class="fw-light2 fs-7 text-black">
                            C계열 언어를 주로 사용하고 있습니다. 현재는 C++을 활용한 UnrealEngine을 위주로 학습하고 있으며, 프로젝트를 통해 실전 경험을 향상시키고 있습니다.
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="fs-3 fw-bolder fw-opacity mb-1">
                            Design
                        </div>
                        <div class="fw-light2 fs-7 text-black">
                            아무리 좋은 게임성을 지녀도, UI/UX 등 디자인적인 부분을 무시할 수는 없습니다. 항상 보기 좋은 디자인을 위해 고민하고 연습하고 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Intro;