import React from "react";
import "./UserChat.css";

const UserChat = ({ text }) => {
  return (
    <div className="user-chat">
      <div className="user-details">
        <div className="user-logo">AB</div>
        <h2>You</h2>
      </div>

      <div className="input-text">{text}</div>
    </div>
  );
};

export default UserChat;
