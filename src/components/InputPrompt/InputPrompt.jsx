import React, { useContext, useState } from "react";
import { Context } from "../../contextAPI.js";
import "./InputPrompt.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const InputPrompt = () => {
  const { input, setInput, handleSend } = useContext(Context);

  return (
    <div className="input-prompt-container">
      <div className="input-prompt">
        <input
          type="text"
          value={input}
          placeholder="Message ChatGPT..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="upward-arrow"
          onClick={(e) => handleSend(e)}
        >
          <ArrowUpwardIcon className="icon" />
        </button>
      </div>
      <p>ChatGPT can make mistakes. Consider checking important information.</p>
    </div>
  );
};

export default InputPrompt;
