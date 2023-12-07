import { createContext, useState } from "react";
import { sendMsgToOpenAI } from "./openai";

export const Context = createContext(null);

export const ContextAPIProvider = (props) => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const handleSend = async (e) => {
    e.preventDefault();

    const userText = input;
    setInput("");
    setMessages([...messages, { text: userText, isBot: false }]);

    try {
      const res = await sendMsgToOpenAI(userText);
    } catch (err) {
      console.error(err);
    }
    setMessages([...messages, { text: "1", isBot: true }]);
  };

  const contextValue = {
    input,
    messages,
    setInput,
    handleSend,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

//

//  };
