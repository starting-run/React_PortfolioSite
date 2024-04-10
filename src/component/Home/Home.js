import React from 'react';
import { Helmet } from 'react-helmet';
import HomeSection2 from './HomeSection2';
import HomeSection3 from './HomeSection3';
import HomeSection1 from './HomeSection1';

function Home() {
    return (
    <div>
        <Helmet><title>USFREE | Woohyun Cho</title></Helmet>
        <div class="bg-white-gray">
            <HomeSection1/>
            <HomeSection2/>
            <HomeSection3/>
        </div>
    </div>
    );
}

  export default Home;