import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';

function CodeBox({ code }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const codeContainerRef = useRef(null);

    const toggleCode = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (codeContainerRef.current) {
            const codeContainer = codeContainerRef.current;
            if (isOpen) {
                codeContainer.style.maxHeight = `${codeContainer.scrollHeight}px`;
            } else {
                codeContainer.style.maxHeight = '150px';
            }

            // 코드의 길이가 짧아서 초기 최대 높이에 못 미치는 경우
            if (codeContainer.scrollHeight <= 150) {
                setIsShort(true);
            } else {
                setIsShort(false);
            }
        }
    }, [isOpen, code]);

    const containerClassName = `code-container mb-3 ${isOpen ? 'open' : ''} ${isShort ? 'short' : ''}`;

    return (
        <div className={containerClassName} ref={codeContainerRef}>
            <pre className="code font-11">
                {code}
            </pre>
            {!isShort && (
                <button className="toggle-button" onClick={toggleCode}>
                    <span className={`arrow ${isOpen ? 'up' : 'down'} font-7 fs-1`}>{'>'}</span>
                </button>
            )}
        </div>
    );
}

export default CodeBox;
