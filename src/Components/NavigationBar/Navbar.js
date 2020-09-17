import React from "react";
import "./NavBar.css";
import EmpNameCard from "./EmpNameCard";
const Navbar = (props) => {
  const navbuttonNames = [
    "Overview",
    "Profile",
    "Calender",
    "Attendance",
    "Documents",
    "Compensation",
    "Support",
  ];
  const navButtons = navbuttonNames.map((nb, index) => {
    return (
      <li className="NavButton" onClick={() => props.changeContent(index)}>
        {nb}
      </li>
    );
  });
  return (
    <div className="NavBar">
      <EmpNameCard />
      <ul>
        <hr className="gap" />
        {navButtons}
      </ul>
    </div>
  );
};

export default Navbar;
