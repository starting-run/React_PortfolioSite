import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import  SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import  { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import project1 from '../../images/snake.jpg';
import project2 from '../../images/ironman.jpg';
import project3 from '../../images/pacman.jpg';
import project4 from '../../images/portfolio.png';

function HomeSection2() {
    SwiperCore.use([Autoplay]);
    return (
    <div>
        <div>
            <div class="container-xxl px-3 mb-4 fs-1 pe-4 text-black">
                <FontAwesomeIcon icon={faBrush}/> 꾸준히 만들어나가는 창작물
            </div>
            <Swiper
                className='project-slider cards'
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={22}
                slidesPerView={3.5}
                loop={true}
                autoplay={{
                    delay: 3000,
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
        <div class="img-fluid">
            <NavLink to="/project/website" id="website">
                <Fade bottom delay={50}>
                    <div class="col">
                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0   ">
                            <img class="card-image-main" src ={project4}></img>
                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">포트폴리오 웹사이트<div class="kor-hidden">portfolio website</div></span>
                                <ul class="list-unstyled mt-auto small2">
                                    <li class="d-flex align-items-center me-3 mb-5">
                                        <span class="">2023. 10. - 2024. 02.</span>
                                    </li>
                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span class="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="img-fluid">
            <NavLink to="/project/pacman" id="pacman">
                <Fade bottom delay={100}>
                    <div class="col">
                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0   ">
                            <img class="card-image-main" src ={project3}></img>
                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">팩맨 게임<div class="kor-hidden">pacman game</div></span>
                                <ul class="list-unstyled mt-auto small2">
                                    <li class="d-flex align-items-center me-3 mb-4">
                                        <span class="">2023. 10.</span>
                                    </li>
                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span class="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="img-fluid">
            <NavLink to="/project/ironman" id="ironman">
                <Fade bottom delay={150}>
                    <div class="col">
                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0   ">
                            <img class="card-image-main" src ={project2}></img>
                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">아이언맨 모델<div class="kor-hidden">ironman model</div></span>
                                <ul class="list-unstyled mt-auto small2">
                                    <li class="d-flex align-items-center me-3 mb-4">
                                        <span class="">2021. 06.</span>
                                    </li>
                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span class="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="img-fluid">
            <NavLink to="/project/snake" id="ironman">
                <Fade bottom delay={200}>
                    <div class="col">
                        <div class="card card-cover-main h-100 overflow-hidden text-black  card-border-0   ">
                            <img class="card-image-main" src ={project1}></img>
                            <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">스네이크 게임<div class="kor-hidden">Snake game</div></span>
                                <ul class="list-unstyled mt-auto small2">
                                    <li class="d-flex align-items-center me-3 mb-4">
                                        <span class="">2020. 06.</span>
                                    </li>
                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span class="text-end fs-4 card-in-arrow">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </NavLink>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="img-fluid">
            <NavLink to="/project">
                <Fade bottom delay={200}>
                    <div class="col">
                        <div class="card card-cover-main h-100 overflow-hidden card-border-0  bg-danger">
                        <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext mt-3">
                                <span class="country mb-2 fs-2 lh-1 fw-bold font-11">　</span>
                                <ul class="list-unstyled mt-auto small2">
                                    <li class="d-flex align-items-center me-3 mb-4">
                                        <span class="">　</span>
                                    </li>
                                    <span class="text-end fs-4 card-in-text">
                                            <div class="fs-1 px-4 mx-2 mb-1-5 text-only-white fw-bold2">프로젝트를 한 번에<br/>확인하세요!</div>
                                        </span>
                                    <li class="d-flex align-items-center mt-5 city pt-7 pb-5">
                                        <span class="text-end fs-4 card-in-arrow">
                                            <div class="fs-6 px-4 mx-2 mb-1-5 text-only-white">프로젝트 바로가기</div>
                                        </span>
                                        <span class="text-end fs-4 card-in-arrow ">
                                            <FontAwesomeIcon icon={faCircleArrowRight}/>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
            </NavLink>
        </div>
        </SwiperSlide>
    </Swiper>
        <div class="justify-content-center d-flex font-11 fs-1 p-4 text-black pt-6">포트폴리오 확장을 위해 계속 노력하고 있습니다!</div>
            <div class="main__action text-center pb-5">
                <div className="main__scroll">
                    <div class="main__scroll-box">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

  export default HomeSection2;