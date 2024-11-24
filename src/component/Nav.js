import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ToTopButton from './Function/ToTopButton';
import DarkModeToggle from './Function/DarkModeToggle';

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isPC, setIsPC] = useState(window.innerWidth >= 992);
  const [scrollPos, setScrollPos] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

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
      setScrollPos(currentScrollPos); // 스크롤 위치 업데이트
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isPC]);

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainlogo = () => {
    window.scrollTo(0, 0);
    const navbarToggler = document.querySelector('.navbar-toggler');
    const checkbox = document.getElementById('hbg');
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
      checkbox.checked = false;
    }
  };
  
  const navbarBorder = scrollPos === 0 ? 'border-bottom' : 'border-bottom-0'; {/* currentPath === '/' &&  */}
  const bgColor = scrollPos === 0 ? 'scroll-navbar-background-none' : 'scroll-navbar-background';
  const navbarClass = scrollPos === 0 ? 'navbar-py' : 'navbar-py'; //왼쪽 navbar-py2
  const navbarClass3 = scrollPos === 0 ? 'fs-5-5' : 'fs-5-5'; // 왼쪽 fs-5

  // 드롭다운의 가시성을 관리하는 상태
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // 드롭다운을 표시하는 함수
  const showDropdown = () => setDropdownVisible(true);
  // 드롭다운을 숨기는 함수
  const hideDropdown = () => setDropdownVisible(false);

  return (
    <header>
      <div>
        <ToTopButton />
        <div id="add-fixed" className={`navbar-fixed-attr navbar-mobile-py ${isScrollingUp ? 'show-navbar' : 'hide-navbar'} ${bgColor} ${navbarBorder}`}>
          <nav id="navbarcontrol" className={`navbar navbar-light ${navbarClass} navbar-expand-lg`}>
            <div id='changecontainer' className={`container-full px-4`}>
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
                <div className="collapse navbar-collapse justify-content-center-navbar navbar-left-margin navbar-upper" id="navbarSupportedContent"> {/* navbar-left-margin 가운데 정렬용 */}
                  <ul className={`navbar-nav mb-2 mb-lg-0 font-letter-space-lsm ${navbarClass3}`}>
                    <NavLink exact='true' to="/about" className="nav-link navbar-items" title="Profile"><li className="nav-item font-3 fw-semibold">About</li></NavLink>
                    {/*<NavLink exact='true' to="/link" className="nav-link navbar-items" title="link"><li className="nav-item">링크</li></NavLink>*/}
                    <NavLink exact='true' to="/project" className="nav-link navbar-items" title="Project"><li className="nav-item font-3 fw-semibold">Project</li></NavLink>
                    <NavLink exact='true' to="/blog" className="nav-link navbar-items" title="blog"><li className="nav-item font-3 fw-semibold">Blog</li></NavLink>
                    <a className="nav-link navbar-items" href="https://github.com/starting-run" target='_blank' title="Github"><li className="nav-item font-3 fw-semibold">Github <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7' id='github-icon'/></li></a>

                    {/* <span className="hamburger-copy text-black pt-5 font-letter-space only-mobile-view font-11">Copyright &copy; Woohyun Cho(STARTING)<br/>All rights reserved.</span> */}
                    <span className="size-repack"></span> {/* animation 부드럽게 처리하기 위함 */}
                  </ul>
                </div>
                <div className="toggle-right"><DarkModeToggle/></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
