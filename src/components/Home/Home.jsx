import React from "react";
import "./Home.css";
import icon from "../../assets/ChatGPT-Logo.png";
import Version from "./Version/Version";
import ExamplePrompts from "./ExamplePrompts/ExamplePrompts";
import InputPrompt from "../InputPrompt/InputPrompt";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="home">
      {/* Header (Only visible on smaller screens) */}
      <Header />
      {/* Version Button */}
      <Version />
      {/* Background Icon and text */}
      <div className="bg">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <p>How can I help you today?</p>
      </div>
      {/* Example Promts */}
      <ExamplePrompts />
      {/* Main prompt Input */}
      <InputPrompt />
      {/* Help Me  */}
      <div className="help-me">?</div>
    </div>
  );
};

export default Home;
