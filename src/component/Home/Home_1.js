/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import intro from '../../images/Unity/Orbit/main_video.mp4';
import poster from '../../images/Unity/Orbit/main1.png';

import intro1 from '../../images/projects/portfolio_website/intro_video.mp4';
import poster1 from '../../images/portfolio.png';

import intro2 from '../../images/Pacman/Processing_Pacman.mp4';
import poster2 from '../../images/Pacman/poster_pacman.png';

import intro3 from '../../images/OpenGL/ironman.mp4';
import poster3 from '../../images/OpenGL/poster_ironman.png';

import intro4 from '../../images/Unity/LethalDeliveryVR/video.mp4';
import poster4 from '../../images/Unity/LethalDeliveryVR/logo.png';

import intro5 from '../../images/Unity/MazeForest/intro.mp4';
import poster5 from '../../images/Unity/MazeForest/poster_mazeforest.png';

import intro6 from '../../images/Unity/LethalDeliveryVR/video_short.mp4';

function Home_1() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = useRef([]);
  const containerOutRef = useRef(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = (videoSrc) => {
    setHoveredVideo(videoSrc);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
    <div className="container_hor-out" ref={containerOutRef}>
      {hoveredVideo && (
        <video
          className={`blur-video ${isHovered ? 'visible' : ''}`}
          src={hoveredVideo}
          autoPlay
          muted
          loop
        />
      )}
      <div className="scroll-button_container_hor">
        <button className="scroll-button_hor left_hor fs-0-5 font-7" onClick={handlePrevSection}>
          &lt;
        </button>
        <div className="container_hor_top">
          <div className="container_hor">
            <div className="scroll-container_hor" ref={scrollRef}>
              <div
                className="section_hor"
                onMouseEnter={() => handleMouseEnter(intro)}
                onMouseLeave={handleMouseLeave}
              >
                <video className="background-video_hor" poster={poster} autoPlay muted loop>
                  <source src={intro} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                  <div className="text-content_hor text-black">
                    <div className="font-11 font-letter-space fs-1 fw-bold2">오르빗</div>
                    <div className="font-11 font-letter-space fs-5 fs-bold3 mb-4">인공지능에게 지배당한 세계로부터 지구를 구원하라</div>
                    <NavLink to="project/orbit" id="orbit" className="btn btn-dark-square px-4 py-2 fs-5 fw-bold rounded-4">
                      자세히 <FontAwesomeIcon icon={faCircleArrowRight} />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="section_hor"
                onMouseEnter={() => handleMouseEnter(intro4)}
                onMouseLeave={handleMouseLeave}
              >
                <video className="background-video_hor" poster={poster4} autoPlay muted loop>
                  <source src={intro6} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                  <div className="text-content_hor text-black">
                    <div className="font-11 font-letter-space fs-1 fw-bold2">리썰딜리버리</div>
                    <div className="font-11 font-letter-space fs-5 fs-bold3 mb-4">리썰컴퍼니를 원작으로 VR로 제작된 수집/생존 게임</div>
                    <NavLink to="project/rethaldelivery" id="rethaldelivery" className="btn btn-dark-square px-4 py-2 fs-5 fw-bold rounded-4">
                      자세히 <FontAwesomeIcon icon={faCircleArrowRight} />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="section_hor"
                onMouseEnter={() => handleMouseEnter(intro5)}
                onMouseLeave={handleMouseLeave}
              >
                <video className="background-video_hor" poster={poster5} autoPlay muted loop>
                  <source src={intro5} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                  <div className="text-content_hor text-black">
                    <div className="font-11 font-letter-space fs-1 fw-bold2">미로의 숲</div>
                    <div className="font-11 font-letter-space fs-5 fs-bold3 mb-4">문제를 풀고 미로의 숲을 빠져나가야 하는 교육용 게임</div>
                    <NavLink to="project/mazeforest" id="mazeforest" className="btn btn-dark-square px-4 py-2 fs-5 fw-bold rounded-4">
                      자세히 <FontAwesomeIcon icon={faCircleArrowRight} />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="section_hor"
                onMouseEnter={() => handleMouseEnter(intro2)}
                onMouseLeave={handleMouseLeave}
              >
                <video className="background-video_hor" poster={poster2} autoPlay muted loop>
                  <source src={intro2} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                  <div className="text-content_hor text-black">
                    <div className="font-11 font-letter-space fs-1 fw-bold2">팩맨 게임</div>
                    <div className="font-11 font-letter-space fs-5 fs-bold3 mb-4">프로세싱으로 구현된 팩맨 게임</div>
                    <NavLink to="project/pacman" id="pacman" className="btn btn-dark-square px-4 py-2 fs-5 fw-bold rounded-4">
                      자세히 <FontAwesomeIcon icon={faCircleArrowRight} />
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="section_hor"
                onMouseEnter={() => handleMouseEnter(intro3)}
                onMouseLeave={handleMouseLeave}
              >
                <video className="background-video_hor" poster={poster3} autoPlay muted loop>
                  <source src={intro3} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                  <div className="text-content_hor text-black">
                    <div className="font-11 font-letter-space fs-1 fw-bold2">아이언맨 모델</div>
                    <div className="font-11 font-letter-space fs-5 fs-bold3 mb-4">OpenGL을 사용해 구현된 아이언맨 모델</div>
                    <NavLink to="project/ironman" id="ironman" className="btn btn-dark-square px-4 py-2 fs-5 fw-bold rounded-4">
                      자세히 <FontAwesomeIcon icon={faCircleArrowRight} />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="section_hor"
                onMouseEnter={() => handleMouseEnter(intro1)}
                onMouseLeave={handleMouseLeave}
              >
                <video className="background-video_hor" poster={poster1} autoPlay muted loop>
                  <source src={intro1} type="video/mp4" />
                </video>
                <div className="text-container_hor">
                  <div className="text-content_hor text-black">
                    <div className="font-11 font-letter-space fs-1 fw-bold2">포트폴리오 웹사이트</div>
                    <div className="font-11 font-letter-space fs-5 fs-bold3 mb-4">제작된 포트폴리오를 정리하여 게시하기 위한 웹사이트</div>
                    <NavLink to="project/website" id="website" className="btn btn-dark-square px-4 py-2 fs-5 fw-bold rounded-4">
                      자세히 <FontAwesomeIcon icon={faCircleArrowRight} />
                    </NavLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <button className="scroll-button_hor right_hor fs-0-5 font-7" onClick={handleNextSection}>
          &gt;
        </button>
      </div>
      <div className="progress-container_hor">
        <div className="progress-bar_hor" style={{ width: `${progress}%` }} />
      </div>
      <div className="scroll-down-indicator_hor">
          <div className="scroll_icon"><span></span><span></span><span></span></div>
        </div>
    </div>
  );
}

export default Home_1;
