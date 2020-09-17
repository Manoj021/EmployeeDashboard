import React from "react";
import "./ContentBox.js";
import ContentCard from "./ContentCards/ContentCard";
import ProjectDetails from "./ProjectDetailsBlock/ProjectDetails";
import Stopwatch from "./Timer/StopWatch";
import ChartContainer from "../Charts/LineChart";
const OverviewContentBox = () => {
  return (
    <div className="OverviewContentBox">
      <ContentCard title="Work Log" height="1">
        <Stopwatch />
      </ContentCard>
      <ContentCard title="Work Time Statistics" height="1">
        <ChartContainer />
      </ContentCard>
      <ProjectDetails />
      <ContentCard title="Schedule" height="0">
        <div
          style={{
            position: "absolute",
            top: "34px",
            width: "100%",
            height: "100%",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23d5d5d5&amp;ctz=Asia%2FKolkata&amp;showCalendars=1&amp;showTabs=1&amp;showPrint=0&amp;showTitle=0&amp;src=ZDZpcjA4Z3E3bTVobmtvMjEzNDB0ODFsMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;&mode=AGENDA"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            overFlow="scroll"
            frameborder="0"
            scrolling="yes"
          ></iframe>
        </div>
      </ContentCard>
    </div>
  );
};
export default OverviewContentBox;
