import React from 'react';

const ResetAppButton = ({ onClick }) => {
  return (
    <button className="gameverse-button" onClick={onClick}>
      Reset App State
    </button>
  );
};

export default ResetAppButton;
