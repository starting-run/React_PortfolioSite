/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import  SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import  { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import project2 from '../../images/ironman.jpg';
import project3 from '../../images/pacman.jpg';
import project4 from '../../images/portfolio.png';
import project5 from '../../images/Unity/LethalDeliveryVR/thum1.png';
import project6 from '../../images/Unity/Orbit/icon_move.mp4';
import project7 from '../../images/Unity/MazeForest/logo.png';

function Home_4() {
    SwiperCore.use([Autoplay]);
    return (
    <div>
        <div>
            {/*<div className="container-xxl px-3 mb-4 fs-3 pe-4 text-black" id="home_project">
                <FontAwesomeIcon icon={faBrush}/> 꾸준히 만들어나가는 창작물
            </div>*/}
            <Swiper
                className='project-slider cards'
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={22}
                slidesPerView={3.5}
                loop={true}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false
                }}
                speed={6000} //add
                navigation={false}
                pagination={{ clickable: true }}
                breakpoints={{
                    360: {
                    slidesPerView: 1.5,
                    spaceBetween: 22,
                    },
                    1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 22,
                    },
                    1400: {
                    slidesPerView: 3.5,
                    spaceBetween: 22,
                    },
                }}
            >
        <SwiperSlide>
        <div className="img-fluid">
            <NavLink to="/project/orbit" id="orbit">
                    <div className="col">
                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                            <video className="card-image-main video-filter" autoPlay muted loop>
                                <source src={project6} type="video/mp4" />
                            </video>
                            <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span className="country mb-2 fs-2 lh-1 fw-bold font-11">오르빗 <span class="btn btn-sm btn-primary-round-outline">게임</span></span>
                                <ul className="list-unstyled mt-auto small2">
                                    <li className="d-flex align-items-center me-3 mb-5">
                                        <span className="">2024. 03. - 개발 중</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span className="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-fluid">
            <NavLink to="/project/lethaldeliveryvr" id="lethaldeliveryvr">
                <div className="col">
                    <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                    <img className="card-image-main" src ={project5}></img>
                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                            <span className="country mb-2 fs-2 lh-1 fw-bold font-11 no_enter">리썰딜리버리 <span class="btn btn-sm btn-primary-round-outline">VR게임</span></span>
                            <ul className="list-unstyled mt-auto small2">
                                <li className="d-flex align-items-center me-3 mb-5">
                                    <span className="">2024. 04. 15. - 06. 10.</span>
                                </li>
                                <li className="d-flex align-items-center mt-5 city pt-7 pb-5">
                                    <span className="text-end fs-4 card-in-arrow">
                                        <FontAwesomeIcon icon={faCircleArrowRight}/>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-fluid">
            <NavLink to="/project/mazeforest" id="mazeforest">
                <div className="col">
                    <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                    <img className="card-image-main" src ={project7}></img>
                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                            <span className="country mb-2 fs-2 lh-1 fw-bold font-11 no_enter">미로의 숲 <span class="btn btn-sm btn-primary-round-outline">교육용 게임</span><div className="kor-hidden">maze forest, 유니티, 씨샵, C#, Unity</div></span>
                            <ul className="list-unstyled mt-auto small2">
                                <li className="d-flex align-items-center me-3 mb-5">
                                    <span className="">2024. 06. 05. - 06. 11.</span>
                                </li>
                                <li className="d-flex align-items-center mt-5 city pt-7 pb-5">
                                    <span className="text-end fs-4 card-in-arrow">
                                        <FontAwesomeIcon icon={faCircleArrowRight}/>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-fluid">
            <NavLink to="/project/website" id="website">
                    <div className="col">
                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                            <img className="card-image-main" src ={project4}></img>
                            <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span className="country mb-2 fs-2 lh-1 fw-bold font-11">포트폴리오 <span class="btn btn-sm btn-primary-round-outline">프론트</span><div className="kor-hidden">portfolio website</div></span>
                                <ul className="list-unstyled mt-auto small2">
                                    <li className="d-flex align-items-center me-3 mb-5">
                                        <span className="">2023. 10. - 2024. 02.</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span className="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-fluid">
            <NavLink to="/project/pacman" id="pacman">
                    <div className="col">
                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                            <img className="card-image-main" src ={project3}></img>
                            <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span className="country mb-2 fs-2 lh-1 fw-bold font-11">팩맨 <span class="btn btn-sm btn-primary-round-outline">게임</span><div className="kor-hidden">pacman game</div></span>
                                <ul className="list-unstyled mt-auto small2">
                                    <li className="d-flex align-items-center me-3 mb-4">
                                        <span className="">2023. 10.</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span className="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-fluid">
            <NavLink to="/project/ironman" id="ironman">
                    <div className="col">
                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                            <img className="card-image-main" src ={project2}></img>
                            <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span className="country mb-2 fs-2 lh-1 fw-bold font-11">아이언맨 <span class="btn btn-sm btn-primary-round-outline">모델</span><div className="kor-hidden">ironman model</div></span>
                                <ul className="list-unstyled mt-auto small2">
                                    <li className="d-flex align-items-center me-3 mb-4">
                                        <span className="">2021. 06.</span>
                                    </li>
                                    <li className="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span className="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img-fluid">
            <NavLink to="/project">
                    <div className="col">
                        <div className="card card-cover-main h-100 overflow-hidden card-border-0  bg-danger rounded-4">
                        <div className="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span className="country mb-2 fs-2 lh-1 fw-bold font-11">　</span>
                                <ul className="list-unstyled mt-auto small2">
                                    <li className="d-flex align-items-center me-3 mb-4">
                                        <span className="">　</span>
                                    </li>
                                    <span className="text-end fs-4 card-in-text">
                                            <div className="fs-2 px-4 mb-1-5 text-only-white fw-bold font-11 no_enter">프로젝트를 한 번에<br/>확인하세요!</div>
                                        </span>
                                    <li className="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span className="text-end fs-4 card-in-arrow">
                                            <div className="fs-6 px-4 mx-2 mb-1-5 text-only-white">전체 프로젝트 바로가기</div>
                                        </span>
                                        <span className="text-end fs-4 card-in-arrow ">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </NavLink>
        </div>
        </SwiperSlide>
    </Swiper>
    {/*
        <div className="justify-content-center d-flex font-11 fs-1 p-4 text-black pt-6">포트폴리오 확장을 위해 계속 노력하고 있습니다!</div>
            <div className="main__action text-center pb-5">
                <HashLink smooth to="#home_add" className="main__scroll">
                    <div className="main__scroll-box">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"></path>
                        </svg>
                    </div>
                </HashLink>
            </div>*/}
        </div>
    </div>
    );
}

  export default Home_4;