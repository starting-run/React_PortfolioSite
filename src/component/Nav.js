import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import toast from 'react-hot-toast';
import ToTopButton from './Function/ToTopButton';
import DarkModeToggle from './Function/DarkModeToggle';

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isPC, setIsPC] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos >= 50 && isPC) {
        setIsScrollingUp(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isPC]);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      const navbar = document.getElementById('add-fixed');
      if (scroll >= 50) {
        navbar.classList.add('scroll-navbar-background');
      } else {
        navbar.classList.remove('scroll-navbar-background');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const notify = () => toast('기기 설정에 따라 라이트/다크모드로 동작하고, 토글도 제공합니다!', {
    duration: 4000,
    icon: '👏'
  });

  const mainlogo = () => {
    window.scrollTo(0, 0);
    const navbarToggler = document.querySelector('.navbar-toggler');
    const checkbox = document.getElementById('hbg');
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
      checkbox.checked = false;
    }
  };

  useEffect(() => {
    //notify();
  }, []);
  
return (
  <header>
    <div>
      <ToTopButton />
      <div id="add-fixed" className={`navbar-fixed-attr ${isScrollingUp ? 'show-navbar' : 'hide-navbar'}`}>
        <nav id="navbarcontrol" className="navbar navbar-light navbar-py navbar-upper navbar-expand-lg"> {/*navbar-expand-lg 노말PC버전  navbar-upper 대문자*/}
          <div id='changecontainer' className="container-xxl px-4">
              <NavLink exact='true' to="/" className="navbar-brand" id="mains" onClick={mainlogo} title="Home"><img className="logoimg no-rounded"></img></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <label className="hamburger">
                  <input type="checkbox" id="hbg"></input>
                  <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </button>
              <div className="collapse navbar-collapse justify-content-center-navbar navbar-left-margin" id="navbarSupportedContent"> {/* navbar-left-margin 가운데 정렬용 */}
                <ul className="navbar-nav mb-2 mb-lg-0 fs-6-5">
                  <NavLink exact='true' to="/profile" className="nav-link navbar-items" title="Profile"><li className="nav-item">프로필</li></NavLink>
                  <NavLink exact='true' to="/project" className="nav-link navbar-items" title="Project"><li className="nav-item">프로젝트</li></NavLink>
                  <a className="nav-link navbar-items" href="https://github.com/usfree" target='_blank' title="Github"><li className="nav-item">깃허브 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></li></a>
                  <a className="nav-link navbar-items" href="https://velog.io/@usfree" target='_blank' title="Blog"><li className="nav-item">블로그 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></li></a>
                  <a className="nav-link navbar-items" href="mailto:ploris576@kangnam.ac.kr?subject=usfree.site에서 보내는 메일입니다." target='_blank' title="Mail"><li className="nav-item">메일 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></li></a>
                  
                  <span className="hamburger-copy text-black pt-5 font-letter-space only-mobile-view font-11">Copyright &copy; Woohyun Cho(usfree) All rights reserved.</span>
                  <span className="size-repack"></span> {/* animation 부드럽게 처리하기 위함 */}
                </ul>
              </div>
              <div className="sad-test"><DarkModeToggle/></div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  );
}

export default Nav;