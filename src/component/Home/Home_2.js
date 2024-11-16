/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { useEffect, useState } from 'react';
import darkVideo from '../../images/main_video.mp4';
import lightVideo from '../../images/main_video-white.mp4';

function Home_2() {
  const [videoSrc, setVideoSrc] = useState(lightVideo); // 기본값을 lightVideo로 설정

  useEffect(() => {
    const updateVideoSource = () => {
      const darkModeAttribute = document.body.getAttribute('data-darkmode');
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // data-darkmode 속성이 있는 경우
      if (darkModeAttribute !== null) {
        setVideoSrc(darkModeAttribute === 'on' ? darkVideo : lightVideo);
        return;
      }
      
      // data-darkmode 속성이 없는 경우 시스템 설정 사용
      setVideoSrc(systemDarkMode ? darkVideo : lightVideo);
    };

    // 초기 비디오 소스 설정
    updateVideoSource();

    // System dark mode 변경 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateVideoSource);

    // data-darkmode 속성 변경 감지
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-darkmode') {
          updateVideoSource();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-darkmode']
    });

    // 디버깅을 위한 로그
    console.log('Current data-darkmode:', document.body.getAttribute('data-darkmode'));
    console.log('System dark mode:', window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log('Selected video:', videoSrc === darkVideo ? 'dark' : 'light');

    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', updateVideoSource);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mb-2 intro-background">
      <div className="bg bg_type1 text-black shadow-md">
        <div className="bg-video-prj">
          <video className="bg-video__content" autoPlay muted loop key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="bg_logo font-2 text-black mix-blend">
          <div className="text-center fw-light">
            <span className="fw-bold fs-0">
              Fun for{' '}
              <span className="reveal-text">
                <span className="reveal-text-inner card-cover-sec2-2 pt-2 px-2">everyone</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="scroll-down-indicator_hor scroll-down-indicator_hor-bottom">
        <div className="scroll_icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Home_2;