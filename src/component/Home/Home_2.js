/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React from 'react';
import video from '../../images/main_video.mp4'
import poster from '../../images/main_video_poster.png';

function Home_2() {
  return (
    <div className="mb-2 intro-background">
      <div className="bg bg_type1 text-black shadow-md">
        <div className="bg-video-prj">
          <video className="bg-video__content" autoPlay muted loop poster={poster}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="bg_logo">
          {/* <div className=""><img className='big_logoimg'></img></div> */}
          <div className="fs-0-5 text-center fw-light">In the way that I do best and like<br/><span className="fw-bold">Fun for everyone</span></div>
        </div>
      </div>
      <div className="scroll-down-indicator_hor scroll-down-indicator_hor-bottom">
        <div className="scroll_icon"><span></span><span></span><span></span></div>
      </div>
    </div>
  );
};

export default Home_2;