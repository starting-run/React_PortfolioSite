/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { Component, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faChartBar, faCircleArrowUp, faCode, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';


function Contact() {
    const notify = () => toast.success('메일 주소가 복사 되었습니다. 원하는 곳에 붙여넣을 수 있습니다.', {duration: 4000});
    useEffect(() => {
        //notify();
      }, []);

    const copyText = () => {
        const textToCopy = "ploris576@kangnam.ac.kr"; // 여기에 복사할 텍스트를 입력하세요.
        navigator.clipboard.writeText(textToCopy).then(() => {
            notify();
        }).catch(err => {
          console.error("텍스트 복사 실패:", err);
        });
    };
      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet><title>Contact | STARTING</title></Helmet>
            <section className="bg-white-gray min-vh-100">
                <div className="container-xxl px-4 pt-6">
                    <div className="row justify-content-center">
                        <div className="mb-5 pt-5">
                        {/*<div className="font-11 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/profile">Profile</NavLink></div>*/}
                        <div className="fs-0-7 font-2 fw-normal font-letter-space-lg text-black text-uppercase">CONTACT</div>
                        <div className="mb-5 fs-1 font-11 fw-normal font-letter-space-sm text-black text-uppercase">연락처</div>
                            {/*<div className="text-start">
                                <div className="h-100 font-11 text-black fs-6 font-letter-space text-uppercase mb-5 pb-5">
                                    <div className="fw-normal">Woohyun Cho</div>
                                    <div className="fw-bold2 highlight">Developer Portfolio</div>
                                </div>
                            </div>*/}
                            <div className="container-md">
                                <div className="row row-cols-1 row-cols-xxl-1 g-4">
                                    <div className="col">
                                        <div className="overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Contact</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-1 row-cols-xxl-1 p-2 rounded-4 mx-2">
                                                <div className="col">
                                                    <a onClick={copyText} target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-mail h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faAt}/>　메일</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 only-pc-view align-middle">ploris576@kangnam.ac.kr　</span>
                                                                            <FontAwesomeIcon icon={faCopy}/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://instagram.com/w99hyun" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-insta h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faInstagram}/>　인스타그램</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">w99hyun　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden py-2">
                                            <div className="text-black font-11 fs-5 fw-bold m-2">Link</div>
                                            <hr className='text-black hr-w2'/>
                                            <div className="row row-cols-1 row-cols-xxl-1 p-2 rounded-4 mx-2">
                                                <div className="col">
                                                    <a href="https://github.com/starting-run" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-git h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faGithub}/>　깃허브</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">starting-run　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://velog.io/@usfree" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-blog h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faVimeo}/>　블로그</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">usfree　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://www.acmicpc.net/user/tlrmsjtm77" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-boj h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faCode}/>　백준</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">tlrmsjtm77　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://codeforces.com/profile/tlrmsjtm77" target='_blank'>
                                                        <div className="img-fluid mb-3">
                                                            <div className="col">
                                                                <div className="card card-cover-codeforces h-100 overflow-hidden rounded-4">
                                                                    <div className="d-flex flex-column h-100 p-3 card-overtext px-4">
                                                                        <span className="fs-6 fw-normal font-11 text-start"><FontAwesomeIcon icon={faChartBar}/>　Codeforces</span>
                                                                        <span className="text-end fs-4 card-in-arrow">
                                                                            <span className="fs-6 px-2 align-middle">tlrmsjtm77　</span>
                                                                            <FontAwesomeIcon icon={faCircleArrowUp} className='rot-45deg'/>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
      );
    }

  export default Contact;