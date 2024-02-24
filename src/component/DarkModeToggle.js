import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

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
                    <input type="radio" name="toggle" id="toggle-radio-light" checked={!darkMode} onChange={toggleDarkMode} />
                    <label htmlFor="toggle-radio-light" className="tolight darkmode-icon">
                        <FontAwesomeIcon icon={faSun} />
                    </label>
                    <input type="radio" name="toggle" id="toggle-radio-dark" checked={darkMode} onChange={toggleDarkMode} />
                    <label htmlFor="toggle-radio-dark" className="todark darkmode-icon">
                        <FontAwesomeIcon icon={faMoon} />
                    </label>
                    <div className="darkmode-bg"></div>
                </div>
            </div>
        </div>
    );
}

export default DarkModeToggle;