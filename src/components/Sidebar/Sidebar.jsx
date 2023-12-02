import React from "react";
import "./Sidebar.css";
import icon from "../../assets/ChatGPT-Logo.jpg";
import { FaRegEdit } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Top (scrollable) */}
      <div className="sidebar-top">
        {/* New Chat Button */}
        <div className="new-chat-btn">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="new-chat-btn-details">
            <h2>New chat</h2>
            <FaRegEdit className="edit-icon" />
          </div>
        </div>
        {/* History */}
        <div className="history">
          <div className="history-container">
            <h2 className="history-date">Previous 30 Days</h2>
            <p className="history-topic">Positively Skewed Order:M-M-M</p>
            <p className="history-topic">Topophilia Connection Love</p>
            <p className="history-topic">Soc-Arch Q&A</p>
            <p className="history-topic">Chat Assistance Request</p>
            <p className="history-topic">User Seeks Assistance</p>
            <p className="history-topic">Hello Chat.</p>
          </div>
          <div className="history-container">
            <h2 className="history-date">November</h2>
            <p className="history-topic">Chat Request: Title Creation</p>
          </div>
          <div className="history-container">
            <h2 className="history-date">October</h2>
            <p className="history-topic">Hello chat! Assistance offered.</p>
            <p className="history-topic">
              Chat request: Summarize conversation
            </p>
            <p className="history-topic">Front-end Blog Ideas: 50</p>
            <p className="history-topic">Hello Chat!</p>
            <p className="history-topic">College Hostel Life Rap</p>
            <p className="history-topic">Instagram Content</p>
          </div>
          <div className="history-container">
            <h2 className="history-date">Previous 30 Days</h2>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
          </div>
          <div className="history-container">
            <h2 className="history-date">Previous 30 Days</h2>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
          </div>
          <div className="history-container">
            <h2 className="history-date">Previous 30 Days</h2>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
          </div>
          <div className="history-container">
            <h2 className="history-date">Previous 30 Days</h2>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
            <p className="history-topic">Hello World</p>
          </div>
        </div>
      </div>
      {/* Sidebar bottom (fixed)*/}
      <div className="sidebar-bottom">
        {/* Upgrade Button */}
        <div className="upgrade-button">
          <div className="upgrade-button-icon">
            <BsStars className="icon" />
          </div>
          <div className="upgrade-button-details">
            <h1> Upgrade</h1>
            <p>Get GPT-4,DAAL-E, and more</p>
          </div>
        </div>
        {/* User Profile */}
        <div className="user-profile">
          <div>AB</div>
          <p> Abhay Sharma </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
