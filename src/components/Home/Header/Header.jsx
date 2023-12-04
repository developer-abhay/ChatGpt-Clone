import React from "react";
import { FaRegEdit } from "react-icons/fa";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import "./Header.css";

const Header = () => {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    sidebar.classList.add("show");
    closeBtn.classList.add("show");
  };

  return (
    <div className="header">
      <MenuSharpIcon className="hamburger-icon" onClick={showSidebar} />
      <p>New Chat</p>
      <FaRegEdit className="edit-icon" />
    </div>
  );
};

export default Header;
