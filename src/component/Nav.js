import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (
        <header>
            <nav id="navbarcontrol" class="navbar navbar-upper navbar-expand-lg navbar-light navbar-py">
                <div id='changecontainer' class="container px-4 ">
                    <a class="navbar-brand" id="mains"><img class="logoimg"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <label class="hamburger">
                        <input type="checkbox" id="hbg"></input>
                        <svg viewBox="0 0 32 32">
                          <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                          <path class="line" d="M7 16 27 16"></path>
                        </svg>
                      </label></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-letter-space fs-fr">
                            <li class="nav-item navmargin hidden"><a class="nav-link" id="project" style="color: red;">Project구버전</a></li>
                            <li class="nav-item navmargin"><a class="nav-link" id="profiles">Profile</a></li>
                            <li class="nav-item navmargin"><a class="nav-link" id="projects">Project</a></li>
                            <li class="nav-item navmargin"><a class="nav-link" href="https://usfree.site/blog">Blog</a></li>
                            <li class="nav-item navmargin"><a class="nav-link" href="https://github.com/usfree" target='_blank'>Github</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
      );
    }
  }

  export default Nav;