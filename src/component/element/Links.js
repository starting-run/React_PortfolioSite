import { faBlogger, faGithub, faGoogleDrive, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser, faChartSimple, faCode, faGraduationCap, faInbox, faNoteSticky, faServer } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

class Links extends Component {
    render() {
      return (
        <div>
            <Helmet>
                <title>링크 - USFREE</title>
            </Helmet>
            <div class="container px-4 my-2 mt-10">
                <div class="mb-5">
                    <h1 class="display-3 fw-bolder mb-0"><span class="text-gradient d-inline">LINK</span></h1>
                    <div class=""><span class="fw-bolder">　</span></div>
                </div>
            </div>
            <div class="bg-white">
                <div class="container px-4 mt-5">
                    <div class="py-5  px-md-5">
                        <div class="mb-5">
                        </div>
                        <div class="card shadow border-0 rounded-2 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5 mb-3">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0 c-fisrt">
                                        <div class="bg-light p-4 rounded-2">
                                            <div class="small text-muted mb-3">Drive</div>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://drive.google.com/drive/my-drive"><FontAwesomeIcon icon={faGoogleDrive} /> Google Drive</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://usfree.direct.quickconnect.to:7236/"><FontAwesomeIcon icon={faServer} /> NAS</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://notion.so"><FontAwesomeIcon icon={faNoteSticky}/> Notion</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center gx-5 mb-3">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0 c-fisrt">
                                        <div class="bg-light p-4 rounded-2">
                                            <div class="small text-muted mb-3">SNS</div>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://www.instagram.com/w99hyun/"><FontAwesomeIcon icon={faInstagram}/> Instagram</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://github.com/usfree"><FontAwesomeIcon icon={faGithub}/> Github</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://usfree.site/blog"><FontAwesomeIcon icon={faBlogger}/> Blog</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center gx-5 mb-3">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0 c-fisrt">
                                        <div class="bg-light p-4 rounded-2">
                                            <div class=" small text-muted mb-3">P/S</div>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://solved.ac/profile/tlrmsjtm77"><FontAwesomeIcon icon={faCode}/> solved.ac</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://www.acmicpc.net/user/tlrmsjtm77"><FontAwesomeIcon icon={faCode}/> BOJ</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://codeforces.com/profile/tlrmsjtm77"><FontAwesomeIcon icon={faChartSimple}/> Codeforces</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0 c-fisrt">
                                        <div class="bg-light p-4 rounded-2">
                                            <div class="small text-muted mb-3">Edu.</div>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://ecampus.kangnam.ac.kr/"><FontAwesomeIcon icon={faChalkboardUser}/> e-campus</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://web.kangnam.ac.kr/"><FontAwesomeIcon icon={faGraduationCap}/> 강남대학교</a>
                                            <a class="btn btn-outline-dark btn-lg px-5 py-2 me-sm-3 fs-6 fw-bolder mb-2" href="https://sae.kangnam.ac.kr/"><FontAwesomeIcon icon={faGraduationCap}/> ICT융합공학부</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      );
    }
  }

  export default Links;