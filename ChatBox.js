import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="chat-box">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message"
      />
      <button>Send</button>
    </div>
  );
};

export default ChatBox;
