import React from "react";

export default class Nav extends React.Component {
  render() {
    const cube_icon = '\uf1b2';
    const unhide_icon = '\uf06e';
    const flag_icon = '\uf11e';
    const dollar_icon = '\uf155';
    const lightning_icon = '\uf0e7';
    return (
      <nav class="narrow container">
        <div class="ts icon menu">
          <button class="ts circular large icon button">
            <a href="profile.html">
              <i class="Cube icon">{cube_icon}</i>
            </a>
          </button>
          <button class="ts circular large icon button">
            <a href="photo.html">
              <i class="Unhide icon">{unhide_icon}</i>
            </a>
          </button>
          <button class="ts circular large icon button">
            <a href="rank.html">
              <i class="Flag Checkered icon">{flag_icon}</i>
            </a>
          </button>
          <button class="ts circular large icon button">
            <a href="donation.html">
              <i class="Dollar icon">{dollar_icon}</i>
            </a>
          </button>
          <div class="right menu">
            <button class="ts circular large icon button">
              <a href="tasks.html">
                <i class="Lightning icon">{lightning_icon}</i>
              </a>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
