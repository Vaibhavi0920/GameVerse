import React from 'react';

const TextField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="text-field">
      <label>{label}</label><br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="gameverse-input"
      />
    </div>
  );
};

export default TextField;
