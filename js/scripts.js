/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    /* Back to Top
    * ------------------------------------------------------ */

    
(function(html) {
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop

    (function ssInit() {

        ssBackToTop();

    })();


    document.addEventListener('DOMContentLoaded', function(){

        function checkDarkMode() {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        //다크모드 토글
        if(document.querySelector('.darkmode')){
            if(checkDarkMode()){
                //다크모드 켜기
                document.body.dataset.darkmode='on';
                document.querySelector('#toggle-radio-dark').checked = true;
            }
            
            //다크모드 이벤트 핸들러
            document.querySelector('.darkmode').addEventListener("click", e=>{
                if(e.target.classList.contains('todark')){
                    document.body.dataset.darkmode='on';
                    localStorage.setItem("darkmode", "on");
                }else if(e.target.classList.contains('tolight')){
                    document.body.dataset.darkmode='off';
                    localStorage.setItem("darkmode", "off");
                }
            },false);
        }else{
            localStorage.removeItem("darkmode");
        }

    })
    /*
    jQuery(function($) {
        $("body").css("display", "none");
        $("body").fadeIn(2000);
        $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
        });
        function redirectPage() {
        window.location = linkLocation;
        }
        });
    document.oncontextmenu = function(){return false;}*/

    const modalOpenButton = document.getElementById('modalOpenButton');
    const modalCloseButton = document.getElementById('modalCloseButton');
    const modal = document.getElementById('modalContainer');
    const modalcontent = document.getElementById('modalContent');

    modalOpenButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalcontent.classList.remove('hidden');
    modalOpenButton.classList.add('hidden');
    modalCloseButton.classList.remove('hidden');
    });

    modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalcontent.classList.add('hidden');
    modalOpenButton.classList.remove('hidden');
    modalCloseButton.classList.add('hidden');
    });

})(document.documentElement);


