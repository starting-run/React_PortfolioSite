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
            <div className="fs-1 text-center fw-light"><span className="fw-bold">가장 잘하고 좋아하는 방식으로</span><br/>모두에게 즐거움을 줍니다</div>
          </div>
        </div>
        <div className="scroll-down-indicator_hor scroll-down-indicator_hor-bottom">
          <div className="scroll_icon"><span></span><span></span><span></span></div>
        </div>
      </div>
    );
  };

  export default Home_2;