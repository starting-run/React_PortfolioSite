/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React from 'react';
import logo from '../../images/logo_big.png'
import video from '../../images/main_video.mp4'

function Home_2() {

    return (
      <div className="mb-2 intro-background">
        <div className="bg bg_type1 text-only-white shadow-md ">
        <div class="bg-video-prj">
          <video class="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
        </div>
          <div class="bg_logo">
            <div class=""><img src={logo} className=''></img></div>
            <div class="fs-5 text-center"><span class="fw-bold2">가장 잘하는 방식으로</span> 즐거움을 만들기 위해 노력합니다.</div></div>
        </div>
      </div>
    );
  };

  export default Home_2;