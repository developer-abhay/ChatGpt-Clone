import React, { useState } from "react";
import "./Home.css";
import icon from "../../assets/ChatGPT-Logo.png";
import Version from "./Version/Version";
import ExamplePrompts from "./ExamplePrompts/ExamplePrompts";
import InputPrompt from "../InputPrompt/InputPrompt";
import Header from "./Header/Header";
import ChatScreen from "../Chat Screen/ChatScreen";

const Home = () => {
  const [isChat, setIsChat] = useState("true");
  return (
    <div className="home">
      {/* Header (Only visible on smaller screens) */}
      <Header />
      {/* Version Button */}
      <Version />

      {/* if chat or background */}
      {isChat ? (
        // Chat screen
        <ChatScreen />
      ) : (
        // Background
        <>
          <div className="bg">
            <div className="icon">
              <img src={icon} alt="icon" />
            </div>
            <p>How can I help you today?</p>
          </div>
          // Example Promts
          <ExamplePrompts />
        </>
      )}

      {/* Main prompt Input */}
      <InputPrompt />
      {/* Help Me  */}
      <div className="help-me">?</div>
    </div>
  );
};

export default Home;
