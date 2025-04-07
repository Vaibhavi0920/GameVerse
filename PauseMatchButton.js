import React from 'react';

const PauseMatchButton = ({ onClick }) => {
  return (
    <button className="gameverse-button" onClick={onClick}>
      Pause Match
    </button>
  );
};

export default PauseMatchButton;
