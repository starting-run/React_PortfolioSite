/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { Component, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Home_5 from './Home/Home_5';

function Blog() {
    const notify = () => toast('msg', {duration: 4000});
    useEffect(() => {
        //notify();
      }, []);
      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet><title>블로그 - starting</title></Helmet>
            <section className="bg-white-gray h-100">
                <div className="container-xxl px-4 pt-6">
                    <div className="row justify-content-center">
                        <div className="mb-5">
                        {/*<div className="font-11 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/profile">Profile</NavLink></div>*/}
                            <div className="mb-5 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">블로그</div>
                            <div className=''>개편 중 입니다!</div>
                            {/*<div className="text-start">
                                <div className="h-100 font-11 text-black fs-6 font-letter-space text-uppercase mb-5 pb-5">
                                    <div className="fw-normal">Woohyun Cho</div>
                                    <div className="fw-bold2 highlight">Developer Portfolio</div>
                                </div>
                            </div>*/}
                            <Home_5/>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
      );
    }

  export default Blog;