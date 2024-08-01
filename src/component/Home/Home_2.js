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
      <div className="mb-2 intro-background rounded-4-bottom">
        <div className="bg bg_type1 text-black shadow-md rounded-4-bottom">
          <div class="bg-video-prj">
            <video class="bg-video__content" autoPlay muted loop poster={poster}>
              <source src={video} type="video/mp4" />
          </video>
          </div>
          <div class="bg_logo">
            <div class=""><img className='big_logoimg'></img></div>
            <div class="fs-5 text-center"><span class="fw-bold2">가장 잘하는 방식으로</span> 사람들에게 즐거움을 줍니다.</div>
          </div>
        </div>
        <div className="scroll-down-indicator_hor">
          <div className="scroll_icon"><span></span><span></span><span></span></div>
        </div>
      </div>
    );
  };

  export default Home_2;