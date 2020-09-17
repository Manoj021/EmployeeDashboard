import React from "react";
import "./ContentCard.css";
const ContentCard = (props) => {
  let styleclass = "";
  props.height === "1"
    ? (styleclass = "ContentCardHalf")
    : (styleclass = "ContentCardFull");
  return (
    <div className={styleclass}>
      <div className="ContentTitle">{props.title}</div>
      <div className="InnerContainer">{props.children}</div>
    </div>
  );
};
export default ContentCard;
