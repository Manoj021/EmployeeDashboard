import React, { Component } from "react";
import "./StopWatch.css";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    clockInTime: "00:00:00",
    clockOutTime: "00:00:00",
  };

  startTimer = () => {
    this.showClockin();
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.showClockout();
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  mytime = () => {
    var d = new Date();
    var h = this.addZero(d.getHours());
    var m = this.addZero(d.getMinutes());
    var s = this.addZero(d.getSeconds());
    return h + ":" + m + ":" + s;
  };

  showClockin = () => {
    this.setState({ clockInTime: this.mytime() });
  };
  showClockout = () => {
    this.setState({ clockOutTime: this.mytime() });
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="StopwatchContainer">
        <div className="Stopwatch">
          <div className="Stopwatch-header">
            <p>
              {new Date()
                .toLocaleDateString(undefined, {
                  weekday: "long",
                })
                .toUpperCase()}
            </p>
            <p>
              {new Date().toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="Stopwatch-display">
            {hours} : {minutes} : {seconds}
          </div>
          <p>Total Work Time</p>
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button onClick={this.startTimer}>Clock in</button>
          )}
          {this.state.timerOn === true && this.state.timerTime > 0 && (
            <button onClick={this.stopTimer}>Clock out</button>
          )}
        </div>
        <div className="ClockTime">
          <p>clockInTime : </p>
          <p className="timeColoring">{this.state.clockInTime}</p>
          <p>clockOutTime : </p>
          <p className="timeColoring">{this.state.clockOutTime}</p>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
