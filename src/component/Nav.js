import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import toast from 'react-hot-toast';
import ToTopButton from './Function/ToTopButton';
import DarkModeToggle from './Function/DarkModeToggle';

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos >= 50) { // 50 이상인 경우에만 동작
        setIsScrollingUp(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  $(document).scroll(function() {
    var scroll = $(document).scrollTop();
    if (scroll >= 50) {

      
        $('#add-fixed').addClass('scroll-navbar-background');
    } else {
        $('#add-fixed').removeClass('scroll-navbar-background');
    }
});

const MoveToTop = () => {
  // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const notify = () => toast('기기 설정에 따라 라이트/다크모드로 동작하고, 토글도 제공합니다!',
  {
      duration: 4000,
      icon: '👏'
  }
);

function mainlogo() {
  window.scrollTo(0, 0);
  if ($('.navbar-toggler').attr('aria-expanded') == 'true') {
    $(".navbar-toggler").trigger("click");
    $("input:checkbox[id='hbg']").prop("checked", false);
  }
}

useEffect(() => {
  notify();
}, []);

return (
  <header>
    <div>
      <ToTopButton />
      <div id="add-fixed" className={`navbar-fixed-attr ${isScrollingUp ? 'show-navbar' : 'hide-navbar'}`}>
        <nav id="navbarcontrol" class="navbar navbar-light navbar-py navbar-upper navbar-expand-lg"> {/*navbar-expand-lg 노말PC버전  navbar-upper 대문자*/}
          <div id='changecontainer' class="container-xxl px-4">
              <NavLink exact to="/" className="navbar-brand" id="mains" onClick={mainlogo} title="Home"><img class="logoimg"></img></NavLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <label class="hamburger">
                  <input type="checkbox" id="hbg"></input>
                  <svg viewBox="0 0 32 32">
                    <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path class="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </button>
              <div class="collapse navbar-collapse justify-content-center-navbar navbar-left-margin" id="navbarSupportedContent"> {/* navbar-left-margin 가운데 정렬용 */}
                <ul class="navbar-nav mb-2 mb-lg-0 fs-6-5">
                  <NavLink exact to="/profile" className="nav-link navbar-items" title="Profile"><li class="nav-item">프로필</li></NavLink>
                  <NavLink exact to="/project" className="nav-link navbar-items" title="Project"><li class="nav-item">프로젝트</li></NavLink>
                  <a class="nav-link navbar-items" href="https://github.com/usfree" target='_blank' title="Github"><li class="nav-item">깃허브 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></li></a>
                  <a class="nav-link navbar-items" href="https://velog.io/@usfree" target='_blank' title="Blog"><li class="nav-item">블로그 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></li></a>
                  <a class="nav-link navbar-items" href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다." target='_blank' title="Mail"><li class="nav-item">메일 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></li></a>
                  
                  <span class="hamburger-copy text-black pt-5 font-letter-space only-mobile-view font-11">Copyright &copy; Woohyun Cho(usfree) All rights reserved.</span>
                  <span class="size-repack"></span> {/* animation 부드럽게 처리하기 위함 */}
                </ul>
              </div>
              <div class="sad-test"><DarkModeToggle/></div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  );
}

export default Nav;