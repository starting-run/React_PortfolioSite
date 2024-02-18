import React, { Component, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faClipboardList, faGear, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';


import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';


function Website() {
    const notify = () => toast.success('현재 접속중인 웹사이트입니다.', {duration: 4000});

    useEffect(() => {
        notify();
      }, []);

      return (
        <div>
            <Helmet>
                <title>포트폴리오 웹사이트 - 프로젝트 - USFREE</title>
            </Helmet>
            <div id="projectmain">
                <div class="container px-4 my-2 mt-10">
                    <div class="mb-5">
                        <h1 class="display-3 fw-bolder mb-0"><span class="text-gradient d-inline">PORTFOLIO WEBSITE</span></h1>
                        <div class="text-black"><span class="fw-bolder">React　</span>2023. 10 - 2024. 02.</div>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="container px-4 my-2 mt-5">
                        <div class="mb-5">
                        <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                        <a href="https://github.com/usfree/usfree.github.io" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faGithub} /> Repository</a>
                        <a href="https://usfree.site" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Go To Service</a>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="up-animation">
                                <div class="card shadow rounded-2 border-0">
                                    <div class="card-body p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="p-3 proj_text w-100 text-black fw-light">
                                                <div class="mb-5 w-100 card card-cover-nonhover p-3 rounded-3 border-0">
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">프로젝트명</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">Portfolio Website</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">프로젝트 기간</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">2023. 10. - 2024. 02.</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">주요 기능</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">React를 사용하여 SPA형식으로 제작된 포트폴리오 게시용 사이트.</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">구현 기능</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">&middot; React SPA 형식으로 제작되어 비동기 방식으로 작동<br/>&middot; 사용자 기기 설정에 따라 다크모드/라이트모드로 동작<br/>&middot; 모바일/태블릿/PC에 따라 실시간 반응형으로 동작<br/>&middot; 프로젝트 섹션 검색기능<br/>&middot; 보기 좋은 디자인을 최우선으로 하여 UI/UX를 수려하게 제작</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">사용 기술</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">React, HTML, CSS, JavaScript, Bootstrap Library</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">인원 구성</div>
                                                    <div class="font-3 fw-light fs-6 mb-3">1인 개발</div>
                                                    <div class="font-3 fw-bold fs-5 highlight-gradient">세부 사항</div>
                                                    <div class="font-3 fw-light fs-6">하단 참고</div>
                                                </div>
                                                <h3><b><FontAwesomeIcon icon={faClipboardList} /> Summary</b></h3>
                                                <div class="mb-4">포트폴리오 게시를 목적으로 제작한 웹사이트입니다. 현재는 순수 React를 이용하여 <b>SPA(Single Page Application)</b>방식을 사용하고 있지만, 이는 <b>SEO(검색 엔진 최적화)</b>에서 문제를 보입니다. 이러한 문제점으로 인해 차후에는 Next.js의 <b>SSR(Server Side Rendering)</b>방식을 사용하여 업그레이드를 염두해두고 있습니다.<br/>또한, 깃허브 Pages 엔진에서 탈피하여 DB를 연동하여 자체 개발 블로그를 구축할 계획도 갖고 있습니다.</div>
                                                <h3><b><FontAwesomeIcon icon={faLightbulb} /> Reason</b></h3>
                                                <div class="mb-4">개발자로서 포트폴리오를 게시하기 위한 사이트의 개발 필요성을 느꼈습니다. 처음에는 React가 아닌 순수 HTML을 통해 ajax로 비동기 웹페이지를 구현했지만<span class="highlight">(Github Repository의 main브런치 → DefaultHTML을 통해 확인할 수 있습니다.)</span>, 한계점을 느끼고 완벽한 비동기 웹페이지를 구현하기 위해 알아보던 중 React에 매력을 느끼게 되었고, 이를 학습하여 제작하게 되었습니다. React를 처음으로 사용하며 잘 몰랐던 프론트웹페이지 제작에 대해 알게되는 계기가 되었고, 현재는 깃허브 Pages엔진을 사용하여 배포하고 있지만, 추후 SSR 방식으로 웹페이지를 전환하게 된다면 자체 서버를 통해 배포하는 것도 고려중입니다.</div>
                                                
                                                <h3><b><FontAwesomeIcon icon={faGear} /> Setup</b></h3>
                                                <div class="card card-cover-nonhover p-3 rounded-3 border-0">
                                                    #github &lt;main&gt; Branch / 로컬호스트<br/>
                                                    npm run start<br/><br/>
                                                    #github &lt;main&gt; Branch / 빌드<br/>
                                                    npm run build
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center pb-5">
                        <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3 mb-5"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                    </div>
                </div>
            </div>
        </div>
      );
    }

  export default Website;