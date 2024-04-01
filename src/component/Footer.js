import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faVimeo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {
const MoveToTop = () => {
  // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


return (
  <header>
    <div>
      <div id="topbtn" class="ss-go-top">
        <a class="smoothscroll" title="Back to Top" onClick={MoveToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path></svg>
        </a>
      </div>
      <div id="normalfooter" class="bg-only-white-gray py-4 mt-auto">
        <div class="container-xxl px-4 text-black font-3">
            <div class="text-end">
              <a class="text-black" href="https://github.com/usfree" title="Github"><FontAwesomeIcon icon={faGithub} /></a>　
              <a class="text-black" href="https://velog.io/@usfree" title="Blog"><FontAwesomeIcon icon={faVimeo} /></a>　
              <a class="text-black" href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다." title="Mail"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <hr class="text-black"/>
            <div class="col-auto font-11">
              <div class="smaller m-0 text-black mb-1">본 사이트는 개인 포트폴리오용으로 제작되었습니다.</div>
              <div class="smaller m-0 text-black mb-3">Copyright &copy; Woohyun Cho(usfree) All rights reserved.</div>
            </div>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Footer;