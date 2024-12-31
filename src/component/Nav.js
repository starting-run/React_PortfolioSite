import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import ToTopButton from './Function/ToTopButton';
import DarkModeToggle from './Function/DarkModeToggle';

import games_orbit from '../images/intro_1.mp4';
import games_embers from '../images/intro_embers.mp4';

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
    // const navbarToggler = document.querySelector('.navbar-toggler');
    // const checkbox = document.getElementById('hbg');
    // if (navbarToggler.getAttribute('aria-expanded') === 'true') {
    //   navbarToggler.click();
    //   checkbox.checked = false;
    // }
  };
  
  const closeButtonRef = useRef(null);

  const handleNavLinkClick = () => {
    // "닫기" 버튼의 클릭 이벤트를 수동으로 트리거
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
  };

  const navbarBorder = currentPath === '/' && scrollPos === 0 ? 'border-bottom' : 'border-bottom-0'; {/* currentPath === '/' &&  */}
  const bgColor = scrollPos === 0 ? 'scroll-navbar-background-none' : 'scroll-navbar-background';
  const navbarClass = scrollPos === 0 ? 'navbar-py' : 'navbar-py'; //왼쪽 navbar-py2
  const navbarClass3 = scrollPos === 0 ? 'fs-6' : 'fs-6'; // 왼쪽 fs-5

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
        <div id="add-fixed" className={`navbar-fixed-attr ${isScrollingUp ? 'show-navbar' : 'hide-navbar'} ${bgColor} ${navbarBorder}`}>
          <nav id="navbarcontrol" className={`navbar navbar-light ${navbarClass} navbar-expand-lg`}>
            <div id='changecontainer' className={`container-full px-2`}>
              <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <div class="burger-icon">
                  <label class="burger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                  </label>
                </div>
              </button>
              <NavLink exact='true' to="/" className="navbar-brand" id="mains" onClick={mainlogo} title="Home"><img className="logoimg no-rounded"></img></NavLink>
              {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <label className="hamburger">
                  <input type="checkbox" id="hbg"></input>
                  <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </button> */}
              <div className="collapse navbar-collapse justify-content-center-navbar navbar-right-margin navbar-upper" id="navbarSupportedContent"> {/* navbar-left-margin 가운데 정렬용 */}
                <ul className={`navbar-nav mb-2 mb-lg-0 font-letter-space-lsm ${navbarClass3}`}>
                  <NavLink exact='true' to="/about" className="nav-link navbar-items" title="Profile"><li className="nav-item font-11 fw-bold">프로필</li></NavLink>
                  {/*<NavLink exact='true' to="/link" className="nav-link navbar-items" title="link"><li className="nav-item">링크</li></NavLink>*/}
                  <NavLink exact='true' to="/project" className="nav-link navbar-items" title="Project"><li className="nav-item font-11 fw-bold">프로젝트</li></NavLink>
                  <NavLink exact='true' to="/blog" className="nav-link navbar-items" title="blog"><li className="nav-item font-11 fw-bold">블로그</li></NavLink>
                  <a className="nav-link navbar-items" href="https://github.com/starting-run" target='_blank' title="Github"><li className="nav-item font-11 fw-bold">깃허브 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7' id='github-icon'/></li></a>

                  {/* <span className="hamburger-copy text-black pt-5 font-letter-space only-mobile-view font-11">Copyright &copy; Woohyun Cho(STARTING)<br/>All rights reserved.</span> */}
                  <span className="size-repack"></span> {/* animation 부드럽게 처리하기 위함 */}
                </ul>
              </div>
              <div className="toggle-right pe-4"><DarkModeToggle/></div>
            </div>
          </nav>
        </div>

        <div class="offcanvas offcanvas-start bg-white" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
    <a ref={closeButtonRef} type="button" className="box-click" data-bs-dismiss="offcanvas" aria-label="Close">
      <FontAwesomeIcon icon={faXmark} className='fa-xl text-black'/> 
    </a>
  </div>
  <div class="offcanvas-body px-4">
    <div className='mb-5'>
      <div className='fw-bolder mb-2 font-2 fs-3 highlight'>MENU</div>
        <div className='row row-cols-1 row-cols-md-1 fs-4'>
          <NavLink exact='true' to="/about" className="box-click mb-2 text-black" title="Profile" onClick={handleNavLinkClick}>프로필</NavLink>
          <NavLink exact='true' to="/project" className="box-click mb-2 text-black" title="Project" onClick={handleNavLinkClick}>프로젝트</NavLink>
          <NavLink exact='true' to="/blog" className="box-click mb-2 text-black" title="blog" onClick={handleNavLinkClick}>블로그</NavLink>
          <a href="https://github.com/starting-run" target='_blank' className="box-click text-black" title="Github" onClick={handleNavLinkClick}>깃허브 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7' id='github-icon'/></a>
        </div>
    </div>
    <div className='mb-5'>
      <div className='fw-bolder mb-2 font-2 fs-3 highlight'>GAMES</div>
        <div className='row row-cols-1 row-cols-md-1'>
          <a className='col box-click mb-5' href="https://orbit.starting.run">
            <div className='row row-cols-1'>
              <div class="col-12 rounded-4 border-0 ">
                <video className="card-image-navbar-hamburger rounded-4" autoPlay muted loop>
                  <source src={games_orbit} type="video/mp4" />
                  </video>
              </div>
              <div class="col-12 px-3">
                <div class="card-title fw-bolder mb-1 text-black fs-4">Orbit</div>
                <div class="card-text text-black">AI에게 지배당한 세상을 구원하라</div>
              </div>
            </div>
          </a>
          <a className='col box-click' href="https://embers.starting.run">
            <div className='row row-cols-1'>
              <div class="col-12 rounded-4 border-0 ">
                <video className="card-image-navbar-hamburger rounded-4" autoPlay muted loop>
                  <source src={games_embers} type="video/mp4" />
                  </video>
              </div>
              <div class="col-12 px-3">
                <div class="card-title fw-bolder mb-1 text-black fs-4">잉걸불</div>
                <div class="card-text text-black">지친 마음을 달래며 힐링하는 MMORPG</div>
              </div>
            </div>
          </a>
        </div>
      </div>
  </div>
</div>
      </div>
    </header>
  );
}

export default Nav;
