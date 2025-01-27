import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SoftSkillsProgressbar.css';

const SoftSkillsProgressbar = ({ name, progress, icon }) => {
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const [currentProgress, setCurrentProgress] = useState(0);
  const progressRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentProgress(progress);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) observer.observe(progressRef.current);

    return () => {
      if (progressRef.current) observer.unobserve(progressRef.current);
    };
  }, [progress]);

  const progressOffset =
    circleCircumference - (currentProgress / 100) * circleCircumference;

  return (
    <div className="circle-progressbar softskills-progressbar" id="softskills-progressbar" ref={progressRef}>
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
            strokeDashoffset: progressOffset,
            transition: 'stroke-dashoffset 1.5s ease-out',
          }}
        />
      </svg>
      <div className="circle-progressbar__icon">
        <img src={icon} alt={`${name} icon`} className="icon-image" />
      </div>
      <h4 className="mt-10 text-base text-customWhite text-center uppercase font-normal">{name}</h4>
    </div>
  );
};

SoftSkillsProgressbar.propTypes = {
  name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired, 
};

export default SoftSkillsProgressbar;
