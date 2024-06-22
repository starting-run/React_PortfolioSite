/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 110%;
  height: 3px;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 999999;
`;
const ProgressBar = styled.div`
  height: 4px;
  background: ${(props) => props.color || '#FC8574'};
  width: ${(props) => props.width || 0}%;
  border-radius: 1rem;
`;
const ProgressText = styled.span`
  font-size: 1rem;
`;

const ScrollIndicator = ({ color, showText }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgressWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar width={progressWidth} color={color}>
        {showText && (
          <ProgressText>{`${Math.round(progressWidth)}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
  );
};

export default ScrollIndicator;
