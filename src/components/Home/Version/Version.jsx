import React from "react";
import "./Version.css";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import { HiOutlineLightningBolt } from "react-icons/hi";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { BsStars } from "react-icons/bs";

const Version = () => {
  const showPlan = () => {
    const versionBtn = document.querySelector(".chatgpt-version");
    const plan = document.querySelector(".plan");

    versionBtn.style.backgroundColor = "#2A2A34";
    plan.classList.toggle("not-visible");
    if (plan.classList.contains("not-visible")) {
      versionBtn.style.backgroundColor = "transparent";
    }
  };

  return (
    // version container
    <div className="version-container">
      {/* version button */}
      <div className="chatgpt-version" onClick={showPlan}>
        ChatGPT <span>3.5</span>
        <ExpandMoreTwoToneIcon className="icon" />
      </div>
      {/* version upgrade plan */}
      <div className="plan not-visible">
        {/* gpt 3.5 */}
        <div className="gpt3_5 plan-item">
          <HiOutlineLightningBolt className="icon" />
          <div className="text">
            <h2>GPT-3.5</h2>
            <p>Great for everyday tasks</p>
          </div>
          <CheckCircleRoundedIcon className="checked-icon" />
        </div>
        <div className="hr" />
        {/* gpt 4 */}
        <div className="gpt4 plan-item">
          <div className="div1">
            <div className="gpt4-icon">
              <BsStars className="icon" />
            </div>
            <div className="text">
              <h2>GPT-4</h2>
              <p>Our smartest and most capable model.</p>
              <p>Includes DALL·E, browsing and more.</p>
            </div>
          </div>
          <button className="upgrade-btn"> Upgrade to Plus</button>
        </div>
      </div>
    </div>
  );
};

export default Version;
