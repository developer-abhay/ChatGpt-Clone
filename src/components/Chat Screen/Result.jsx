import React from "react";
import "./Result.css";
import logo from "../../assets/chatGPT-Logo-Green.jpg";

const Result = ({ text }) => {
  return (
    <div className="result">
      <div className="chat-details">
        <div className="chat-logo">
          <img src={logo} alt="" />
        </div>
        <h2>ChatGPT</h2>
      </div>
      <p className="result-text">{text}</p>
    </div>
  );
};

export default Result;
