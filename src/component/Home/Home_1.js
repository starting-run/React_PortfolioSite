import React, { useEffect, useRef, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import intro from '../../images/Unity/Orbit/main_video.mp4';
import poster from '../../images/Unity/Orbit/main1.png';

import intro1 from '../../images/projects/portfolio_website/intro_video.mp4';
import poster1 from '../../images/sec3.png';

import intro2 from '../../images/Pacman/Processing_Pacman.mp4';
import poster2 from '../../images/Pacman/poster_pacman.png';

import intro3 from '../../images/OpenGL/ironman.mp4';
import poster3 from '../../images/OpenGL/poster_ironman.png';

import intro4 from '../../images/Unity/Unity_Snake.mp4';
import poster4 from '../../images/Unity/poster_snake.png';

function Home_1() {
    const scrollRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const sections = useRef([]);
  
    const resetProgress = () => {
      setProgress(0);
    };
  
    const scrollToSection = (index) => {
      if (index < 0) {
        index = sections.current.length - 1;
      } else if (index >= sections.current.length) {
        index = 0;
      }
      setCurrentSection(index);
      scrollRef.current.scrollTo({
        left: sections.current[index].offsetLeft,
        behavior: 'smooth',
      });
      resetProgress();
    };
  
    const handleNextSection = () => {
      scrollToSection(currentSection + 1);
    };
  
    const handlePrevSection = () => {
      scrollToSection(currentSection - 1);
    };
  
    useEffect(() => {
      sections.current = document.querySelectorAll('.section_hor');
      
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextSection();
            return 0;
          }
          return prev + 1;
        });
      }, 50); // 0.5초마다 1% 증가
  
      return () => {
        clearInterval(progressInterval);
      };
    }, [currentSection]);

    return (
      <div class="container_hor-out ">
        <div class="scroll-button_container_hor">
          <button className="scroll-button_hor left_hor fs-0-5 font-7" onClick={handlePrevSection}>
            &lt;
          </button>
        <div className="container_hor">
          <div className="scroll-container_hor" ref={scrollRef}>

            <div className="section_hor">
              <video className="background-video_hor" poster={poster} autoPlay muted loop>
                  <source src={intro} type="video/mp4" />
              </video>
              <div className="text-container_hor">
                  <div className="text-content_hor text-black">
                  <div className="font-11 font-letter-space fs-0-5 fw-bold2 ">오르빗</div>
                  <div className="font-11 font-letter-space fs-4 fs-bold3 mb-4">인공지능에게 지배당한 세계로부터 지구를 구원하라</div>
                  <NavLink to="project/orbit" id="orbit" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold rounded-4">
                      자세히　<FontAwesomeIcon icon={faCircleArrowRight}/>
                  </NavLink>
                  </div>
              </div>
            </div>

            <div className="section_hor">
                  <video className="background-video_hor " poster={poster2} autoPlay muted loop>
                      <source src={intro2} type="video/mp4" />
                  </video>
                  <div className="text-container_hor">
                      <div className="text-content_hor text-black">
                      <div className="font-11 font-letter-space fs-0-5 fw-bold2 ">팩맨 게임</div>
                      <div className="font-11 font-letter-space fs-4 fs-bold3 mb-4">프로세싱으로 구현된 그 시절 팩맨 게임</div>
                      <NavLink to="project/pacman" id="pacman" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold rounded-4">
                          자세히　<FontAwesomeIcon icon={faCircleArrowRight}/>
                      </NavLink>
                      </div>
                  </div>
            </div>

            <div className="section_hor">
                  <video className="background-video_hor " poster={poster3} autoPlay muted loop>
                      <source src={intro3} type="video/mp4" />
                  </video>
                  <div className="text-container_hor">
                      <div className="text-content_hor text-black">
                      <div className="font-11 font-letter-space fs-0-5 fw-bold2 ">아이언맨 모델</div>
                      <div className="font-11 font-letter-space fs-4 fs-bold3 mb-4">OpenGL을 사용해 구현된 아이언맨 모델</div>
                      <NavLink to="project/ironman" id="ironman" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold rounded-4">
                          자세히　<FontAwesomeIcon icon={faCircleArrowRight}/>
                      </NavLink>
                      </div>
                  </div>
            </div>

            <div className="section_hor">
                  <video className="background-video_hor " poster={poster4} autoPlay muted loop>
                      <source src={intro4} type="video/mp4" />
                  </video>
                  <div className="text-container_hor">
                      <div className="text-content_hor text-black">
                      <div className="font-11 font-letter-space fs-0-5 fw-bold2 ">스네이크 게임</div>
                      <div className="font-11 font-letter-space fs-4 fs-bold3 mb-4">유니티로 개발된 간단한 게임</div>
                      <NavLink to="project/snake" id="snake" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold rounded-4">
                          자세히　<FontAwesomeIcon icon={faCircleArrowRight}/>
                      </NavLink>
                      </div>
                  </div>
            </div>

            <div className="section_hor">
                  <video className="background-video_hor " poster={poster1} autoPlay muted loop>
                      <source src={intro1} type="video/mp4" />
                  </video>
                  <div className="text-container_hor">
                      <div className="text-content_hor text-black">
                      <div className="font-11 font-letter-space fs-0-5 fw-bold2 ">포트폴리오 웹사이트</div>
                      <div className="font-11 font-letter-space fs-4 fs-bold3 mb-4">포트폴리오를 효율적으로 게시하기 위한 웹사이트</div>
                      <NavLink to="project/website" id="website" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold rounded-4">
                          자세히　<FontAwesomeIcon icon={faCircleArrowRight}/>
                      </NavLink>
                      </div>
                  </div>
            </div>

          </div>


          
        </div>
          <button className="scroll-button_hor right_hor fs-0-5 font-7" onClick={handleNextSection}>
            &gt;
          </button>
          <div className="scroll-down-indicator_hor">
            <div className="scroll_icon"><span></span><span></span><span></span></div>
          </div>
        </div>
        <div className="progress-container_hor">
              <div className="progress-bar_hor" style={{ width: `${progress}%` }} />
          </div>
      </div>
    );
  };

  export default Home_1;