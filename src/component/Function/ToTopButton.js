/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://usfree.site
*/

import { useEffect } from "react";

export default function ToTopButton() {
    useEffect(() => {
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
    }, );
    return null;
};