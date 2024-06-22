/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from 'jquery';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    function acorClose() {
        if ($('.navbar-toggler').attr('aria-expanded') == 'true') {
            $(".navbar-toggler").trigger("click");
            $("input:checkbox[id='hbg']").prop("checked", false);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        acorClose(); // 페이지 이동시 햄버거 메뉴 close
    }, [pathname]);

    return null;
};