import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Credit extends Component {
    render() {
        return (
          <div>
              <Helmet>
                  <title>크레딧 - USFREE</title>
              </Helmet>
              <div class="container px-4 my-2 mt-10">
                  <div class="mb-5">
                      <h1 class="display-3 fw-bolder mb-0"><span class="text-gradient d-inline">CREDIT</span></h1>
                      <div class=""><span class="fw-light2 font-3 text-black">USFREE 웹사이트 개발 내역</span></div>
                  </div>
              </div>
              <div class="bg-white">
                  <div class="container px-4 mt-5">
                      <div class="py-5  px-md-5">
                          <div class="card shadow border-0 rounded-2 mb-5">
                              <div class="card-body p-5 text-black font-3">
                                <span class="fw-bolder code w-100">본 사이트 메인화면에 포함된 동영상 저작권은 PlayStation (BlueTwelve Studio - Stray 게임)에 있습니다.</span>
                                <br/><br/><br/>
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

                                <br/><br/>
                                [2023. 12. 28 ~ 29.]
                                <br/>- react를 사용하여 SPA방식 웹페이지 이식
                                <br/><br/><br/>
                                <h3 class="fw-bolder">Future</h3>
                                - SSR 방식 웹사이트 구현
                                <br/>- github page가 아닌 별도 서버를 통해 DB 연동을 통한 native 개발 게시판 구현
                                <br/>- 스크롤 인터랙션 영역 제작
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