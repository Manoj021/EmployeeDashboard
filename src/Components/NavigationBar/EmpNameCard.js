import React from "react";
import "./EmpNameCard.css";
import avatar from "./avatar.png";
const EmpNameCard = () => {
  return (
    <div className="NameCardContainer">
      <img className="NameCardImage" src={avatar} alt="profile pic"></img>
      <span className="NameCarditem1">M Manoj</span>
      <div className="NameCarditem2">
        <p>Uid : 00012</p>
        <p>Role: Developer</p>
      </div>
    </div>
  );
};
export default EmpNameCard;
