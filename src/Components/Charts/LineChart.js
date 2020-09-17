import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "./LineChart.css";
import color from "rcolor";

const initialState = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ],
  datasets: [
    {
      label: "Work time in hours",
      backgroundColor: "rgba(25,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 80, 50],
    },
  ],
};

class Graph extends Component {
  componentWillMount() {
    this.setState(initialState);
  }
  componentDidMount() {
    var _this = this;

    setInterval(function () {
      var oldDataSet = _this.state.datasets[0];
      var newData = [];

      for (var x = 0; x < _this.state.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 51) + 50);
      }

      var newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;
      newDataSet.backgroundColor = color();
      newDataSet.borderColor = color();
      newDataSet.hoverBackgroundColor = color();
      newDataSet.hoverBorderColor = color();

      var newState = {
        ...initialState,
        datasets: [newDataSet],
      };

      _this.setState(newState);
    }, 5000);
  }
  render() {
    return (
      <Bar
        data={this.state}
        options={{
          objectFit: "contain",
          maintainAspectRatio: false,
        }}
      />
    );
  }
}

const ChartContainer = () => {
  return (
    <div className="CContainer">
      <Graph />
    </div>
  );
};

export default ChartContainer;
