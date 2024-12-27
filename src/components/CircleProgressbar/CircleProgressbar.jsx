import React from 'react';
import PropTypes from 'prop-types';
import './CircleProgressbar.css'; 

const CircleProgressbar = ({ icon, progress }) => {
  const circleRadius = 50; 
  const circleCircumference = 2 * Math.PI * circleRadius; 

  const progressOffset = circleCircumference - (progress / 100) * circleCircumference;

  return (
    <div className="circle-progressbar">
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
  progress: PropTypes.number.isRequired, 
};

export default CircleProgressbar;
