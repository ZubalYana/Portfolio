import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CircleProgressbar.css';

const CircleProgressbar = ({ icon }) => {
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const [animationComplete, setAnimationComplete] = useState(false);
  const progressRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationComplete) {
          setAnimationComplete(true);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) observer.observe(progressRef.current);

    return () => {
      if (progressRef.current) observer.unobserve(progressRef.current);
    };
  }, [animationComplete]);

  return (
    <div className="circle-progressbar" ref={progressRef}>
      <svg
        className="circle-progressbar__svg"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          className="circle-progressbar__background"
        />
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          className="circle-progressbar__progress"
          style={{
            strokeDasharray: circleCircumference,
            strokeDashoffset: animationComplete ? 0 : circleCircumference,
            transition: 'stroke-dashoffset 1.5s ease-out',
          }}
        />
      </svg>
      <div className="circle-progressbar__icon">
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

CircleProgressbar.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default CircleProgressbar;
