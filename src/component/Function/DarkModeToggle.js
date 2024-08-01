import React, { useState, useEffect } from 'react';
import icon1 from '../../images/ic-lightmode-w.svg';
import icon2 from '../../images/ic-darkmode.svg';
import hoverIcon1 from '../../images/ic-lightmode-on.png';
import hoverIcon2 from '../../images/ic-darkmode-on.png';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    const [hover, setHover] = useState(false); // hover 상태 관리

    useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.dataset.darkmode = 'on';
            localStorage.setItem('darkmode', 'on');
        } else {
            document.body.dataset.darkmode = 'off';
            localStorage.setItem('darkmode', 'off');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="wrap">
            <div className="darkmode">
                <div className="inner">
                    <input type="checkbox" id="toggle-dark-mode" checked={darkMode} onChange={toggleDarkMode} />
                    <label 
                        htmlFor="toggle-dark-mode" 
                        className="darkmode-toggle fs-5"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <img 
                            src={hover ? (darkMode ? hoverIcon1 : hoverIcon2) : (darkMode ? icon1 : icon2)} 
                            alt="Dark mode toggle" 
                            className="dark-mode-icon" 
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DarkModeToggle;
