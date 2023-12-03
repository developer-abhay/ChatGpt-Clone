import React from "react";
import "./ExamplePrompts.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ExamplePrompts = () => {
  return (
    <div className="example-prompt-container">
      <div className="prompt">
        <div className="text">
          <h3>Tell me a fun fact</h3>
          <p>about the Roman empire</p>
        </div>
        <div className="upward-arrow">
          <ArrowUpwardIcon className="icon" />
        </div>
      </div>
      <div className="prompt">
        <div className="text">
          <h3>Explain why popcorn pops</h3>
          <p>to a kid who loves watching it in the microwave</p>
        </div>
        <div className="upward-arrow">
          <ArrowUpwardIcon className="icon" />
        </div>
      </div>
      <div className="prompt">
        <div className="text">
          <h3>Suggest fun activities</h3>
          <p>for a family of 4 to do indoors on a rainy day </p>
        </div>
        <div className="upward-arrow">
          <ArrowUpwardIcon className="icon" />
        </div>
      </div>
      <div className="prompt">
        <div className="text">
          <h3>create a character </h3>
          <p>to start a film club</p>
        </div>
        <div className="upward-arrow">
          <ArrowUpwardIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ExamplePrompts;
