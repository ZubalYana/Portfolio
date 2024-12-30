import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './ExploreBtn.css';
const ExploreBtn = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/projects'); 
  };

  return (
    <button className="button button--anthe" onClick={handleButtonClick}>
      <span>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-customWhite hover:text-customWhite transition-colors duration-300 text-2xl"
        />
        <p className="text-customWhite font-medium text-xl ml-4">Explore all</p>
      </span>
    </button>
  );
};

export default ExploreBtn;
