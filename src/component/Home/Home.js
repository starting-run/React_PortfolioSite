/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://usfree.site
*/

import React from 'react';
import { Helmet } from 'react-helmet';
import Home_1 from './Home_1';
import Home_2 from './Home_2';
import Home_3 from './Home_3';
import Home_4 from './Home_4';
import Home_5 from './Home_5';
import { motion } from 'framer-motion';

function Home() {
    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Helmet><title>USFREE | Woohyun Cho</title></Helmet>
        <div className="bg-white-gray">
            <Home_1/>
            <Home_2/>
            <Home_3/>
            {/*<Home_4/>*/}
            <Home_5/>
        </div>
    </motion.div>
    );
}

  export default Home;