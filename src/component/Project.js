/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { useEffect } from 'react';
import project3 from '../images/projects/Pacman/pacman.png';
import project4 from '../images/portfolio.png';
import project5 from '../images/Unity/LethalDeliveryVR/thum1.png';
import project6 from '../images/Unity/Orbit/intro.mp4';
import project7 from '../images/Unity/MazeForest/thum.mp4';
import project8 from '../images/Unity/Embers/Intro.mp4';
import prop1 from '../images/projects/prop1/thum.png';
import prop1pdf from '../images/projects/prop1/rev_prop_focus_on_you.pdf';
import prop2pdf from '../images/projects/prop2/prop_LethalDeliveryVR.pdf';

import unitylogo from '../images/common/unity.jpg';
import reactlogo from '../images/common/react.png';
import unreallogo from '../images/common/unreal.png';
import processinglogo from '../images/common/processing.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faMagnifyingGlass, faMedal, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import $ from 'jquery';
import { motion } from 'framer-motion';

function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("img-fluid");
    let empty = 0;

    for (let i = 0; i < listInner.length; i++) {
        let cityElements = listInner[i].getElementsByClassName("city");
        let countryElements = listInner[i].getElementsByClassName("country");
        let city = cityElements.length > 0 ? cityElements[0].innerHTML.toLowerCase() : "";
        let country = countryElements.length > 0 ? countryElements[0].innerHTML.toLowerCase() : "";

        if (city.indexOf(search) !== -1 || country.indexOf(search) !== -1) {
            listInner[i].style.display = "";
            empty++;
        } else {
            listInner[i].style.display = "none";
        }
    }

    if (empty === 0) {
        $('#search_empty').removeClass('kor-hidden');
    } else {
        $("#search_empty").addClass('kor-hidden');
    }
}

