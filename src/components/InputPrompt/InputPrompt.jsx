import React from "react";
import "./InputPrompt.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const InputPrompt = () => {
  return (
    <div className="input-prompt">
      <input type="text" placeholder="Message ChatGPT..." />
      <div className="upward-arrow">
        <ArrowUpwardIcon className="icon" />
      </div>
      <p>ChatGPT can make mistakes. Consider checking important information.</p>
    </div>
  );
};

export default InputPrompt;
