import React from "react";
import "./ContentBox.css";

import OverviewContentBox from "./OverviewContent";

class ContentBox extends React.Component {
  render() {
    let Navitem;
    console.log("got index as " + this.props.NavValue);
    switch (this.props.NavValue) {
      case 0:
        Navitem = <OverviewContentBox />;
        break;
      case 2:
        Navitem = (
          <div className="Calender">
            <div class="responsive-iframe-container big-container">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23d5d5d5&amp;ctz=Asia%2FKolkata&amp;showCalendars=1&amp;showTabs=1&amp;showPrint=0&amp;showTitle=1&amp;src=ZDZpcjA4Z3E3bTVobmtvMjEzNDB0ODFsMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;title=Schedule%20Your%20Meetings%20Here"
                style={{ border: "solid 1px #777" }}
                width="800"
                title="Scheduler"
                height="600"
                frameborder="0"
                scrolling="yes"
              ></iframe>
            </div>
            <div class="responsive-iframe-container small-container">
              <iframe
                src="https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&height=800&wkst=1&bgcolor=%23db694f&src=8m2gergpnwapfiht0384htn554%40group.calendar.google.com&color=%23B1440E&ctz=America%2FLos_Angeles"
                style={{ borderWidth: 0 }}
                width="100%"
                title="Calender"
                height="600"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        );
        break;
      default:
        Navitem = <p>Page under Construction</p>;
    }
    return <div className="ContentBox">{Navitem}</div>;
  }
}

export default ContentBox;
