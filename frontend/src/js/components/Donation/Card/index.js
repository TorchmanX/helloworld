import React from "react";

export default class Card extends React.Component {
  render() {
    const world_icon = '\uf0ac';
    return (
      <div>
        <a class="ts card">
          <div class="content">
            <div class="header">
              Some very good program
            </div>
            <div class="meta">
              <div>We need you</div>
            </div>
          </div>
          <div class="symbol">
            <i class="World icon">{world_icon}</i>
          </div>
        </a>
        <a class="ts card">
          <div class="content">
            <div class="header">
              Yet another nice program
            </div>
            <div class="meta">
              <div>We need you too</div>
            </div>
          </div>
          <div class="symbol">
            <i class="World icon">{world_icon}</i>
          </div>
        </a>
      </div>
    );
  }
}
