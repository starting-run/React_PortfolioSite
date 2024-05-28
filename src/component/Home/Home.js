import React from 'react';
import { Helmet } from 'react-helmet';
import HomeSection2 from './HomeSection2';
import HomeSection1 from './HomeSection1';
import Home_1 from './Home_1';
import Home_3 from './Home_3';

function Home() {
    return (
    <div>
        <Helmet><title>USFREE | Woohyun Cho</title></Helmet>
        <div class="bg-white-gray">
            <Home_1/>
            <HomeSection1/>
            <Home_3/>
            <HomeSection2/>
        </div>
    </div>
    );
}

  export default Home;