function Project() {
    useEffect(() => {
        const searchInput = document.getElementById('search');
        const clearSearchLabel = document.getElementById('clear-search');
        const labelforsearch = document.getElementById('labelforsearch');

        const handleSearchInput = (event) => {
            if (event.keyCode === 13) {
                filter();
            }
            if (searchInput.value.trim() !== "") {
                clearSearchLabel.style.display = 'visible';
                clearSearchLabel.style.opacity = '1';
            } else {
                clearSearchLabel.style.display = 'hidden';
                clearSearchLabel.style.opacity = '0';
            }
        };

        if (labelforsearch) {
            labelforsearch.addEventListener('click', filter);
        }

        if (searchInput) {
            searchInput.addEventListener('keyup', handleSearchInput);
        }

        if (clearSearchLabel) {
            clearSearchLabel.addEventListener('click', () => {
                if (searchInput) {
                    searchInput.value = '';
                }
                clearSearchLabel.style.display = 'hidden';
                clearSearchLabel.style.opacity = '0';
                filter();
            });
        }

        // Cleanup the event listeners on component unmount
        return () => {
            if (labelforsearch) {
                labelforsearch.removeEventListener('click', filter);
            }

            if (searchInput) {
                searchInput.removeEventListener('keyup', handleSearchInput);
            }

            if (clearSearchLabel) {
                clearSearchLabel.removeEventListener('click', filter);
            }
        };
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 useEffect가 실행되도록 함.

    const notify = () => toast.error('준비중입니다.', {duration: 4000});
    const notify2 = () => toast('2024년 12월 25일부터 개발 시작한 신규 프로젝트입니다. 아직 페이지가 준비되지 않았습니다.', {duration: 6000});

      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet><title>Project | STARTING</title></Helmet>
            <section className="bg-white-gray">
            <div className="container-xxl px-4 pt-6 min-vh-100">
            {/*<div className="font-11 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/project">Project</NavLink></div>*/}
                <div className="row align-items-center justify-content-between pt-5">
                    <div className="col-auto fs-0-7 font-2 fw-bold2 font-letter-space-lg text-black text-uppercase">PROJECT
                        <div className="mb-5 fs-2 font-11 fw-normal font-letter-space-sm text-black text-uppercase">프로젝트</div>
                        {/*<a href="https://github.com/stars/starting-run/lists/project" target='_blank'>
                            <span className="prj-sub fs-6 fw-normal font-11 font-letter-space-sm">　<FontAwesomeIcon icon={faGithub} /> 깃허브에서 모아보기 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg' />
                            </span>
                        </a>*/}
                    </div>
                    <div className="col-auto InputContainer mb-5">
                            <input type="text" name="text" className="input" id="search" placeholder="Search Project"></input> {/* autoFocus */}
                            <label id="clear-search" className="clear-search pe-3 text-black" style={{ display: 'hidden', opacity:'0'}}>
                                <FontAwesomeIcon icon={faTimes} />
                            </label>
                            <label htmlFor="input" className="labelforsearch" id="labelforsearch">
                                <svg viewBox="0 0 512 512" className="searchIcon mb-1"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                            </label>
                        </div>
                    <div className="col-auto mobile-moabogi mb-5">
                        <a href="https://github.com/stars/starting-run/lists/project" target='_blank'>
                        <span className="fs-6 fw-normal font-11"><FontAwesomeIcon icon={faGithub} /> Collect</span>
                        </a>
                    </div> 
                </div>
                <div className="vh-100 kor-hidden" id="search_empty">
                    <div className="mb-3 w-100 card card-cover-nonhover p-3  border-0 rounded-4">
                        <div className="fs-0-5 text-center mb-5 pt-5 text-black"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                        <div className="text-black font-11 fs-5 text-center mb-5"><span className="highlight">검색 결과가 없습니다!</span> 다시 검색해주세요.<br/><br/>검색은 한글과 영어를 모두 지원합니다.<br/>ex) UnrealEngine → 언리얼, 언리얼엔진</div>
                    </div>
                </div>
            <div className='container-md'>    
                <div className="row gx-5 justify-content-center ">
                    <div className="mb-5">
                        <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-4 cards">
                            <div className="col">
                                <NavLink to="embers" id="embers">
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-lg-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-1-5 lh-1 fw-bold2 font-11 mx-3 project-title text-black">잉걸불 <div className="kor-hidden">Embers, 유니티, 씨샵, C#, Unity, 잉걸불, 엠버스</div></div><span className="fs-7 prj-kor-trans">　embers</span>
                                                    <div className='mx-3 fs-6'><span className='btn btn-sm ps-0'><img className="logo-box" src={unitylogo}/></span><span className="text-black">Unity 6 <span class="fs-8">URP</span></span><span className='mx-2 text-black'>|</span><span className="text-black">게임<span className='mx-2 text-black'>|</span><span className="text-black">MMORPG</span></span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        {/* <li className="d-flex align-items-center me-3 mx-3 mt-1">
                                                            <span className="fs-7">2024. 03. - 2024. 11.
                                                            </span>
                                                        </li> */}
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <video className="card-image-main" autoPlay muted loop>
                                                        <source src={project8} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <hr className='text-black hr-w2'/>
                            <div className="col">
                                <NavLink to="orbit" id="orbit">
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-lg-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-1-5 lh-1 fw-bold2 font-11 mx-3 project-title text-black">오르빗 <div className="kor-hidden">Orbit Game, 유니티, 씨샵, C#, Unity, 오르빗</div></div><span className="fs-7 prj-kor-trans">　ORBIT</span>
                                                    <div className='mx-3 fs-6'><span className='btn btn-sm ps-0'><img className="logo-box" src={unitylogo}/></span><span className="text-black">Unity 6 <span class="fs-8">HDRP</span></span><span className='mx-2 text-black'>|</span><span className="text-black">게임</span><span className='mx-2 text-black'>|</span><span className="text-black">FPS</span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        {/* <li className="d-flex align-items-center me-3 mx-3 mt-1">
                                                            <span className="fs-7">2024. 03. - 2024. 11.
                                                            </span>
                                                        </li> */}
                                                        <li className="d-flex align-items-center me-3 mx-3 mt-1">
                                                            <span className="card-cover-award p-1 border-0 font-11 rounded-2 px-2">
                                                                    <span className="text-only-black font-11 fs-7 fw-normal"><FontAwesomeIcon icon={faMedal} className='pe-2 align-middle'/>교내 졸업작품전시회 수상</span>
                                                            </span>
                                                        </li>
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <video className="card-image-main" autoPlay muted loop>
                                                        <source src={project6} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <hr className='text-black hr-w2'/>
                            <div className="col">
                                <NavLink to="lethaldeliveryvr" id="lethaldeliveryvr">
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-1-5 lh-1 fw-bold2 font-11 mx-3 project-title text-black">리썰딜리버리 <div className="kor-hidden">LethalDelivery Game, 유니티, 씨샵, C#, Unity, 리썰 딜리버리, 리썰딜리버리</div></div><span className="fs-7 prj-kor-trans">　LethalDelivery</span>
                                                    <div className='mx-3 fs-6'><span className='btn btn-sm ps-0'><img className="logo-box" src={unitylogo}/></span><span className="text-black">Unity</span><span className='mx-2 text-black'>|</span><span className="text-black">VR게임</span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        {/* <li className="d-flex align-items-center me-3 mb-5 mx-3 mt-1">
                                                            <span className="fs-7">2024. 04. 15. - 06. 10.</span>
                                                        </li> */}
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <img className="card-image-main" src ={project5}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <hr className='text-black hr-w2'/>
                            <div className="col">
                                <NavLink to="mazeforest" id="mazeforest">
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-1-5 lh-1 fw-bold2 font-11 mx-3 project-title text-black">미로의 숲 <div className="kor-hidden">maze forest game, 유니티, 씨샵, C#, Unity, 미로의 숲, 미로의숲</div></div><span className="fs-7 prj-kor-trans">　Maze Forest</span>
                                                    <div className='mx-3 fs-6'><span className='btn btn-sm ps-0'><img className="logo-box" src={unitylogo}/></span><span className="text-black">Unity</span><span className='mx-2 text-black'>|</span><span className="text-black">게임</span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        {/* <li className="d-flex align-items-center me-3 mb-5 mx-3 mt-1">
                                                            <span className="fs-7">2024. 06. 05. - 06. 11.</span>
                                                        </li> */}
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <video className="card-image-main" autoPlay muted loop>
                                                            <source src={project7} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <hr className='text-black hr-w2'/>
                            {/* <div className="col">
                                <NavLink to="pacman" id="pacman">
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-1-5 lh-1 fw-bold2 font-11 mx-3 project-title text-black">팩맨 <div className="kor-hidden">pacman, 팩맨, 프로세싱, processing</div></div><span className="fs-7 prj-kor-trans">　Pacman</span>
                                                    <div className='mx-3 fs-6'><span className='btn btn-sm ps-0'><img className="logo-box" src={processinglogo}/></span><span className="text-black">Processing</span><span className='mx-2 text-black'>|</span><span className="text-black">게임</span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        //<li className="d-flex align-items-center me-3 mb-5 mx-3 mt-1">
                                                        //    <span className="fs-7">2023. 09. - 10.</span>
                                                        //</li> 
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <img className="card-image-main" src ={project3}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <hr className='text-black hr-w2'/> */}
                            <div className="col">
                                <NavLink to="website" id="website">
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-1-5 lh-1 fw-bold2 font-11 mx-3 project-title text-black">포트폴리오<div className="kor-hidden">portfolio website, 리액트, HTML, CSS, 포트폴리오, 웹사이트, 포폴</div></div><span className="fs-7 prj-kor-trans">　Portfolio Website</span>
                                                    <div className='mx-3 fs-6'><span className='btn btn-sm ps-0'><img className="logo-box" src={reactlogo}/></span><span className="text-black">React</span><span className='mx-2 text-black'>|</span><span className="text-black">웹사이트</span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        {/* <li className="d-flex align-items-center me-3 mb-5 mx-3 mt-1">
                                                            <span className="fs-7">2023. 10. - 2024. 02.　*지속 업데이트</span>
                                                        </li> */}
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <img className="card-image-main" src ={project4}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            {/*<hr className='text-black hr-w2'/>*/}
                        </div>
                    </div>
                </div>
                {/* <div className="row gx-5 justify-content-center">
                    <div className="mb-5">
                        <div className="row row-cols-2 row-cols-lg-2 align-items-stretch g-4 cards">
                            <div className="col">
                                <a href={prop1pdf}>
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-md-2 row-cols-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-2 lh-1 fw-bold font-11 mx-3 project-title text-black">FocusOnYou<div className="kor-hidden">포커스온유, smilegate</div></div><div className="fs-7 mb-3 prj-kor-trans">　 포커스 온 유</div>
                                                    <div className='mx-3 fs-6'><span className="text-black">Smilegate&reg;</span></div>
                                                    <div className='mx-3 fs-6'><span className="text-black">Reverse Proposal</span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        <li className="d-flex align-items-center me-3 mb-5 mx-3 mt-1">
                                                            <span className="fs-7">2024. 04. 09.</span>
                                                        </li>
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <img className="card-image-main" src ={prop1}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href={prop2pdf}>
                                    <div className="img-fluid"> 
                                        <div className="card card-cover-main h-100 overflow-hidden text-black  card-border-0 rounded-4">
                                            <div className="row row-cols-1">
                                                <div className='col-lg-7 py-4 order-lg-1 order-2'>
                                                    <div className="country mb-3 fs-2 lh-1 fw-bold font-11 mx-3 project-title text-black">LethalDelivery<div className="kor-hidden">리썰 딜리버리, 기획서, 리썰딜리버리</div></div><div className="fs-7 mb-3 prj-kor-trans">　 리썰딜리버리</div>
                                                    <div className='mx-3 fs-6'><span className="text-black">　</span></div>
                                                    <div className='mx-3 fs-6'><span className="text-black">Proposal</span></div>
                                                    <ul className="list-unstyled mt-auto small2">
                                                        <li className="d-flex align-items-center me-3 mb-5 mx-3 mt-1">
                                                            <span className="fs-7">2024. 06. 10.</span>
                                                        </li>
                                                        <li className="d-flex align-items-center mt-5 city">
                                                            <span className="text-end fs-4 card-in-arrow-left">
                                                                <FontAwesomeIcon icon={faArrowRightLong} className='go-arrow-noblank'/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='col-lg-5 order-lg-2 order-1'>
                                                    <div className='card card-border-0 rounded-4 mb-3'>
                                                        <img className="card-image-main" src ={project5}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            </div>
        </section>
      </motion.div>
      
      );
    }


  export default Project;