import React from "react";
import { Radar } from 'react-chartjs-2';

export default class LineChart extends React.Component {
  render() {
    const rader_data = {
      labels: ["CS", "AR", "OD", "HP", "Star"],
      datasets: [
        {
          label: "Current",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [3, 5.3, 4, 6, 3.2]
        }
      ]
    }

    return (
      <div class="content">
        <Radar 
          data={rader_data}
        />
      </div>
    );
  }
}
