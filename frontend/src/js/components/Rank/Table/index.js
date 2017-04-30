import React from "react";

export default class Table extends React.Component {
  render() {

    return (
      <div class="ts container">
        <table class="ts celled table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Minions Dave</td>
              <td>80,000 pts</td>
            </tr> 
            <tr class="error">
              <td>2</td>
              <td>Honda Yei</td>
              <td>50,000 pts</td>
            </tr> 
            <tr>
              <td>3</td>
              <td>Gulu</td>
              <td>30 pts</td>
            </tr> 
          </tbody>
        </table>
      </div>
    );
  }
}
