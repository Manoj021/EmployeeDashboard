import React from "react";
import "./ProjectCard.css";
import tickmark from "../../../../Assets/Images/WCheckmark.svg";
import clock from "../../../../Assets/Images/clock.svg";
import Assigned from "../../../../Assets/Images/Assigned.svg";
import Pending from "../../../../Assets/Images/Pending.svg";

const ProjectCard = (props) => {
  let imagename;
  let style;
  switch (props.imagename) {
    case "tickmark":
      imagename = tickmark;
      style = { color: "green" };
      break;
    case "clock":
      imagename = clock;
      style = { color: "rgb(235, 223, 61)" };
      break;
    case "Assigned":
      imagename = Assigned;
      style = { color: "rgb(34, 154, 214)" };
      break;
    case "Pending":
      imagename = Pending;
      style = { color: "rgb(221, 67, 232)" };
      break;
    default:
      console.log("Image location not found");
  }

  return (
    <div className="ProjectCard">
      <div className="ProStatus">
        <div className="ColoredNumber" style={style}>
          {props.value}
        </div>
        <div className="Protitle">Number of Projects {props.title}</div>
      </div>
      <div className="StatusImage">
        <img src={imagename} alt="icon"></img>
      </div>
    </div>
  );
};

export default ProjectCard;
