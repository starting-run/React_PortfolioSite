/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import intro from '../../images/Unity/Orbit/intro.mp4';
import poster from '../../images/Unity/Orbit/main1.png';
import intro1 from '../../images/projects/portfolio_website/intro_video.mp4';
import poster1 from '../../images/portfolio.png';
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
  
  // 드래그 관련 상태 추가
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

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

  // 드래그 시작
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setDragDistance(0);
  };

  // 드래그 중
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    setDragDistance(Math.abs(walk));

    // 드래그 거리가 50px 이상일 때만 스크롤 적용
    if (Math.abs(walk) > 50) {
      const direction = walk > 0 ? -1 : 1;
      scrollToSection(currentSection + direction);
      setIsDragging(false);
    }
  };

  // 드래그 종료
  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    // 드래그 거리가 50px 미만일 경우 원래 섹션으로 돌아감
    if (dragDistance < 50) {
      scrollToSection(currentSection);
    }
    
    setIsDragging(false);
  };

  // 드래그가 창 밖으로 나갔을 때도 종료
  const handleMouseLeaveContainer = () => {
    if (isDragging) {
      handleMouseUp();
    }
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
    }, 50);

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
        <div className="container_hor_top">
          <div className="container_hor">
            <div 
              className="scroll-container_hor" 
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeaveContainer}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
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
                    <NavLink to='project/orbit'><span className='btn btn-sm btn-dark-square px-3 py-2 me-sm-3 fs-7 fw-bold rounded-3'>View　<FontAwesomeIcon icon={faArrowRight}/></span></NavLink>
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
                    <NavLink to='project/lethaldeliveryvr'><span className='btn btn-sm btn-dark-square px-3 py-2 me-sm-3 fs-7 fw-bold rounded-3'>View　<FontAwesomeIcon icon={faArrowRight}/></span></NavLink>
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
                    <NavLink to='project/mazeforest'><span className='btn btn-sm btn-dark-square px-3 py-2 me-sm-3 fs-7 fw-bold rounded-3'>View　<FontAwesomeIcon icon={faArrowRight}/></span></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress-container_hor">
        <div className="progress-bar_hor" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default Home_1;