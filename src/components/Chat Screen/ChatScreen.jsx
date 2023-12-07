import React, { useContext } from "react";
import Result from "./Result";
import UserChat from "./UserChat";

import "./ChatScreen.css";
import { Context } from "../../contextAPI";

const ChatScreen = () => {
  const { messages } = useContext(Context);

  return (
    <div className="chat-screen">
      {messages.map((item) => {
        if (!item.isBot) {
          <UserChat text={item.text} />;
        } else {
          <Result text={item.text} />;
        }
      })}
    </div>
  );
};

export default ChatScreen;
