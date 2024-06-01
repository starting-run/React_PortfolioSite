import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

import img1 from '../../images/projects/portfolio_website/1.png';
import img2 from '../../images/projects/portfolio_website/2.png';
import img3 from '../../images/projects/portfolio_website/3.png';

function Website() {
    const notify = () => toast.success('현재 접속중인 웹사이트입니다.', {duration: 4000});

    useEffect(() => {
        notify();
      }, []);

      return (
        <div>
            <Helmet><title>포트폴리오 웹사이트 - USFREE</title></Helmet>
            <div id="projectmain">
                <div class="bg-white-gray">
                    <div class="container-xxl px-4 pt-6" id="seemore">
                        <div class="mb-2 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">포트폴리오 웹사이트</div>
                        <a href="https://github.com/usfree/usfree.github.io" target='_blank' class="btn btn-dark-square px-4 py-2-5 me-3 fs-6 fw-bold mb-5 rounded-4"><FontAwesomeIcon icon={faGithub} /> 리포지토리</a>
                        <a href="https://usfree.site" target='_blank' class="btn btn-dark-square px-4 py-2-5 fs-6 fw-bold mb-5 rounded-4">사이트 바로가기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a>
                        <div class="row gx-5 justify-content-center">
                            <div class="up-animation">
                                <div class=" rounded-2 border-0">
                                    <div class="card-body p-0">
                                        <div class="d-flex align-items-center">
                                            <div class="p-2 proj_text w-100 text-black fw-light">
                                                <div class="mb-3 w-100 card card-cover-nonhover p-3 border-0 font-11 rounded-4">
                                                    <div class="fw-bold fs-6 mb-2 highlight px-2">제작 기간　<span class="fw-light fs-6 mb-2 text-black">2023. 10. - 2024. 02.</span></div>
                                                    <div class="fw-bold fs-6 mb-2 highlight px-2">사용 기술　<span class="fw-light fs-6 mb-2 text-black">React, HTML, CSS, JavaScript, Bootstrap Library</span></div>
                                                    <div class="fw-bold fs-6 mb-2 highlight px-2">주요 기능　<span class="fw-light fs-6 mb-2 text-black">React를 사용하여 SPA형식으로 제작된 포트폴리오 게시용 사이트입니다.</span></div>
                                                    <div class="fw-bold fs-6 mb-2 highlight px-2">인원 구성　<span class="fw-light fs-6 mb-2 text-black">1인 개발</span></div>
                                                    <div class="fw-bold fs-6 mb-2 highlight px-2">구현 기능</div>
                                                    <span class="fw-light fs-6 mb-2 text-black px-2">
                                                        &middot; React SPA 형식으로 제작되어 비동기 방식으로 작동
                                                        <br/>&middot; 사용자 기기 설정에 따라 다크모드/라이트모드로 동작
                                                        <br/>&middot; 모바일/태블릿/PC에 따라 실시간 반응형으로 동작
                                                        <br/>&middot; 프로젝트 섹션 검색기능
                                                        <br/>&middot; 보기 좋은 디자인을 최우선으로 하여 UI/UX를 수려하게 제작
                                                    </span>
                                                </div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SUMMARY</div>
                                                <div class="mb-4 px-2 font-11">포트폴리오 게시를 목적으로 제작한 웹사이트입니다. 현재는 순수 React를 이용하여 <b>SPA(Single Page Application)</b>방식을 사용하고 있지만, 이는 <b>SEO(검색 엔진 최적화)</b>에서 문제를 보입니다. 이러한 문제점으로 인해 차후에는 Next.js를 사용하여 <b>SSR(Server Side Rendering)</b>방식으로의 업그레이드를 염두해두고 있습니다.<br/>또한, 깃허브 Pages 엔진에서 탈피하여 DB를 연동하여 자체 개발 블로그를 구축할 계획도 갖고 있습니다.</div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">REASON</div>
                                                <div class="mb-4 px-2 font-11">개발자로서 포트폴리오를 게시하기 위한 사이트의 개발 필요성을 느꼈습니다. 처음에는 React가 아닌 순수 HTML을 통해 ajax로 비동기 웹페이지를 구현했지만<span class="highlight">(Github Repository의 main브런치 → OldSrc(only HTML)을 통해 확인할 수 있습니다.)</span>, 한계점을 느끼고 완벽한 비동기 웹페이지를 구현하기 위해 알아보던 중 React에 매력을 느끼게 되었고, 이를 학습하여 제작하게 되었습니다. React를 처음으로 사용하며 잘 몰랐던 프론트웹페이지 제작에 대해 알게되는 계기가 되었고, 현재는 깃허브 Pages엔진을 사용하여 배포하고 있지만, 추후 SSR 방식으로 웹페이지를 전환하게 된다면 자체 서버를 통해 배포하는 것도 고려중입니다.</div>
                                                <div class="text-black font-4 fs-6 fw-normal p-2 font-letter-space-lg">SETUP</div>
                                                <div class="code p-3  border-0 font-11 rounded-4">
                                                    # localhost<br/><br/>
                                                    npm i --force <span style={{color:"#6A9955"}}>//node_modules 설치</span><br/>
                                                    npm run start<br/>
                                                </div>
                                                <hr/>
                                                <p class="highlight font-11">
                                                    ※ 본문은 구버전 기준으로 작성되었고, 현재는 업데이트 되었습니다.
                                                </p>
                                                <div class="font-11 fs-2 fw-bold mb-1"><b>Home</b></div>
                                                <img class="mb-2 shadow-lg  " src={img1}/>
                                                <p class="mb-5 font-11">
                                                    메인화면에서는 가운데 가장 큰 글씨가 일정 시간마다 순환되도록 제작하였습니다. (UNREAL DEV. / UNITY DEV. / GAME DEV. / VR DEV.)
                                                </p>
                                                <div class="font-11 fs-2 fw-bold mb-1"><b>Profile</b></div>
                                                <img class="mb-2 shadow-lg  " src={img2}/>
                                                <p class="mb-5 font-11">
                                                    프로필 영역에서는 여러가지 프로필 사항을 기술합니다. 각 카드에 fade-bottom을 사용하여 자연스러운 효과를 구현합니다.
                                                </p>
                                                <div class="font-11 fs-2 fw-bold mb-1"><b>Project</b></div>
                                                <img class="mb-2 shadow-lg  " src={img3}/>
                                                <p class="mb-5 font-11">
                                                    프로젝트 영역에서는 개발중이거나 개발된 프로젝트들을 나열하고 서술합니다. 각 카드를 통해 해당 프로젝트의 자세한 내용에 접근할 수 있으며, JS filter() 함수를 통해 정적 웹페이지에서도 검색 기능을 구현할 수 있었습니다. 검색 기능 사용시, 검색된 키워드가 포함된 프로젝트를 제외한 나머지 프로젝트는 숨겨지게 되며, 표시될 프로젝트가 없을 경우 검색된 프로젝트가 없음을 안내합니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="text-end">
                            <Link to='/project' className="btn btn-outline-dark px-4 py-2-5 fs-6 fw-bolder mt-3 mb-5 rounded-4"><FontAwesomeIcon icon={faBars} />　목록으로</Link>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
      );
    }

  export default Website;