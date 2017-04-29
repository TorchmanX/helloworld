import React from "react";

export default class Progress extends React.Component {
  render() {
    const arrow_left_icon = '\uf060';
    return (
      <div class="ts message">
        Friendly Points: 
        <div class="ts small positive progress">
          <div class="bar" style={{width: "60%"}}>
            <span class="text">60%</span>
          </div>
        </div>
        Have followed: 
        <div class="ts small positive progress">
          <div class="bar" style={{width: "32%"}}>
            <span class="text">32%</span>
          </div>
        </div>
      </div>
    );
  }
}
