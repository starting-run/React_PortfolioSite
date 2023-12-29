import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Credit extends Component {
    render() {
      return (
        <div>
            <Helmet>
                <title>크레딧 - USFREE</title>
            </Helmet>
            <div class="bg-white">
                <div class="container px-4">
                    <div class="row gx-5 justify-content-center">
                        <div class="pt-6 mt-2">
                            <div class="card shadow rounded-2 border-0 mb-5 pb-5">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5 proj_text w-100">
                                            <div class="font-3 fs-4 mb-5">USFREE 웹사이트 개발 내역</div>
                                            [2023. 10. ~ 2023. 12.]
                                            <br/>- ajax load를 활용하여 비동기 웹페이지 구현
                                            <br/>- ajax load로 인해 뒤로가기 / 새로고침이 native로 동작하지 않으므로, hash값을 사용하여 처리
                                            <br/>- 메인화면에서 로딩 후 navbar size 자연스럽게 늘어나게 표현
                                            <br/>- 모바일 / 태블릿 / PC에 따라 다른 navbar UI 적용
                                            <br/>- 버튼 hover 애니메이션 적용
                                            <br/>- 프로필 영역 리뉴얼
                                            <br/>　ㄴ 슬라이드 형식으로 페이지 이동
                                            <br/>- 프로젝트 영역 수정
                                            <br/>　ㄴ 검색창 추가 후 검색 기능 구현
                                            <br/>　ㄴ 프로젝트 개별 카드 hover 효과
                                            <br/>　ㄴ 프로모션 영역 (새로운 프로젝트 개발시 소개)
                                            <br/>- 스크롤바 커스터마이징
                                            <br/>- 기기 설정에 따른 다크모드 구현
                                            <br/>- 기기 설정 외 사용자 설정에 따른 다크모드 토글 구현 (현재 비활성화)
                                            <br/>- 스크롤시 navbar 영역 불투명화

                                            <br/><br/><br/>
                                            [2023. 12. 28 ~ 29.]
                                            <br/>- react를 사용하여 SPA구조로 웹페이지 이식
                                        </div>
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

  export default Credit;