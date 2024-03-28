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
                    <input type="checkbox" id="toggle-dark-mode" checked={darkMode} onChange={toggleDarkMode} />
                    <label htmlFor="toggle-dark-mode" className="darkmode-toggle fs-4 text-black">
                        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DarkModeToggle;