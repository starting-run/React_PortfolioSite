import React, { Component } from 'react';
import video from '../../images/Pacman/Processing_Pacman.mp4'
import pdf from '../../images/Pacman/Processing_Pacman.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

class Pacman extends Component {
    render() {
      return (
        <div>
<div id="projectmain">
    <div class="container px-4 my-2 mt-10">
        <div class="mb-5">
            <h1 class="display-3 fw-bolder mb-0"><span class="text-gradient d-inline">PACMAN</span></h1>
            <div class=""><span class="fw-bolder">Processing　</span>2023. 10.</div>
        </div>
    </div>
    <div class="bg-white">
        <div class="container px-4 my-2 mt-5">
            <div class="mb-5">
                <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
                <a href="https://github.com/usfree/Processing_Pacman" target='_blank' class="btn btn-dark-round btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mt-3"><FontAwesomeIcon icon={faGithub} /> Repository</a>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="">
                    <div class="card shadow rounded-2 border-0">
                        <div class="card-body p-0">
                            <div class="d-flex align-items-center">
                                <div class="p-5 proj_text  w-100">
                                    <h3><b>Map Create</b></h3>
    <div class="code mb-2"></div>
                                        <h6>Item 객체입니다. Item은 매 판당 1번만 생성되며, 아이템을 획득하면 오른쪽 아래에 박제됩니다.</h6><br></br>
                                        <h3><b>Result</b></h3>
                                        <video src={video} controls controlsList="nodownload" style={{width: '400px', height: '500px;'}}></video><br/><br/>
                                        <h3><b>Presentation</b></h3>
                                        <p><iframe style={{width:'100%', height:'700px'}} src={pdf}></iframe></p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        <div class="d-flex align-items-center justify-content-center pb-5">
        <Link to='/project' className="btn btn-outline-dark-round btn-lg px-4 py-2 me-sm-3 fs-6 fw-bolder mt-3 mb-5"><FontAwesomeIcon icon={faChevronLeft} />　Back</Link>
        </div>
    </div>
</div>
      </div>
      
      );
    }
  }

  export default Pacman;