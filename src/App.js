import './App.css';
import React, { useEffect } from 'react';
import cursorImage from './images/Cursor.png'; 

const App = () => {
  useEffect(() => {
    document.body.style.cursor = `url(${cursorImage}), auto`;

    return () => {
      // 컴포넌트 언마운트시 커서 기본값
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <div>

    </div>
  );
};

export default App;