import React from 'react';

const LeavePartyButton = ({ onClick }) => {
  return (
    <button className="gameverse-button" onClick={onClick}>
      Leave Party
    </button>
  );
};

export default LeavePartyButton;
