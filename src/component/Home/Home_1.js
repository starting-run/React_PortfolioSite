import React, { useEffect, useRef, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import intro from '../../images/Unity/Orbit/intro.mp4';
import intro1 from '../../images/projects/portfolio_website/intro_video.mp4';
import intro2 from '../../images/Pacman/Processing_Pacman.mp4'
import intro3 from '../../images/OpenGL/ironman.mp4'
import intro4 from '../../images/Unity/Unity_Snake.mp4'

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
      <div className="container_hor">
        <button className="scroll-button_hor left_hor fs-0-5 font-7" onClick={handlePrevSection}>
          &lt;
        </button>
        <div className="scroll-container_hor" ref={scrollRef}>

          <div className="section_hor">
            <video class="background-video_hor" autoPlay muted loop>
                <source src={intro} type="video/mp4" />
            </video>
            <div className="text-container_hor">
                <div className="text-content_hor text-black">
                <p className="font-11 font-letter-space fs-0-5 fw-bold2 text-shadow-1">오르빗</p>
                <p className="font-11 font-letter-space fs-3 fs-bold3 text-shadow-1">AI에게 지배당한 세계로부터 지구를 구원하라</p>
                <NavLink to="project/orbit" id="orbit" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold">
                    더보기　<FontAwesomeIcon icon={faCircleArrowRight}/>
                </NavLink>
                </div>
            </div>
          </div>

          <div className="section_hor">
                <video class="background-video_hor" autoPlay muted loop>
                    <source src={intro2} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                    <div className="text-content_hor text-black">
                    <p className="font-11 font-letter-space fs-0-5 fw-bold2 text-shadow-1">팩맨 게임</p>
                    <p className="font-11 font-letter-space fs-3 fs-bold3 text-shadow-1">Processing으로 구현된 그 시절 팩맨 게임</p>
                    <NavLink to="project/pacman" id="pacman" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold">
                        더보기　<FontAwesomeIcon icon={faCircleArrowRight}/>
                    </NavLink>
                    </div>
                </div>
          </div>

          <div className="section_hor">
                <video class="background-video_hor" autoPlay muted loop>
                    <source src={intro3} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                    <div className="text-content_hor text-black">
                    <p className="font-11 font-letter-space fs-0-5 fw-bold2 text-shadow-1">아이언맨 모델</p>
                    <p className="font-11 font-letter-space fs-3 fs-bold3 text-shadow-1">OpenGL을 사용해 구현된 아이언맨 모델</p>
                    <NavLink to="project/ironman" id="ironman" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold">
                        더보기　<FontAwesomeIcon icon={faCircleArrowRight}/>
                    </NavLink>
                    </div>
                </div>
          </div>

          <div className="section_hor">
                <video class="background-video_hor" autoPlay muted loop>
                    <source src={intro4} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                    <div className="text-content_hor text-black">
                    <p className="font-11 font-letter-space fs-0-5 fw-bold2 text-shadow-1">스네이크 게임</p>
                    <p className="font-11 font-letter-space fs-2 fs-bold3 text-shadow-1">Unity로 개발된 간단한 게임</p>
                    <NavLink to="project/snake" id="snake" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold">
                        더보기　<FontAwesomeIcon icon={faCircleArrowRight}/>
                    </NavLink>
                    </div>
                </div>
          </div>

          <div className="section_hor">
                <video class="background-video_hor" autoPlay muted loop>
                    <source src={intro1} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                    <div className="text-content_hor text-black">
                    <p className="font-11 font-letter-space fs-0-5 fw-bold2 text-shadow-1">포트폴리오 웹사이트</p>
                    <p className="font-11 font-letter-space fs-3 fs-bold3 text-shadow-1">포트폴리오를 효율적으로 게시하기 위한 웹사이트</p>
                    <NavLink to="project/website" id="website" className="btn btn-dark-square px-4 py-2-5 fs-5 fw-bold">
                        더보기　<FontAwesomeIcon icon={faCircleArrowRight}/>
                    </NavLink>
                    </div>
                </div>
          </div>

        </div>
        <button className="scroll-button_hor right_hor fs-0-5 font-7" onClick={handleNextSection}>
          &gt;
        </button>
        <div className="progress-container_hor">
            <div className="progress-bar_hor" style={{ width: `${progress}%` }} />
        </div>
        <div className="scroll-down-indicator_hor">
          <div class="scroll_icon"><span></span><span></span><span></span></div>
        </div>
      </div>
    );
  };

  export default Home_1;